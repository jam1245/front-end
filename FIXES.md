# Program Guardian — Fixes & Handoff Notes

This document explains every change made to get **Program Guardian** loading
reliably and deployable to **GitLab Pages on a restricted/internal network**
(e.g. Lockheed Martin internal GitLab, where external CDNs are blocked).

It is written as a handoff so anyone — including a less-capable coding
assistant — can understand the architecture, continue editing, and deploy.

---

## TL;DR — how to work on this project now

1. **Edit the source of truth:** `remixed-b3e53bf6.tsx` (the entire React app).
2. **Rebuild:** `python3 build.py`
   - Regenerates `app.js` from the `.tsx`.
   - Precompiles JSX → `app.compiled.js` (what the browser actually runs).
3. **Preview locally:** serve the folder and open `index.html`, e.g.
   `python3 -m http.server 8000` then visit `http://localhost:8000/`.
4. **Deploy:** commit + push to `main`. GitLab CI (`.gitlab-ci.yml`) copies
   `index.html`, `app.compiled.js`, and `vendor/` into `public/`.

> ⚠️ The browser runs `app.compiled.js`, NOT `app.js` directly.
> If you edit source and don't see changes, you forgot `python3 build.py`.

---

## File map

| File | Role |
|------|------|
| `remixed-b3e53bf6.tsx` | **Source of truth.** The full React app. Edit this. |
| `app.js` | Generated from the `.tsx` (globals instead of imports). Intermediate. |
| `app.compiled.js` | **Generated.** Precompiled plain JS (no JSX). The browser loads this. |
| `index.html` | Entry point. Loads vendored libs + `app.compiled.js` (relative paths). |
| `build.py` | Build script: `.tsx` → `app.js` → `app.compiled.js`. |
| `vendor/` | All JS libraries, committed locally (no CDN). See `vendor/README.md`. |
| `.gitlab-ci.yml` | GitLab Pages deploy job. |

---

## The fixes (in order)

### 1. App never loaded — "Loading timeout" / infinite spinner

**Symptoms:** the loading screen sat forever and timed out.

**Root causes (three):**
1. **Wrong Recharts CDN URL.** `recharts@2.5.0/dist/Recharts.js` does not exist
   (404). The library check looped forever waiting for a `Recharts` global that
   never appeared. Correct path is `recharts@2.15.0/umd/Recharts.js`.
2. **Missing `prop-types`.** Recharts' UMD build calls
   `factory(React, PropTypes, ReactDOM)` — it needs a global `PropTypes`, which
   the page never loaded, so the Recharts global stayed undefined.
3. **Dynamically injected Babel script never executed.** `@babel/standalone`
   only transpiles `<script type="text/babel">` tags that exist at page load.
   The old loader *appended* one afterward, so the app code was never compiled.

**Fix:** corrected the Recharts URL, added `prop-types`, and made the loader
explicitly fetch + transform + run the app. (Later superseded by the
self-contained build below, which removes runtime Babel entirely.)

### 2. Resizable / collapsible Team Chat column

Added a draggable splitter between the center workspace and the right-hand
**Agent Team Chat** column (like Claude Desktop's preview/chat divider).

- Drag the handle to resize the chat (clamped 220–560px).
- Double-click the handle to collapse/expand the chat.
- Width + collapsed state persist in `localStorage`
  (`pg_chatWidth`, `pg_chatCollapsed`).

Implemented in `CommandView` (`startChatDrag`, `chatWidth`, `chatCollapsed`).

### 3. Garbled text (mojibake) — `Â·`, `ðŸ›¡`, `â€"`

`app.js` had been saved in a non-UTF-8 encoding, so every emoji/icon rendered
as garbage. **Fix:** `app.js` is now regenerated from the clean UTF-8 `.tsx` by
`build.py` (UTF-8, no BOM). Never hand-edit `app.js`.

### 4. Per-card "⚡ ask the agent" action → posts into the side chat

Each dashboard card header has a **⚡ button**. Clicking it:

- Posts a PM question + the **card agent's** reply into the **third-column Team
  Chat**, keeping the dashboard visible (no page navigation).
- Replies are **card-aware per agent** (`AGENT_CARD_REPLIES`): Peter answers
  cost cards, Ivy schedule, Ronnie risk, etc., with a shared fallback.
- Auto-opens the chat if collapsed and briefly **flashes** the panel.
- **Shift-click** ⚡ instead opens the full **Direct Chat** page, seeded with
  the same question.

Wiring: `CardAskCtx` (React context) provides the handler so individual card
components don't each need a callback threaded through. `Card` reads it via
`React.useContext(CardAskCtx)`; `CommandView` provides `askCardInChat`;
`onAskCardFull` (App level) is the shift-click → Direct Chat path.

### 5. **GitLab Pages spun forever on the internal network** (the big one)

**Symptom:** on internal GitLab Pages the page spun and never loaded, so it
couldn't be shared.

**Root cause:** the deployed page loaded React, ReactDOM, Recharts, and Babel
from `unpkg.com`, plus the Inter font from Google Fonts. **Those external
domains are blocked on the internal network**, so the scripts never downloaded
and the page hung.

**Fix — make the build fully self-contained (zero external requests):**

- **Vendored all libraries** into `vendor/` (react 18, react-dom 18,
  prop-types 15.8.1, recharts 2.15.0). Committed to the repo.
- **Precompiled the JSX** with `build.py` → `app.compiled.js`, using the
  vendored Babel via Node with the **classic** runtime
  (`presets: [['react', { runtime: 'classic' }]]`) so output is plain
  `React.createElement` calls — no ES module imports, no runtime Babel.
- **Rewrote `index.html`** to load vendored libs + `app.compiled.js` via
  **relative paths** (GitLab Pages serves under a `/group/project/` subpath, so
  absolute `/`-rooted paths would 404), and dropped the external font for a
  system-font stack.
- **Updated `.gitlab-ci.yml`** to deploy `index.html` + `app.compiled.js` +
  `vendor/` (instead of the old standalone HTML that still used CDNs).

**Verified:** zero external network requests, `Babel` is `undefined` at
runtime, and the app renders fully offline.

---

## Build details (`build.py`)

1. Reads `remixed-b3e53bf6.tsx`, drops the two `import` lines, prepends global
   destructuring (`const { useState, ... } = React;` and the Recharts globals),
   changes `export default function App()` → `function App()`, appends the
   ReactDOM render block → writes `app.js` (UTF-8, no BOM).
2. Runs Node with the vendored Babel to transform `app.js` (JSX) into
   `app.compiled.js` using the **classic** JSX runtime.

Requirements: `python3`, `node`, and `vendor/babel.min.js` (build-time only;
not shipped to the browser).

### Why classic runtime matters
Babel's default (automatic) runtime emits
`import { jsx } from "react/jsx-runtime"`, which is an ES module import that a
plain `<script>` in the browser cannot resolve without a bundler. The classic
runtime emits `React.createElement(...)`, which works directly with the global
`React` we already load.

---

## Deploying to internal GitLab (checklist)

1. Copy these into the internal repo (overwrite existing):
   `index.html`, `app.compiled.js`, `build.py`, `vendor/`, `.gitlab-ci.yml`,
   and the source (`remixed-b3e53bf6.tsx`, `app.js`).
2. Commit + push to `main` (or `master`).
3. In GitLab: **CI/CD → Pipelines** should run the `pages` job; then
   **Deploy → Pages** shows the URL, typically
   `https://<group>.pages.<domain>/<project>/` — **open it with the trailing
   slash** so relative asset paths resolve.
4. The CI only does `cp` (no `npm install`), so the runner does **not** need
   internet. If your `.gitlab-ci.yml` uses a Docker `image:`, make sure that
   image is pullable from the internal registry.

---

## Gotchas / future work

- **Always run `python3 build.py` after editing source.** The browser runs
  `app.compiled.js`, not `app.js`.
- `program-guardian-standalone.html` and the PowerShell `*.ps1` scripts are
  **legacy / unused** by the current deploy. Safe to delete to avoid confusion.
- The committed `vendor/` adds ~3 MB to the repo (mostly `babel.min.js`, which
  is build-time only). That is intentional — it's the price of zero external
  dependencies. `babel.min.js` could be moved out of `vendor/` if you prefer it
  not to ship, but it is currently not referenced by `index.html` anyway.
- Want instant local edits without rebuilding? Add an `index.dev.html` that
  loads `vendor/babel.min.js` and compiles `app.js` in-browser
  (`<script type="text/babel" src="app.js">` + `Babel.transformScriptTags()`),
  for local dev only. The deployed `index.html` stays CDN-free.

# Vendored dependencies

These libraries are committed to the repo so the app has **no external/CDN
dependencies at runtime**. This is required for restricted networks (e.g.
internal GitLab Pages where `unpkg.com` and Google Fonts are blocked) — the
previous CDN-based build would spin forever because the scripts never loaded.

| File | Version | Source |
|------|---------|--------|
| `react.production.min.js` | React 18 | https://unpkg.com/react@18/umd/react.production.min.js |
| `react-dom.production.min.js` | React 18 | https://unpkg.com/react-dom@18/umd/react-dom.production.min.js |
| `prop-types.min.js` | 15.8.1 | https://unpkg.com/prop-types@15.8.1/prop-types.min.js |
| `Recharts.js` | 2.15.0 (UMD) | https://unpkg.com/recharts@2.15.0/umd/Recharts.js |
| `babel.min.js` | @babel/standalone | https://unpkg.com/@babel/standalone/babel.min.js |

`babel.min.js` is used **only at build time** (by `build.py`) to precompile the
JSX into `app.compiled.js`. It is NOT shipped to the browser — the deployed page
loads only react, react-dom, prop-types, and Recharts.

To refresh a version, re-download from the URL above and re-run `python3 build.py`.

#!/usr/bin/env python3
"""
Build script for Program Guardian.

Produces deployable, fully self-contained output with NO external/CDN
dependencies — required for restricted networks (e.g. internal GitLab Pages
where unpkg.com / Google Fonts are blocked).

Steps:
  1. Regenerate app.js from the source-of-truth remixed-b3e53bf6.tsx
     (strip imports, add global destructuring, drop `export default`).
  2. Precompile app.js (JSX) -> app.compiled.js (plain JS) using the
     vendored Babel via Node, so the browser never needs Babel at runtime.

Run:  python3 build.py
Requires: python3, node, and the libs in vendor/ (see vendor/README.md).
"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
TSX = ROOT / "remixed-b3e53bf6.tsx"
APP_JS = ROOT / "app.js"
APP_COMPILED = ROOT / "app.compiled.js"
BABEL = ROOT / "vendor" / "babel.min.js"

HEADER = (
    "// Program Guardian - Application Code\n"
    "// Auto-generated from remixed-b3e53bf6.tsx by build.py — do not edit by hand.\n\n"
    "const { useState, useMemo, useRef, useEffect } = React;\n"
    "const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell } = Recharts;\n\n\n"
)

FOOTER = '''
// Render the app
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

  // Wait for React to render before hiding loader
  const checkRender = setInterval(() => {
    const rootEl = document.getElementById('root');
    if (rootEl && rootEl.children.length > 0) {
      clearInterval(checkRender);
      const loading = document.getElementById('loading');
      if (loading) loading.style.display = 'none';
    }
  }, 100);

  setTimeout(() => {
    clearInterval(checkRender);
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
  }, 5000);
} catch (error) {
  console.error('Error rendering app:', error);
  const loadingText = document.getElementById('loading-text');
  if (loadingText) {
    loadingText.textContent = 'ERROR: ' + error.message;
    loadingText.style.color = '#EF4444';
  }
}
'''


def regen_app_js():
    lines = TSX.read_text(encoding="utf-8").splitlines(keepends=True)
    # Drop the two leading import lines; keep everything from line 3 on.
    body = "".join(lines[2:]).replace("export default function App()", "function App()", 1)
    out = HEADER + body.rstrip("\n") + "\n" + FOOTER
    APP_JS.write_text(out, encoding="utf-8")  # UTF-8, no BOM
    print(f"  app.js          {len(out.encode('utf-8')):>8} bytes")


def precompile():
    if not BABEL.exists():
        sys.exit("ERROR: vendor/babel.min.js missing — see vendor/README.md")
    node_script = f'''
        const Babel = require({str(BABEL)!r});
        const fs = require('fs');
        const src = fs.readFileSync({str(APP_JS)!r}, 'utf8');
        const out = Babel.transform(src, {{ presets: [['react', {{ runtime: 'classic' }}]] }}).code;
        fs.writeFileSync({str(APP_COMPILED)!r}, out, 'utf8');
        process.stdout.write(String(Buffer.byteLength(out, 'utf8')));
    '''
    res = subprocess.run(["node", "-e", node_script], capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit("Babel precompile failed:\n" + res.stderr)
    print(f"  app.compiled.js {int(res.stdout.strip()):>8} bytes")


if __name__ == "__main__":
    print("Building Program Guardian (self-contained, no CDN)…")
    regen_app_js()
    precompile()
    print("Done. Deploy: index.html + app.compiled.js + vendor/ (react, react-dom, prop-types, Recharts).")

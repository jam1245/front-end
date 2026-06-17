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
STANDALONE = ROOT / "program-guardian-standalone.html"

# Runtime libs (in load order) that get inlined into the standalone file.
# Babel is intentionally excluded — the app is precompiled.
RUNTIME_LIBS = [
    ROOT / "vendor" / "react.production.min.js",
    ROOT / "vendor" / "react-dom.production.min.js",
    ROOT / "vendor" / "prop-types.min.js",
    ROOT / "vendor" / "Recharts.js",
]

PAGE_CSS = """    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow: hidden; }
    #root { width: 100%; height: 100vh; }
    #loading { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: #EAF1FB; flex-direction: column; gap: 20px; z-index: 9999; }
    #loading-text { font-size: 18px; color: #2563EB; font-weight: 600; letter-spacing: 0.1em; }
    .spinner { width: 50px; height: 50px; border: 4px solid #E8F0FA; border-top-color: #2563EB; border-radius: 50%; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }"""

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


def _inline_script(path):
    # Escape any literal </script in library/app code so it can't close the tag.
    code = path.read_text(encoding="utf-8").replace("</script", "<\\/script")
    return f"<script>\n{code}\n</script>"


def make_standalone():
    """Inline everything into ONE HTML file that works via file:// (double-click,
    email, USB) with no folder, no server, and no internet."""
    scripts = "\n".join(_inline_script(p) for p in RUNTIME_LIBS)
    scripts += "\n" + _inline_script(APP_COMPILED)
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Program Guardian - AI Agent Team Demo</title>
  <meta name="description" content="Program Guardian - AI Agent Team for Defense Program Management.">
  <style>
{PAGE_CSS}
  </style>
</head>
<body>
  <div id="loading">
    <div class="spinner"></div>
    <div id="loading-text">LOADING PROGRAM GUARDIAN...</div>
  </div>
  <div id="root"></div>
  <!-- Everything below is inlined: no CDN, no server, works from file://. -->
{scripts}
</body>
</html>
"""
    STANDALONE.write_text(html, encoding="utf-8")
    print(f"  program-guardian-standalone.html  {len(html.encode('utf-8')):>8} bytes")


if __name__ == "__main__":
    print("Building Program Guardian (self-contained, no CDN)…")
    regen_app_js()
    precompile()
    make_standalone()
    print("Done.")
    print("  • Deploy (GitLab/GitHub Pages): index.html + app.compiled.js + vendor/")
    print("  • Share/open locally (double-click, file://): program-guardian-standalone.html")

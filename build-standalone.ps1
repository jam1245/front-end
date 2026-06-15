# Build Standalone HTML for Program Guardian
# This script creates a complete standalone HTML file from the TSX source

Write-Host "Building Program Guardian Standalone HTML..." -ForegroundColor Cyan

$sourceFile = "remixed-b3e53bf6.tsx"
$outputFile = "program-guardian-standalone.html"

# Check if source file exists
if (-not (Test-Path $sourceFile)) {
    Write-Host "ERROR: Source file not found!" -ForegroundColor Red
    exit 1
}

# Read the TSX file and skip first 2 lines (imports)
Write-Host "Reading source code..." -ForegroundColor Yellow
$tsxContent = Get-Content $sourceFile -Raw
$lines = $tsxContent -split "`n"
$appCode = ($lines | Select-Object -Skip 2) -join "`n"

# Replace export default with regular function
$appCode = $appCode -replace "export default function App\(\)", "function App()"

# Create HTML file
Write-Host "Generating standalone HTML..." -ForegroundColor Yellow

# Write HTML header
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Program Guardian - AI Agent Team Demo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; overflow: hidden; }
    #root { width: 100%; height: 100vh; }
    #loading { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: #EAF1FB; flex-direction: column; gap: 20px; z-index: 9999; }
    #loading-text { font-size: 18px; color: #2563EB; font-weight: 600; letter-spacing: 0.1em; }
    .spinner { width: 50px; height: 50px; border: 4px solid #E8F0FA; border-top-color: #2563EB; border-radius: 50%; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div id="loading"><div class="spinner"></div><div id="loading-text">LOADING PROGRAM GUARDIAN...</div></div>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/recharts@2.5.0/dist/Recharts.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const { useState, useMemo, useRef, useEffect } = React;
    const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell } = Recharts;
"@ | Out-File -FilePath $outputFile -Encoding UTF8

# Append the app code
$appCode | Out-File -FilePath $outputFile -Encoding UTF8 -Append

# Append HTML footer
@"

    
    // Render the app and hide loading screen once mounted
    try {
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
      
      // Wait for React to actually render content before hiding loader
      // Babel compilation can take 2-3 seconds on large files
      const checkRender = setInterval(() => {
        const rootEl = document.getElementById('root');
        if (rootEl && rootEl.children.length > 0) {
          clearInterval(checkRender);
          const loading = document.getElementById('loading');
          if (loading) loading.style.display = 'none';
        }
      }, 100);
      
      // Fallback: hide after 5 seconds regardless
      setTimeout(() => {
        clearInterval(checkRender);
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'none';
      }, 5000);
    } catch (error) {
      console.error('Error rendering app:', error);
      document.getElementById('loading-text').textContent = 'ERROR: ' + error.message;
      document.getElementById('loading-text').style.color = '#EF4444';
    }
  </script>
</body>
</html>
"@ | Out-File -FilePath $outputFile -Encoding UTF8 -Append

Write-Host "Successfully created $outputFile" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Open the file in your browser to test" -ForegroundColor White
Write-Host "2. Share with developers (no server needed)" -ForegroundColor White

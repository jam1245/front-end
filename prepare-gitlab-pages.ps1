# Prepare app.js for GitLab Pages deployment
Write-Host "Preparing GitLab Pages deployment..." -ForegroundColor Cyan

$sourceFile = "remixed-b3e53bf6.tsx"
$outputFile = "app.js"

# Check if source exists
if (-not (Test-Path $sourceFile)) {
    Write-Host "ERROR: Source file not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Reading source code..." -ForegroundColor Yellow
$tsxContent = Get-Content $sourceFile -Raw
$lines = $tsxContent -split "`n"
$appCode = ($lines | Select-Object -Skip 2) -join "`n"

# Replace export default with regular function
$appCode = $appCode -replace "export default function App\(\)", "function App()"

Write-Host "Generating app.js..." -ForegroundColor Yellow

# Write app.js header
@"
// Program Guardian - Application Code
// Auto-generated from remixed-b3e53bf6.tsx

const { useState, useMemo, useRef, useEffect } = React;
const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell } = Recharts;

"@ | Out-File -FilePath $outputFile -Encoding UTF8

# Append the app code
$appCode | Out-File -FilePath $outputFile -Encoding UTF8 -Append

# Append render code with proper loading screen handling
@"

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
"@ | Out-File -FilePath $outputFile -Encoding UTF8 -Append

Write-Host "Successfully created $outputFile" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. git add ." -ForegroundColor White
Write-Host "2. git commit -m 'Deploy Program Guardian to GitLab Pages'" -ForegroundColor White
Write-Host "3. git push origin main" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be available at:" -ForegroundColor Yellow
Write-Host "https://rms-ept.gitlab.io/front-end" -ForegroundColor Green

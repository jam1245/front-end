# Simple HTTP Server for Program Guardian
# Serves the standalone HTML file on localhost:8000

$port = 8000
$url = "http://localhost:$port/program-guardian-standalone.html"

Write-Host "Starting web server on port $port..." -ForegroundColor Cyan
Write-Host "Opening browser to: $url" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start Python HTTP server if available
if (Get-Command python -ErrorAction SilentlyContinue) {
    Start-Process $url
    python -m http.server $port
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    Start-Process $url
    python3 -m http.server $port
} else {
    Write-Host "Python not found. Please install Python or use Node.js:" -ForegroundColor Red
    Write-Host "  npm install -g http-server" -ForegroundColor White
    Write-Host "  http-server -p $port" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use VS Code Live Server extension" -ForegroundColor White
}

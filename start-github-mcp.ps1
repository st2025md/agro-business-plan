# Скрипт для запуска GitHub MCP сервера
param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken
)

Write-Host "🚀 Запуск GitHub MCP сервера..." -ForegroundColor Green

# Проверяем, что Docker запущен
try {
    docker ps | Out-Null
    Write-Host "✅ Docker запущен и работает" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker не запущен. Запустите Docker Desktop и попробуйте снова." -ForegroundColor Red
    exit 1
}

# Запускаем GitHub MCP сервер
Write-Host "🔧 Запуск GitHub MCP сервера с токеном..." -ForegroundColor Yellow

$env:GITHUB_PERSONAL_ACCESS_TOKEN = $GitHubToken

docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN=$GitHubToken ghcr.io/github/github-mcp-server

Write-Host "✅ GitHub MCP сервер запущен!" -ForegroundColor Green
Write-Host "Теперь вы можете использовать команды для работы с GitHub" -ForegroundColor Cyan

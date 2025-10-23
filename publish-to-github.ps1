# Скрипт для публикации проекта на GitHub
param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken,
    [string]$RepoName = "agro-business-plan",
    [string]$Description = "Бизнес-план агрокомплекса в Старой Руссе - ROI 457%"
)

Write-Host "🚀 Публикация проекта на GitHub..." -ForegroundColor Green

# Устанавливаем переменную окружения
$env:GITHUB_PERSONAL_ACCESS_TOKEN = $GitHubToken

# Проверяем, что мы в правильной директории
if (-not (Test-Path "index.html")) {
    Write-Host "❌ Файл index.html не найден. Убедитесь, что вы находитесь в корне проекта." -ForegroundColor Red
    exit 1
}

Write-Host "📁 Создание репозитория: $RepoName" -ForegroundColor Yellow

# Создаем .gitignore если его нет
if (-not (Test-Path ".gitignore")) {
    Write-Host "📝 Создание .gitignore..." -ForegroundColor Yellow
    @"
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# Temporary files
*.tmp
*.temp

# Backup files
*.bak
*.backup

# Archive files
*.zip
*.tar.gz
*.rar

# Local development files
local/
dev/
test/
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
}

# Инициализируем git репозиторий
Write-Host "🔧 Инициализация Git репозитория..." -ForegroundColor Yellow
git init
git add .
git commit -m "Initial commit: Business plan website"

# Создаем репозиторий на GitHub через API
Write-Host "🌐 Создание репозитория на GitHub..." -ForegroundColor Yellow

$headers = @{
    "Authorization" = "token $GitHubToken"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = $RepoName
    description = $Description
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method POST -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "✅ Репозиторий создан: $($response.html_url)" -ForegroundColor Green
} catch {
    Write-Host "❌ Ошибка при создании репозитория: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Добавляем remote origin
Write-Host "🔗 Настройка remote origin..." -ForegroundColor Yellow
git remote add origin "https://github.com/st2025md/$RepoName.git"
git branch -M main

# Отправляем код на GitHub
Write-Host "📤 Отправка кода на GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "🎉 Проект успешно опубликован!" -ForegroundColor Green
Write-Host "🌐 URL: https://st2025md.github.io/$RepoName/" -ForegroundColor Cyan
Write-Host "📝 Не забудьте активировать GitHub Pages в настройках репозитория!" -ForegroundColor Yellow

# Script for publishing project to GitHub
param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken,
    [string]$RepoName = "agro-business-plan",
    [string]$Description = "Business plan for agro complex in Staraya Russa - ROI 457%"
)

Write-Host "Starting project publication to GitHub..." -ForegroundColor Green

# Set environment variable
$env:GITHUB_PERSONAL_ACCESS_TOKEN = $GitHubToken

# Check if we are in the right directory
if (-not (Test-Path "index.html")) {
    Write-Host "ERROR: index.html not found. Make sure you are in the project root." -ForegroundColor Red
    exit 1
}

Write-Host "Creating repository: $RepoName" -ForegroundColor Yellow

# Create .gitignore if it doesn't exist
if (-not (Test-Path ".gitignore")) {
    Write-Host "Creating .gitignore..." -ForegroundColor Yellow
    $gitignoreContent = @"
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
"@
    $gitignoreContent | Out-File -FilePath ".gitignore" -Encoding UTF8
}

# Initialize git repository
Write-Host "Initializing Git repository..." -ForegroundColor Yellow
git init
git add .
git commit -m "Initial commit: Business plan website"

# Create repository on GitHub via API
Write-Host "Creating repository on GitHub..." -ForegroundColor Yellow

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
    Write-Host "Repository created: $($response.html_url)" -ForegroundColor Green
} catch {
    Write-Host "Error creating repository: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Add remote origin
Write-Host "Setting up remote origin..." -ForegroundColor Yellow
git remote add origin "https://github.com/st2025md/$RepoName.git"
git branch -M main

# Push code to GitHub
Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Project successfully published!" -ForegroundColor Green
Write-Host "URL: https://st2025md.github.io/$RepoName/" -ForegroundColor Cyan
Write-Host "Don't forget to activate GitHub Pages in repository settings!" -ForegroundColor Yellow

# 🚀 Инструкция по публикации проекта на GitHub

## Что у нас есть:

✅ **Docker запущен и работает**  
✅ **Node.js и npm установлены**  
✅ **Все файлы проекта готовы**  

## 📋 Что нужно сделать:

### 1. Создать GitHub Personal Access Token

1. Перейдите в https://github.com/settings/tokens
2. Нажмите "Generate new token (classic)"
3. Заполните форму:
   - **Note**: "MCP Server Access"
   - **Expiration**: 90 days
   - **Scopes**: выберите:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)
     - ✅ `write:packages` (Upload packages)
     - ✅ `delete:packages` (Delete packages)
4. Нажмите "Generate token"
5. **Скопируйте токен** и сохраните его

### 2. Запустить публикацию проекта

Выполните в PowerShell:

```powershell
# Замените YOUR_GITHUB_TOKEN на ваш реальный токен
.\publish-to-github.ps1 -GitHubToken "YOUR_GITHUB_TOKEN"
```

### 3. Активировать GitHub Pages

После успешной публикации:

1. Перейдите в https://github.com/st2025md/agro-business-plan
2. Нажмите "Settings" (настройки)
3. В левом меню найдите "Pages"
4. В разделе "Source" выберите "Deploy from a branch"
5. Выберите ветку "main"
6. Выберите папку "/ (root)"
7. Нажмите "Save"

### 4. Получить ссылку на сайт

Через 1-2 минуты ваш сайт будет доступен по адресу:
**https://st2025md.github.io/agro-business-plan/**

## 🎯 Результат:

- ✅ Профессиональный веб-сайт на GitHub Pages
- ✅ Автоматическое обновление при изменениях
- ✅ HTTPS сертификат автоматически
- ✅ Глобальная доступность через CDN

## 🆘 Если что-то не работает:

1. **Проверьте, что Docker запущен**
2. **Убедитесь, что GitHub токен действителен**
3. **Проверьте, что все файлы проекта в текущей папке**
4. **Перезапустите PowerShell от имени администратора**

## 📞 Нужна помощь?

Если возникнут проблемы, просто скажите мне, и я помогу решить их!

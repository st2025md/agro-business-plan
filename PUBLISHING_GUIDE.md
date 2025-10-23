# Руководство по публикации бизнес-плана на GitHub Pages

## Обзор

Это руководство поможет вам опубликовать бизнес-план агрокомплекса на GitHub Pages - бесплатной платформе для хостинга статических сайтов.

## Преимущества GitHub Pages

- ✅ **Бесплатно** - нет затрат на хостинг
- ✅ **Простота** - автоматическое развертывание из Git
- ✅ **Надежность** - инфраструктура GitHub
- ✅ **SSL** - автоматические HTTPS сертификаты
- ✅ **CDN** - быстрая загрузка по всему миру
- ✅ **Версионность** - отслеживание изменений

## Пошаговая инструкция

### Шаг 1: Создание GitHub аккаунта

1. Перейдите на [github.com](https://github.com)
2. Нажмите "Sign up" (Зарегистрироваться)
3. Заполните форму регистрации
4. Подтвердите email адрес

### Шаг 2: Создание репозитория

1. Войдите в свой GitHub аккаунт
2. Нажмите зеленую кнопку "New" или "+" в правом верхнем углу
3. Выберите "New repository"
4. Заполните форму:
   - **Repository name**: `agro-business-plan` (или любое другое имя)
   - **Description**: "Бизнес-план агрокомплекса в Старой Руссе"
   - **Visibility**: Public (обязательно для GitHub Pages)
   - **Initialize**: НЕ ставьте галочки (файлы уже готовы)
5. Нажмите "Create repository"

### Шаг 3: Загрузка файлов

#### Вариант A: Через веб-интерфейс GitHub

1. В созданном репозитории нажмите "uploading an existing file"
2. Перетащите все файлы проекта в окно загрузки:
   - `index.html`
   - `presentation.html`
   - `financial-details.html`
   - `social-impact.html`
   - `risk-analysis.html`
   - `implementation-plan.html`
   - `government.html`
   - `investors.html`
   - Папку `css/` со всеми файлами
   - Папку `js/` со всеми файлами
   - Папку `docs/` (если есть PDF файлы)
3. Внизу страницы введите commit message: "Initial commit: Business plan website"
4. Нажмите "Commit changes"

#### Вариант B: Через Git (для продвинутых пользователей)

```bash
# Клонирование репозитория
git clone https://github.com/ваш-username/agro-business-plan.git
cd agro-business-plan

# Копирование файлов в папку репозитория
# (скопируйте все файлы проекта в эту папку)

# Добавление файлов в Git
git add .

# Коммит
git commit -m "Initial commit: Business plan website"

# Отправка на GitHub
git push origin main
```

### Шаг 4: Настройка GitHub Pages

1. В репозитории перейдите в "Settings" (настройки)
2. В левом меню найдите "Pages"
3. В разделе "Source" выберите "Deploy from a branch"
4. Выберите ветку "main" (или "master")
5. Выберите папку "/ (root)"
6. Нажмите "Save"

### Шаг 5: Активация сайта

1. GitHub автоматически начнет процесс развертывания
2. Через 1-2 минуты ваш сайт будет доступен по адресу:
   `https://ваш-username.github.io/agro-business-plan/`
3. Ссылка появится в разделе "Pages" в настройках репозитория

## Структура файлов

```
agro-business-plan/
├── index.html                 # Главная страница
├── presentation.html          # PDF презентация
├── financial-details.html     # Детальные финансы
├── social-impact.html         # Социальный эффект
├── risk-analysis.html         # Анализ рисков
├── implementation-plan.html    # План реализации
├── government.html            # Для госструктур
├── investors.html             # Для инвесторов
├── css/
│   ├── style.css              # Основные стили
│   └── print.css              # Стили для печати
├── js/
│   ├── main.js                # Основная логика
│   └── charts.js              # Графики
├── docs/                      # PDF документы
│   └── business-plan.pdf
└── README.md                  # Описание проекта
```

## Обновление контента

### Через веб-интерфейс GitHub

1. Откройте файл, который хотите изменить
2. Нажмите иконку карандаша (Edit)
3. Внесите изменения
4. Внизу страницы введите описание изменений
5. Нажмите "Commit changes"
6. Сайт автоматически обновится через 1-2 минуты

### Через Git

```bash
# Внесение изменений в файлы
# ...

# Добавление изменений
git add .

# Коммит
git commit -m "Update business plan content"

# Отправка на GitHub
git push origin main
```

## Настройка домена (опционально)

Если у вас есть собственный домен:

1. Создайте файл `CNAME` в корне репозитория
2. Добавьте в него ваш домен (например: `agro-business.ru`)
3. Настройте DNS записи у вашего регистратора:
   - Тип: CNAME
   - Имя: www
   - Значение: ваш-username.github.io
4. В настройках GitHub Pages укажите ваш домен

## SEO оптимизация

### Meta теги

Убедитесь, что на каждой странице есть:

```html
<meta name="description" content="Описание страницы">
<meta name="keywords" content="ключевые, слова">
<meta name="author" content="Ваше имя">
```

### Sitemap

Создайте файл `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ваш-username.github.io/agro-business-plan/</loc>
    <lastmod>2024-12-19</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ваш-username.github.io/agro-business-plan/financial-details.html</loc>
    <lastmod>2024-12-19</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Добавьте остальные страницы -->
</urlset>
```

## Аналитика (опционально)

### Google Analytics

1. Зарегистрируйтесь на [analytics.google.com](https://analytics.google.com)
2. Создайте новое свойство для вашего сайта
3. Получите код отслеживания
4. Добавьте его в `<head>` каждой страницы:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Безопасность

### Защита от спама

1. В настройках репозитория включите "Issues" для обратной связи
2. Отключите "Wiki" если не нужен
3. Настройте "Branch protection rules" для основной ветки

### Резервное копирование

1. Регулярно делайте локальные копии файлов
2. Используйте функцию "Download ZIP" в GitHub
3. Рассмотрите возможность клонирования на другие платформы

## Устранение проблем

### Сайт не обновляется

1. Проверьте, что изменения сохранены в репозитории
2. Подождите 5-10 минут (GitHub Pages обновляется не мгновенно)
3. Очистите кэш браузера (Ctrl+F5)

### Ошибки в коде

1. Проверьте консоль браузера (F12 → Console)
2. Убедитесь, что все файлы загружены
3. Проверьте правильность путей к файлам

### Медленная загрузка

1. Оптимизируйте изображения
2. Минимизируйте CSS и JavaScript
3. Используйте CDN для внешних библиотек

## Дополнительные возможности

### Автоматическое развертывание

Настройте GitHub Actions для автоматического развертывания:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Интеграция с формами

Используйте сервисы для обработки форм:

- [Formspree](https://formspree.io) - бесплатно до 50 отправок/месяц
- [Netlify Forms](https://www.netlify.com/products/forms/) - бесплатно до 100 отправок/месяц
- [EmailJS](https://www.emailjs.com) - бесплатно до 200 отправок/месяц

## Заключение

После выполнения всех шагов у вас будет:

✅ Профессиональный веб-сайт бизнес-плана  
✅ Автоматическое обновление при изменениях  
✅ Бесплатный хостинг на GitHub Pages  
✅ HTTPS сертификат  
✅ Глобальная доступность  

**URL вашего сайта:** `https://ваш-username.github.io/agro-business-plan/`

## Поддержка

Если у вас возникли вопросы:

1. Проверьте [документацию GitHub Pages](https://docs.github.com/en/pages)
2. Обратитесь к [сообществу GitHub](https://github.community/)
3. Изучите [примеры других проектов](https://github.com/topics/github-pages)

---

**Удачи с публикацией вашего бизнес-плана! 🚀**

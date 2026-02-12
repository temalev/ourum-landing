# Деплой на GitHub Pages

## Автоматический деплой через GitHub Actions

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # или master

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Generate static site
        run: npm run generate

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .output/public
```

## Ручной деплой

1. Собрать проект:
```bash
npm run generate
```

2. Деплой содержимого `.output/public` на GitHub Pages:
```bash
# Опция 1: Через gh-pages пакет
npx gh-pages -d .output/public

# Опция 2: Вручную
cd .output/public
git init
git add .
git commit -m "Deploy"
git push -f git@github.com:ВАШ_USERNAME/ВАШ_РЕПО.git master:gh-pages
```

## Настройка репозитория

1. В настройках репозитория (Settings → Pages)
2. Source: Deploy from a branch
3. Branch: gh-pages / (root)
4. Сохранить

## Важные моменты

- ✅ Файл `.nojekyll` автоматически копируется (в `public/.nojekyll`)
- ✅ `baseURL: '/'` настроен правильно для основного домена или кастомного домена
- ⚠️ Если репозиторий НЕ `username.github.io`, а `username.github.io/repo-name`:
  - Измените в `nuxt.config.ts`: `baseURL: '/repo-name/'`

## Проверка после деплоя

1. Откройте ваш сайт на GitHub Pages
2. Откройте консоль браузера (F12)
3. Проверьте что нет ошибок загрузки JS/CSS файлов
4. Карусель должна работать (стрелки и индикаторы кликабельны)

## Очистка кэша GitHub Pages

Если изменения не применяются:
1. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) или `Cmd+Shift+R` (Mac)
2. Очистите кэш браузера
3. Подождите 1-2 минуты для обновления CDN GitHub Pages

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // SSG конфигурация для GitHub Pages
  ssr: false, // Отключаем SSR для статической генерации
  
  // Настройка для GitHub Pages
  // Для репозитория в корне GitHub Pages (username.github.io) установите GITHUB_PAGES_BASE_URL=/
  // Для репозитория в подпапке будет автоматически использоваться /имя-репозитория/
  app: {
    baseURL: process.env.GITHUB_PAGES_BASE_URL 
      || (process.env.GITHUB_REPOSITORY_NAME ? `/${process.env.GITHUB_REPOSITORY_NAME}/` : '/'),
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  
  // Глобальные SCSS файлы
  css: ['../assets/css/main.scss'],

  
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})

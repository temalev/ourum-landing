// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Указываем, что исходные файлы находятся в папке app/
  srcDir: 'app/',
  
  // SSG конфигурация для GitHub Pages
  ssr: true, // Отключаем SSR для статической генерации
  
  // Настройка для GitHub Pages
  // Для репозитория в корне GitHub Pages (username.github.io) установите GITHUB_PAGES_BASE_URL=/
  // Для репозитория в подпапке будет автоматически использоваться /имя-репозитория/
  app: {
    baseURL: '/',
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
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/style.css'
  ],
  
  // Настройка для Element Plus
  vite: {
    optimizeDeps: {
      include: ['element-plus']
    }
  },

  
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/']
    }
  }
})

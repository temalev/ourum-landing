// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // SSG (Static Site Generation) конфигурация
  // SSR должен быть true для SSG (SSG = предрендеренный SSR)
  ssr: true,

  modules: ['@element-plus/nuxt'],

  elementPlus: {
    importStyle: 'css',
  },

  css: [
    'element-plus/dist/index.css',
    '~/assets/styles/main.css',
  ],
  
  // Настройка для статической генерации (SSG)
  nitro: {
    prerender: {
      // Автоматически находить все ссылки на страницах и пререндерить их
      crawlLinks: true,
      // Явно указать маршруты для пререндеринга (опционально)
      routes: ['/']
    },
    minify: false // Отключаем из-за проблем с terser
  },
  
  // Настройка роутинга
  app: {
    baseURL: '/ourum-landing/', // Важно для GitHub Pages проектного репозитория
    head: {

    }
  },

  // Настройки для GitHub Pages
  experimental: {
    payloadExtraction: false, // Отключаем payload extraction для лучшей работы на статических хостингах
  },
  // vite: {
  //   optimizeDeps: {
  //     include: ['element-plus'],
  //   },
  // },
})

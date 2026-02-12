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
    // Отключаем минификацию для предотвращения проблем
    minify: false
  },
  
  // Настройка роутинга
  app: {
    baseURL: '/',
    head: {

    }
  },
  // vite: {
  //   optimizeDeps: {
  //     include: ['element-plus'],
  //   },
  // },
})

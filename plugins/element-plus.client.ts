import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  // use(ElementPlus) регистрирует ВСЕ компоненты библиотеки
  nuxtApp.vueApp.use(ElementPlus)

  // Регистрируем все иконки
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
  }
})

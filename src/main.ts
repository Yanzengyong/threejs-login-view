import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/styles/base.scss'
import '@/assets/styles/overall.scss'
import '@/assets/styles/resetElement.scss'
import '@/utils/rem'

const app = createApp(App)

app.config.warnHandler = function() {
  // `trace` 是组件的继承关系追踪
}

app.use(ElementPlus, { locale }).mount('#app')

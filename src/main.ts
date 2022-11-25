import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

// 启用路由
app.use(router)

// 启用pinia
app.use(pinia)

app.mount('#app')

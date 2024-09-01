import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './app/router/index.ts'
import './app/assets/main.css'
import App from './app/App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')

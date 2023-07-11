import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import './index.css'
import './axios.js'



createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import './index.css'
import './axios.js'
import store from './vuex.js'


createApp(App)
 .use(router)
 .use(store)
 .mount('#app')

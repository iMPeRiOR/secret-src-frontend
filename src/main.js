import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import Loading from 'vue3-loading-screen'

const app = createApp(App)

app.use(router)
app.use(Loading, /*{...}*/)
app.mount('#app')


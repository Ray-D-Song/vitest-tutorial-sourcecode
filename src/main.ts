import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vDebounce } from './utils/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('debounce', vDebounce)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'; // Importa el router configurado
import App from './App.vue'

const app = createApp(App)

//app.use(createPinia())
app.use(router);
app.mount('#app')

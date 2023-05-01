import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'

import router from './router'

const app = createApp(App);

app.use(bootstrap)
app.use(router)

app.mount('#app')
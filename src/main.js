import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'sweetalert2/dist/sweetalert2.css'
import 'sweetalert2/dist/sweetalert2.js'




createApp(App)
.use(store)
.use(router)
.mount('#app')

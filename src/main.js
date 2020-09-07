import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import Toasted from 'vue-toasted'
Vue.use(Toasted)

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

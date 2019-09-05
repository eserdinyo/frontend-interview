import Vue from 'vue'

import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css';
import './assets/vendor/linearicons/style.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

export const Bus = new Vue();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





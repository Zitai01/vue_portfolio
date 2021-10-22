import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import './styles/index.css'
import './styles/App.css'
var VueScrollTo = require('vue-scrollto')

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

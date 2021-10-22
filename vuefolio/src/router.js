import VueRouter from 'vue-router'
import Home from './pages/Home'
import Hobby from './pages/Hobby'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/hobby', component: Hobby, name: 'Hobby' }
]

export default new VueRouter({
  routes,
  mode: 'history'
})

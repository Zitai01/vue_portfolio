import VueRouter from 'vue-router'
import Home from './pages/Home'
import Resume from './pages/Resume'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/resume', component: Resume, name: 'Resume' }
]

export default new VueRouter({
  routes,
  mode: 'history'
})

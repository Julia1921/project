import VueRouter from 'vue-router'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Check from './components/Check'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/LogIn',
      component: LogIn
    },
    {
      path: '/Check',
      component: Check
    }
  ],
  mode: 'history'
})
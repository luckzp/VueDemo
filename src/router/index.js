import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import User from '@/views/User'
import Main from '@/views/Main'


let routes = [
 {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/user',
        component: User,
        name: 'User'
      }
    ]
  }

]

const router = new Router({
  routes: routes,
  mode: 'history'
})

export default router

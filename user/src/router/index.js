import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Main from '@/views/Main'
import Dashboard from '@/views/Dashboard'
import User from '@/views/User'
import Home from '@/views/home'

let routes = [
//   {
//   path: '/',
//   name: 'Main',
//   component: Main,
//   hidden: true,
//   children: [{
//     path: '/',
//     component: Dashboard,
//     name: '系统首页'
//   },
//   {
//     path: 'user',
//     component: User,
//     name: '用户管理'
//   }
// ]
// },
{
  path: '/',
  name: 'Home',
  component: Home,
  }
]

const router = new Router({
  routes: routes
})

export default router

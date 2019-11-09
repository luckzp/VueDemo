import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Main from '@/pages/Main'
import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'

let routes = [{
  path: '/',
  name: 'Main',
  component: Main,
  hidden: true,
  children: [{
    path: '/',
    component: Dashboard,
    name: '系统首页'
  },
  {
    path: 'user',
    component: User,
    name: '用户管理'
  }]
}]

const router = new Router({
  routes: routes
})

export default router

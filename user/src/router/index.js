import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Main from '@/views/Main'
import Login from '@/views/login'
import Result from '@/views/result'
import Home from '@/views/home'
import UserCenter from '@/views/UserCenter'
import User from '@/views/User'
import Order from '@/views/Order'
import About from '@/views/About'
import Test from '@/views/test'
import Banner from '@/components/banner'

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
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  },{
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/banner',
    name: 'Banner',
    component: Banner,
  },
   {
    path: '/user-center',
    name: 'UserCenter',
    component: UserCenter,
    children: [
      {
        path: '/order',
        component: Order,
        name: 'Order'
      },
      {
        path: '/about',
        component: About,
        name: 'About'
      }]
  }, {
    path: '/main',
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
  routes: routes
})

export default router

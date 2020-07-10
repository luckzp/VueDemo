import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Main from '@/views/Main'
import Login from '@/views/login'
import ToDoList from '@/views/ToDoList'
import Home from '@/views/home'
import GAME2048 from '@/views/2048'
import UserCenter from '@/views/UserCenter'
import User from '@/views/User'
import Order from '@/views/Order'
import About from '@/views/About'
import Banner from '@/components/banner'


let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  },{
    path: '/banner',
    name: 'Banner',
    component: Banner,
  },
  {
    path: '/2048',
    name: 'GAME2048',
    component: GAME2048,
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: ToDoList,
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
  routes: routes,
  mode: 'history'
})

export default router

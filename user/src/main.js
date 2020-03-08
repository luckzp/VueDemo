// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
//引入ElementUI
import ElementUI from 'element-ui'
import 'element-theme-chalk';
//引入自定义主题
import './assets/theme/element-#E3BA63/index.css'
Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$axios = axios

import Api from './axios/axios.js';
Vue.prototype.$api = Api;

import '../src/common/layout.css'  
import 'font-awesome/scss/font-awesome.scss'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//引入axios 
import axios from 'axios'
//引入element-ui
import {
  Message
} from 'element-ui';

//引入router
import router from '../router'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8090/development';
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'http://127.0.0.1:8090/debug';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://127.0.0.1:8090/production';
}

//创建http请求，包括url，消息头，参数
let http = axios.create({
  baseURL: axios.defaults.baseURL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function(data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});


// http request 拦截器，这里可以加一些token的拦截，具体逻辑可以根据业务需求来定
http.interceptors.request.use(
  config => {
    console.log(config.url);
    if(config.url.indexOf('login') >= 0){
      return config;
    }else{
      let token = sessionStorage.getItem("token");
      if (token) {
        config.headers.token = token;
      }
      return config;
    }
  },
  err => {
    return Promise.reject(err);
  });
//http response 拦截器，根据响应内容作出拦截，例如错误返回登录，token过期等等
http.interceptors.response.use(
  res  => {
    if(res.data.code == 2 || res.data.code == 3){

      Message({
        showClose: true,
        message: '登录信息失效，请重新登录!',
        type: 'error',
        duration: 2000
      })

      //携带当前页面路由，以在登录页面完成登录后返回当前页面
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    }

    if (res.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  err => {
    return Promise.reject(err);
  });

//封装http请求方法，包括get/post，url，参数，响应
function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function(res) {
    response(res);
  }).catch(function(err) {
    response(err);
  })
}

//调用方法
export default {
  get: function(url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function(url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function(url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function(url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}

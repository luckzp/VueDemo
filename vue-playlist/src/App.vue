<template>
  <div id="app">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import User from './components/User'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data (){
    return{
      users:[
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false},
          {name:"Henry",position:"web开发", show:false}
      ]
    }
  },
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "users" : User
  }

}
</script>

<style>
</style>

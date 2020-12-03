<template>
  <section>
    <el-container class="container">
      <!--左边-->
      <el-aside :width="'200px'">
        <el-container>
          <el-header>
            <img src="../assets/logo.png" class="logoImg">
          </el-header>
          <el-main>
            <el-menu :collapse="collapsed">
              <el-submenu index="1">
                <template slot="title">
                  <i class="fa fa-coffee"></i>
                  <span>系统管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="goUser"><i class="fa fa-user-circle-o"></i>用户管理</el-menu-item>
                  <el-menu-item index="1-2"><i class="fa fa-file-text-o"></i>系统日志</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>
      <!--内容-->
      <el-container>
        <!--页眉-->
        <el-header class="header">
          <el-row>
            <el-col :span="20" class="header-title">
              <span class="system-name">{{systemName}}</span>

            </el-col>
            <el-col :span="2"><span class="el-dropdown-link userinfo-inner">你好：{{userName}}</span></el-col>
            <el-col :span="1"><span class="el-dropdown-link userinfo-inner">|</span></el-col>
            <el-col :span="1"><span class="el-dropdown-link userinfo-inner">退出</span></el-col>
          </el-row>
        </el-header>
        <!--中间-->
        <el-main class="main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  let data = () => {
    return {
      collapsed: false,
      systemName: '用户管理系统',
      userName: 'admin'
    }
  }

  export default {
    data: data,
    methods: {
      goUser:function(){
        this.$router.push({path: '/user'})
      }
    },
    mounted: function() {
    }
  }
</script>

<style scoped="scoped" lang="scss">
  $width: 100%;
  $height: 100%;
  $background-color: #E3BA63;
  $header-color: #fff;
  $header-height: 60px;

  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  .el-aside {
  .el-header {
    line-height: $header-height;
    background-color: $background-color;
    color: $header-color;
    text-align: center;
  }
  .el-container {
    height: $height;
  .el-main {
    padding: 0;
  }
  }
  }

  .main {
    width: $width;
    height: $height;
  }

  .menu-button {
    width: 14px;
    cursor: pointer;
  }

  .userinfo-inner {
    cursor: pointer;
  }

  .el-menu {
    height: $height;
  }

  .header {
    background-color: $background-color;
    color: $header-color;
    text-align: center;
    line-height: $header-height;
    padding: 0;

  .header-title {
    text-align: left;
  span {
    padding: 0 20px;
  }
  }
  }

  .system-name {
    font-size: large;
    font-weight: bold;
  }
  }
  .logoImg{
    width: 100px;
    height: 100px;

    margin-top: 0 auto;
  }
</style>

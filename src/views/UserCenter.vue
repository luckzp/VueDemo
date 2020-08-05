<template>
  <div>
    <navTop></navTop>
    <header1></header1>

    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/user-center' }">MMall</el-breadcrumb-item>
        <el-breadcrumb-item>{{msg}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="side">
      <el-col :span="2">
        <ul class="nav-list">
          <li class="nav-item">
            <a class="link" @click="goUser('个人中心')">个人中心</a>
          </li>

          <li class="nav-item">
            <a class="link" @click="goOrder('我的订单')">我的订单</a>
          </li>
          <li class="nav-item">
            <a class="link" @click="goUser('修改密码')">修改密码</a>
          </li>
          <li class="nav-item">
            <a class="link" @click="goAbout('关于MMall')">关于MMall</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </div>
    <footer1></footer1>
  </div>
</template>  

<script>
import footer1 from "../components/footer";
import header1 from "../components/header";
import navTop from "../components/nav-top";
import UserCenter from "../views/UserCenter";
export default {
  components: {
    footer1,
    header1,
    navTop,
    UserCenter
  },
  data() {
    return {
      msg: "hello vue!"
    };
  },
  methods: {
    goUser: function(message) {
      this.msg = message;
      this.$router.push({ path: "/order" });
    },
    goOrder: function(message){
      this.msg = message;
      this.$router.push({ path: "/order" });
    },
    goAbout: function(message){
      this.msg = message;
      this.$router.push({ path: "/about" });
    }
  }
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.side {
  margin-left: 150px;
  margin-top: 20px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.breadcrumb .el-breadcrumb{
  padding-left: 150px;
  height: 50px;
  line-height: 50px;
  background: #eee;
  font-size: 16px;
  border-top: 2px solid #409EFF;
}
.nav-list .nav-item {
  margin-bottom: 10px;
}
</style>
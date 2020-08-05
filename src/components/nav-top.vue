<template>
  <div class="nav">
    <el-row>
      <el-col :span="2" :offset="1">
        <div class="user">
          <i class="fa fa-home"></i>
          <span class="not-login">
            <span class="link js-login">登录</span>
            <span class="link js-register">注册</span>
          </span>
          <span class="login">
            <span class="link-text">
              欢迎,
              <span>{{msg}}</span>
            </span>
            <span class="link js-register">退出</span>
          </span>
        </div>
      </el-col>
      <el-col :span="6" :offset="14">
        <ul class="nav-list">
          <li class="nav-item">
            <a class="link" href="./cart.vue">
              <i class="fa fa-shopping-cart"></i>
              购物车(<span class="cart-count">0</span>)
            </a>
          </li>

          <li class="nav-item">
            <a class="link" href="./order-list">我的订单</a>
          </li>
          <li class="nav-item">
            <a class="link" href="./user-center">我的MMall</a>
          </li>
          <li class="nav-item">
            <a class="link" href="./about">关于MMall</a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      msg: "hello vue!"
    };
  },
  methods: {}
};
</script>  

<style>
.nav {
  background: #eee;
  height: 30px;
  line-height: 30px;
}
.nav .grid {
  height: 30px;
}
.nav i {
  color: #409eff;
  margin-left: 5px;
  margin-right: 5px;
}
.nav .user {
  float: left;
}
.nav .user .login {
  display: none;
}
.nav .user .link {
  margin-right: 5px;
}
.nav .nav-list {
  float: right;
}
.nav .nav-list .nav-item {
  display: inline-block;
  margin-left: 5px;
}
</style>
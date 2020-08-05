<template>
  <div class="footer">
    <!--  w 用来定宽  -->
    <div class="w">
      <div class="links">
        <a class="link" href="https://www.bilibili.com" target="blank">B站</a>|
        <a class="link" href="https://www.baidu.com" target="blank">百度</a>|
        <a class="link" href="https://www.taobao.com" target="blank">淘宝</a>
      </div>
      <p class="copyright">© 2015-2020 mmall.cn — All Rights Reserved.</p>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.footer {
  padding-bottom: 10px;
}
.footer .links {
  text-align: center;
  line-height: 30px;
  color: #666;
}

.footer .links .link {
  padding: 0 10px;
}

.footer .copyright {
  text-align: center;
  line-height: 30px;
  color: #666;
}
</style>
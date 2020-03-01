<template>
  <div class="header">
    <!--  w 用来定宽  -->
    <div class="w">
      <a class="logo">MMALL</a>
      <div class="serach">
        <input class="serach-input" placeholder="请输入商品名称" @keyup.enter="counter += 1"/>
        <button class="btn" @click="counter += 2">搜索</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </div>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    counter: 0
    return {counter: 0};
  },
  methods: {}
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.header {
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.header .logo {
  position: absolute;
font-size: 50px;
    top: 25px;
  font-weight: bold;
  color: #c60023;
}

.header .serach {
  padding: 40px 0 30px 250px;
}
.header .serach-input {
    width: 550px;
  height: 40px;
  line-height: 40px;
  border: 2px solid #c60023;
  padding-left: 10px;
  font-size: 15px;
  outline:none;
}


.header .btn {
  position: absolute;
    height: 44px;
  line-height: 44px;
}
</style>
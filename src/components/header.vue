<template>
  <div class="header">
    <div class="w">
      <a class="logo">MMALL</a>

      <div class="serach">
        <input
          class="serach-input"
          placeholder="请输入商品名称"
          @keyup.enter="counter += 1"
        />
        <button class="btn" @click="counter += 2">搜索</button>
      </div>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    counter: 0;
    return { counter: 0 };
  },
  methods: {},
};
</script>  

<style>
.header {
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.header .logo {
  height: 88px;
  line-height: 88px;
  font-size: 50px;
  font-weight: bold;
  color: #409eff;
  float: left;
  margin-left: 15px;
}
.header .serach {
  margin-left: 225px;
  height: 88px;
  line-height: 88px;
}
.header .serach-input {
  width: 650px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border: 2px solid #409eff;
  font-size: 15px;
  outline: none;
}

.header .btn {
  height: 45px;
  line-height: 45px;
  margin-bottom: 3px;
  margin-left: -4px;
}
</style>
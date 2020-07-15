<template>
  <div class="header">
    <el-row>
      <el-col :span="3" :offset="3">
        <div class="logo-wrap">
          <a class="logo">MMALL</a>
        </div>
      </el-col>

      <el-col :span="15" :offset="1">
        <div class="serach">
          <input class="serach-input" placeholder="请输入商品名称" @keyup.enter="counter += 1" />
          <button class="btn" @click="counter += 2">搜索</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>  

<script>
export default {
  data() {
    counter: 0;
    return { counter: 0 };
  },
  methods: {}
};
</script>  

<style>
.header {
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.logo-wrap {
  height: 88px;
  line-height: 88px;
}
.header .logo {
  font-size: 50px;
  font-weight: bold;
  color: #409eff;
}
.header .serach {
  height: 88px;
  line-height: 88px;
}
.header .serach-input {
  width: 600px;
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
<template>
    <el-row  class="header">
      <el-col :span="3">
        <div class="grid"></div>
      </el-col>
      <el-col :span="3" class="logo-wrap">
        <a class="logo">MMALL</a>
      </el-col>
      <el-col :span="1">
        <div class="grid"></div>
      </el-col>
      <el-col :span="12">
        <div class="serach">
          <input class="serach-input" placeholder="请输入商品名称" @keyup.enter="counter += 1" />
          <button class="btn" @click="counter += 2">搜索</button>
        </div>
      </el-col>
    </el-row>
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
<style scoped>
@import "../common/layout.css";
</style>
<style>
.header {
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.header .grid {
  min-height: 88px;
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
  width: 700px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border: 2px solid #409eff;
  font-size: 15px;
  outline: none;
}

.header .btn {
  position: absolute;
  top: 22px;
  height: 44px;
  line-height: 44px;
}
</style>
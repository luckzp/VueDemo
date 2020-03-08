<template>
  <div>
    <navSimple></navSimple>
    <div class="result">
      <h1>{{msg}}</h1>
      <div class="result-link">
        <a class="link" href="/">返回首页</a>
      </div>
    </div>
    <footer1></footer1>
  </div>
</template>  

<script>
import footer1 from "../components/footer";
import navSimple from "../components/nav-simple";

export default {
  components: {
    footer1,
    navSimple
  },
  data() {
    return {
      msg: "恭喜您，注册成功!"
    };
  },
  methods: {}
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.result {
  padding: 30px 0;
  margin-top: 20px;
  margin-left: 230px;
  margin-right: 230px;
  text-align: center;
  background: #fff;
}

.result .result-link {
  margin-top: 20px;
}
</style>
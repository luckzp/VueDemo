<template>
  <div>
    <navTop></navTop>
        <header1></header1>
    <div>
      <i class="fa fa-user"></i>
    </div>
    <footer1></footer1>
  </div>
</template>  

<script>
import footer1 from "../components/footer";
import header1 from "../components/header";
import navTop from "../common/nav-top";
export default {
  components: {
    footer1,
    header1,
    navTop
  },
  data() {
    return {
      msg: "hello vue!"
    };
  },
  methods: {}
};
</script>  
<style scoped>
    @import '../common/layout.css';
</style>
<style>

</style>
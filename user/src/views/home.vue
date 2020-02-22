<template>
  <div>
        <navSimple></navSimple>
    <div>
      <i class="fa fa-user"></i>
    </div>
  </div>
</template>  

<script>
import top from "../components/top";
import navSimple from "../common/nav-simple";
export default {
  components: {
    top,
    navSimple
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
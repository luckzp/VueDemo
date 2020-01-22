<template>
  <div>
    {{msg}}
    <top></top>
    <search></search>
  </div>
</template>  

<script>
import top from "../components/top";
import search from "../components/search";
export default {
  components: {
    top,
    search
  },
  data() {
    return {
      msg: "hello vue!"
    };
  },
  methods: {}
};
</script>  

<style>
</style>
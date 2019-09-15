<template>
  <footer>
      <p>{{msg}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      msg: 'copyright 2018 vue demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
footer p {
    color: lightgreen;
    text-align: center;
}
</style>

<template>  
<div class="nav-simple">
    /* w 用来定宽 */
    <div class="w">
        <a class="logo">MMALL</a>
    </div>
</div>
</template>  

<script>  
    export default {  
        data() {  
            return {  

            }  
        },  
        methods: {  

        }  
    }  
</script>  
<style scoped>
    @import 'layout.css';
</style>
<style>  
.nav-simple{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    background: #fff;
}

.nav-simple .logo{
    font-size: 26px;
    font-weight: bold;
    color: #c60023;
}
</style>
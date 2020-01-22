<template>  

<div>{{msg}}

            <test1></test1>  
        <test2></test2>  
</div>
</template>  

<script>  
    import test1 from '../pages/test1'  
    import test2 from '../pages/test2' 
    export default {  
        components: {  
                    test1,  
                    test2  
                },  
        data() {  
            return {  
msg: 'hello vue!'
            }  
        },  
        methods: {  

        }  
        
    }  
</script>  

<style>  

</style>
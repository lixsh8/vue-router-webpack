<template>
    <header>
        <a @click="goBack(backUrl)"><i class="iconfont icon-left"></i></a>
        <h1>{{title}}</h1>
        <span @click=""></span>
    </header>
</template>

<style lang="sass">
    header{
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: #f44335;
        color: white;
        text-align: center;
        position: relative;

        a{
            width: 44px;
            height: 44px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
        }

        h1{
            line-height: 44px;
            text-align: center;
        }
    }
</style>

<script>
    export default{
        data(){
            return{
                
            }
        },
        props:['title','backUrl'],
        methods:{
            goBack: function(url){
                this.$route.router.go(url);
            }
        }, 
    }
</script>
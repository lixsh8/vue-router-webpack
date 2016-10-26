<template>
    <div class="back-top" @click="scrollTop(0)" v-show="showBackTop">
        <i class="iconfont icon-fanhuidingbu"></i>
    </div>
</template>

<style lang="sass">
    .back-top{
        width: 44px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background: rgba(1,1,1,0.5);
        border-radius: 5px;
        position: fixed;
        right: 10px;
        bottom: 80px;
        color: white;
        font-size: 24px;
        display: none1;
    }
</style>

<script>
    export default{
        data(){
            return{
                
            }
        },
        props:['showBackTop'],
        methods:{
            scrollTop: function(pos){
                var that = this
                window.scrollTo(0, pos);
                that.showBackTop = false;
            }
        }, 
    }
</script>
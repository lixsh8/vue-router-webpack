<template>
    <!-- 全局footer -->
    <nv-footer :page-type=""
             :fix-footer="true"
             active-tab="serv"
             >
    </nv-footer>

    <div>
        服务页面
    </div>


</template>
<script>
    //require('../assets/scss/iconfont/iconfont.css');
    //require('../assets/scss/index.scss');


    export default {
        ready (){
//            setTimeout(() => {
//                this.$route.router.go({ name: 'list'});
//            },2000);
        },
        components:{
            "nvFooter":require('../components/footer.vue')
        }
    }
</script>



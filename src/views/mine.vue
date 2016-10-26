<template>
    
    <div class="mine">
        <div class="mine-info">
            李晓霞
        </div>
        <ul class="mine-list">
            <li><a v-link="{name:'myinsurance'}">投保书</a><i class="iconfont icon-right"></i></li>
            <li><a href="">我要投保</a><i class="iconfont icon-right"></i></li>
            <li><a href="">我的车库</a><i class="iconfont icon-right"></i></li>
        </ul>
    </div>

<!-- 全局footer -->
    <nv-footer :page-type=""
             :fix-footer="true"
             active-tab="mine"
             >
    </nv-footer>
</template>
<style type="text/css" lang="sass" scoped>
.mine{
    font-size: 15px;

    .mine-info{
        background: white;
        border-bottom: 1px solid #ccc;
        height: 88px;
        line-height: 88px;
        font-size: 18px;
        padding:0 15px;
        text-align: center;
    }
    .mine-list{
        background: white;
        margin-top: 10px;

        li{
            line-height: 44px;
            border-bottom:1px solid #ccc;
            padding: 0 15px;
            position: relative;

            a{
                display: block;
                color: #666;
            }
            i{
                position:absolute;
                top: 0px;
                right: 15px;
                width: 16px;
                height:16px;
                color:#ccc;
            }
        }
    }
}  

</style>

<script>
    //require('../assets/scss/index.scss');


    export default {
        ready (){
           // setTimeout(() => {
           //     this.$route.router.go({ name: 'login'});
           // },2000);
        },
        components:{
            "nvFooter":require('../components/footer.vue')
        }
    }
</script>



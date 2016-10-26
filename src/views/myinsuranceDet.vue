<template>
    <!--返回-->
    <go-back title="我的投保书详情" :back-url="backUrl"></go-back>
    <div class="myinsurance-det">
        <ul>
            <li class="flex-wrap">
                <div class="flex-t">车型</div>
                <div class="flex-item">粤B8888</div>
            </li>
            <li class="flex-wrap">
                <div class="flex-t">车型</div>
                <div class="flex-item">粤B8888</div>
            </li>
            <li class="flex-wrap">
                <div class="flex-t">车型</div>
                <div class="flex-item">粤B8888</div>
            </li>
            <li class="flex-wrap">
                <div class="flex-t">车型</div>
                <div class="flex-item">粤B8888</div>
            </li>
        </ul>

        <div class="btn-wrap">
            <a href="" class="btn btn-disabled">删除</a>
            <a href="" class="btn btn-primary">继续录入</a>
        </div>
    </div>

</template>
<style lang="sass">
    .myinsurance-det{
        margin-top: 15px;

        li{
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            padding:0 15px;
            background: white;
            border-bottom: 1px solid #ccc;

            .flex-t{}
            .flex-item{
                text-align: right;

            }
        }

        .btn-wrap{
            font-size: 0;
            padding: 15px;
            .btn{
                display: inline-block;
                width: 47%;
                vertical-align: middle;
                line-height: 44px;
                text-align: center;

                &:first-child{
                    margin-right: 6%;
                }
            }
        }
    }
</style>

<script>
require('../assets/scss/common/common.scss');
    export default {
        ready (){
           // setTimeout(() => {
           //     this.$route.router.go({ name: 'login'});
           // },2000);
        },
        data(){
            return {
                backUrl:'',
            }
        },
        route: {
            activate(transition) {
                this.backUrl=transition.from.path || "/myinsurance";
                transition.next();
            },
            deactivate(transition) {
                transition.next();
            }
        },
        components:{
            "goBack":require('../components/go-back.vue'),
        },
        methods:{
            
        }
    }
</script>



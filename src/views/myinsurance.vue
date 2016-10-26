<template>
    <!--返回-->
    <go-back title="我的投保书" :back-url="backUrl"></go-back>
    <div class="ui-tab">
        <ul class="ui-tab-content" style="width:100%;margin-top:10px">
            <li class="current" style="width:100%;">
                <div class="o-list">
                    <a class="o-list-item" v-link="{name:'myinsuranceDet'}">
                        <div class="o-list-b flex-wrap">
                            <span class="">苏A99999</span>
                            <i class="flex-item">2016-7-6 12:23:23</i>
                        </div>
                        <div class="o-list-b flex-wrap">
                            <span class="o-list-b-l">被保人：李四</span>
                            <i class="o-list-b-r flex-item">3家报价中</i>
                        </div>
                        <div class="o-list-b flex-wrap">
                            <span class="o-list-b-l">平安银行</span>
                            <i class="o-list-b-r flex-item">报价中</i>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    require('../assets/scss/order.scss');


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
                this.backUrl=transition.from.path || "/mine";
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



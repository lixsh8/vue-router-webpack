<template>
    <!-- 全局footer -->
    <nv-footer :page-type=""
             :fix-footer="true"
             active-tab="order"
             >
    </nv-footer>

    <div class="ui-tab">
        <ul class="ui-tab-nav flex-wrap">
            <li class="current flex-item" :class="{'current': currentTab==='f'}" @click="changeTab('f')">
                <i class="iconfont icon-danbaoren01"></i>
                <span>待投保</span>
            </li>
            <li class=" flex-item" :class="{'current': currentTab==='s'}" @click="changeTab('s')">
                <i class="iconfont icon-waitPay"></i>
                <span>待支付</span>
            </li>
            <li class=" flex-item" :class="{'current': currentTab==='t'}" @click="changeTab('t')">
                <i class="iconfont icon-dingdan"></i>
                <span>全部</span>
            </li>
        </ul>
        <ul class="ui-tab-content" style="width:300%">
            <li class="current">
                <div class="o-list">
                    <div class="o-list-item">
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
                    </div>
                    <div class="o-list-item">
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
                    </div>
                </div>
            </li>
            <li>选项2内容</li>
            <li>选项3内容</li>
        </ul>
    </div>


</template>

<script>
    require('../assets/scss/order.scss');


    export default {
        ready (){
//            setTimeout(() => {
//                this.$route.router.go({ name: 'list'});
//            },2000);
        },
        data(){
            return {
                currentTab:"f",
            }
        },
        components:{
            "nvFooter":require('../components/footer.vue')
        },
        methods:{
            "changeTab": function(e){
                this.currentTab=e;
            }
        }
    }
</script>



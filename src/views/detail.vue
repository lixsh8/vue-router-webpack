<template>
    <!--返回-->
    <go-back title="详情1" :back-url="backUrl"></go-back>
    
    <div class="header">
        <div class="header-i">
         <img src="../assets/images/icon-tpy.jpg">
        </div>
        <div class="header-news">
        <p>5分钟投保</p>
        <p><span style="color:#666;">省</span>超值优惠</p>
        </div>
    </div>
    <div class="content">                 
        <p><b>专属服务</b></p>
        <p>1、快：<font color="red">5分钟</font>搞定投保，<font color="red">48小时</font>专人送单</p>
        <p>2、赔：一地投保，全国通赔，<font color="red">365天</font>客服无休</p>
        <p>3、免：免费道路救援，<font color="red">100公里</font>拖车全免费</p>
        <br>
        <p><b>活动特权（以下优惠可同时享受）</b></p>
        <p>1、在太平洋购买车险用户，可获得<font color="red">4%</font>百度返现（参与地区：北京、上海、广东、浙江、江苏、安徽、福建、山东、吉林、山西、河北、天津、海南、江西、河南、内蒙古、辽宁、贵州、湖北、陕西、新疆）；返现将于保单生效后15个工作日发放至下单手机号对应的百度钱包账户，可消费或提现；</p>
        <p><font color="red">*返现基数不含车船税；只买交强险不返现</font></p>
        <p>2、千元好礼：在太保成功投保用户可获得地区专属千元好礼，各地区礼品不同，请以太保客服告知的礼品为准，礼品将与保单一同邮寄至保单邮寄地址（参与地区：北京、上海、广东、浙江、江苏、安徽、福建、山东、吉林、山西、河北、天津、海南、江西、河南、内蒙古、辽宁、贵州、湖北、陕西、新疆）；</p>
        <p></p>
        <br>
        <p><b>客服热线</b></p>
        <p>太平洋客服：4006316332</p>
        <p>百度客服：4000360909</p>  
        <div style="height:2000px"></div>         
    </div>

<!-- 返回顶部 -->
<back-top :show-back-top="isShowBt"></back-top>
<!-- 弹出框 -->
<ui-dialog :show-dialog.sync="isShowDialog" :content="dialogCnt" :btns="buttons"></ui-dialog>

<div class="btn-fixed">
    <span @click="showDia()">立即购买</span>
</div>
<div style="height: 72px"></div>


</template>
<style lang="sass" scoped>
    .header{
        width:100%;
        height:4.2rem;
        background: white;
        border-bottom:1px solid #ccc;
    }
    .header-i{
        width:92px;
        height:4.2rem;
         display:inline-block; 
         vertical-align:middle;
    }
    .header-i img{
        width:58px;
        height:58px; 
        margin: 13px 17px;
    }
    .header-news{
        vertical-align:middle;
        width:100px;
        height:4.2rem;
        display:inline-block;
        padding-top: 10px;
    }
    .header-news p{
        font-size:14px;
        line-height:1;
        color:red;
        padding: 10px 0 0 0;
    }
   .content{
    padding:15px;
    background:white;

   }
   .btn-fixed{
    position:fixed;
    width:100%;
    height:72px;
    padding:15px;
    background:white;
    border-top:1px solid #ccc;
    left:0;
    bottom:0px;

   }
   .btn-fixed span{
    display:block;
    width:100%;
    height:44px;
    line-height:44px;
    text-align:center;
    background:#f44335;
    color:white;
    transition: all 0.2s
    }
</style>
<script>

    require('../assets/scss/index.scss');


    export default {
        ready (){
//            setTimeout(() => {
//                this.$route.router.go({ name: 'list'});
//            },2000);
            // var that = this;
            // that.$http({
            //     method:'GET',
            //     url:'http://58.218.213.141:9999/chexian/php/api/index.php?index_param=ad_list'
            // }).then(function(data){
            //     //赋值给alllist数组,
            //     that.$set('ad_list',data.data.ad_list);
            // });
            window.onscroll = this.handlerScroll;

        },
        data (){
            return {
                backUrl:'',
                isShowBt: false, //返回顶部
                //弹出框
                isShowDialog: false,
                dialogCnt: "你确定删除吗？",
                buttons:[{
                    type:'alert',
                    txt:"确定"
                }],
            }
        },
        route: {
            activate(transition) {
                this.backUrl=transition.from.path || "/";
                transition.next();
            },
            deactivate(transition) {
                transition.next();
            }
        },
        components:{
            "goBack":require('../components/go-back.vue'),
            "backTop":require('../components/back-top.vue'),
            "uiDialog":require('../components/ui-dialog.vue'),

        },
        methods:{
            handlerScroll: function(e){
                var st = document.documentElement.scrollTop || document.body.scrollTop,
                    wh = window.screen.height;
                //console.log(wh)
                if(st>wh){
                    this.isShowBt = true;
                }else{
                    this.isShowBt = false;
                }
            },
            showDia: function(e){
                this.isShowDialog = true;
            }
        }
    }
</script>



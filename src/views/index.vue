<template>
    <!--轮播图-->
    <swipe class="my-swipe">
        <swipe-item class="slide1" v-for="item in ad_list">
            <img :src="item.icon_url" />
        </swipe-item>
    </swipe>
    <div class="activity">
        <ul class="flex-wrap">
            <li class="flex-item">
                <a href="/detail.html">
                    <h2>今日特惠</h2>
                    <h3>超值优惠</h3>
                    <img src="../assets/images/act1.jpg" >
                </a>
            </li>
            <li class="flex-item">
                <a href="/detail.html">
                    <h2>今日特惠</h2>
                    <h3>超值优惠</h3>
                    <img src="../assets/images/act1.jpg" >
                </a>
            </li>
            <li class="flex-item">
                <a href="/detail.html">
                    <h2>今日特惠</h2>
                    <h3>超值优惠</h3>
                    <img src="../assets/images/act1.jpg" >
                </a>
            </li>
        </ul>
    </div>
    <div class="insurance">  
        <div class="title">品牌专区</div>   
        <ul>                
            <li class="insurance-item" v-for="item in ins_list">
                <a v-link="{name: 'detail', params: {id: item._id} }"> 
                <div class="icon">
                    <img class="autoPic" src="../assets/images/icon-tpy.jpg" :title="item.name">          
                </div>          
                <div class="desc">
                    <p class="p1 txt-overflow">{{item.title}}</p>
                    <p class="p2 txt-overflow">{{item.title_exlpain}}</p>                             
                </div>  
                </a>    
            </li>    
                    
        </ul> 
    </div>


    <!-- 全局footer -->
    <nv-footer :page-type=""
             :fix-footer="true"
             active-tab="index"
             >
    </nv-footer>

</template>
<script>
    //require('../assets/scss/iconfont/iconfont.css');
    require('../assets/scss/index.scss');


    export default {
        ready (){
//            setTimeout(() => {
//                this.$route.router.go({ name: 'list'});
//            },2000);
            
            //this.getList();
        },
        data (){
            return {
                ad_list: [],
                ins_list: []
            }
        },
        route:{
            data (transition){
                
                //如果从详情返回并且typeid一样才去sessionStorge
                if(sessionStorage.ad_list && sessionStorage.ins_list && transition.from.name === "detail"){
                    this.ad_list = JSON.parse(sessionStorage.ad_list);
                    this.ins_list = JSON.parse(sessionStorage.ins_list);
                }
                else{
                    //页面初次加载获取的数据
                    this.getList();
                }
            },
            deactivate (transition){
                //console.log(transition.to.name)
                if(transition.to.name === "detail"){
                    sessionStorage.ad_list = JSON.stringify(this.ad_list);
                    sessionStorage.ins_list = JSON.stringify(this.ins_list);
                }
                else{
                    sessionStorage.removeItem("ad_list");
                    sessionStorage.removeItem("ins_list");
                }
                transition.next();
            }
        },
        methods:{
            getList: function(){
                var that = this;
                that.$http({
                    method:'GET',
                    url:'http://58.218.213.141:9999/chexian/php/api/index.php?index_param=ad_list'
                }).then(function(data){
                    //赋值给alllist数组,
                    that.$set('ad_list',data.data.ad_list);
                });
                that.$http({
                    method:'GET',
                    url:'http://58.218.213.141:9999/chexian/php/api/index.php?index_param=ins_list'
                }).then(function(data){
                    //赋值给alllist数组,
                    that.$set('ins_list',data.data.ins_list);
                });
            },
        },
        components:{
            "nvFooter":require('../components/footer.vue'),
            "swipe":require('../components/swipe.vue'),
            "swipeItem":require('../components/swipe-item.vue'),

        }
    }
</script>



<template>
    <footer :class="{'fixed': fixFooter}">
        <ul class="flex-wrap footer-nav">
            <li class="flex-item" data-url="home" :class="{'active': activeTab==='index'}" v-on:click="goLink('home')">
                <div class="home iconTab" ></div>
                <div class="tab_name">首页</div>
            </li>
            <li class="flex-item" data-url="serv" :class="{'active': activeTab==='serv'}" v-on:click="goLink('serv')">
                <div class="serv iconTab"></div>
                <div class="tab_name">车主服务</div>
            </li>
            <li class="flex-item" data-url="order" :class="{'active': activeTab==='order'}" v-on:click="goLink('order')">
                <div class="order iconTab"></div>
                <div class="tab_name">订单</div>
            </li>
            <li class="flex-item" data-url="mine" :class="{'active': activeTab==='mine'}" v-on:click="goLink('mine')">
                <div class="mine iconTab"></div>
                <div class="tab_name">我</div>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        props:['fixFooter','activeTab'],
        methods:{
            goLink: function(url){
                this.$route.router.go({ name: url});
            }
        }    
    }
</script>
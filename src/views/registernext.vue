<template>
    <!--返回-->
    <go-back title="注册" :back-url="backUrl"></go-back>
    <div class="login">
        <h1>欢迎使用微车险</h1>
        <div class="login-cnt">
            <div class="login-form">
                <div class="input-box">
                    <input type="password" name="" placeholder="请输入密码">
                </div>
                <div class="input-box">
                    <input type="text" name="" placeholder="请输入所在地">
                </div>
                <div class="input-box">
                    <input type="text" name="" placeholder="用户姓名">
                </div>
                <div class="btn-box">
                    <button class="btn btn-primary" @click="save">保存</button>
                </div>
            </div>
            <div class="login-link">
                
            </div>
        </div>
    </div>
    <!-- 弹出框 -->
    <ui-dialog :show-dialog.sync="isShowDialog" :content="dialogCnt" :btns="buttons"></ui-dialog>
</template>
<style type="text/css" lang="sass">
    .login{
        h1{
            font-size: 18px;
            text-align: center;
            padding: 50px 0;
        }

        .login-cnt{
            .login-form{
                font-size:15px; 
            }
        }

        .login-link{
            font-size: 0px;

            a{
                display:inline-block;
                width:50%;
                height: 32px;
                font-size: 14px;
                color:#999;
                text-align: center;
            }
        }
    }
    .input-box{
        padding:0 15px 15px 15px;

        input{
            height: 44px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: block;
            width: 100%;
            padding: 0 10px;
            box-sizing: border-box;
        }
    }

    .btn-box{
        padding:0 15px 15px 15px;

        .btn{
            width:100%;
            height: 44px;
            font-size: 15px;
            border-radius:5px;
            border:none;
        }
        .btn-primary{
            color: white;
            background: #f44335;
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
        data(){
            return {
                backUrl:'',
                //弹出框
                isShowDialog: false,
                dialogCnt: "保存成功",
                buttons:[{
                    type:'alert',
                    txt:"确定"
                }],
            }
        },
        route: {
            activate(transition) {
                this.backUrl=transition.from.path || "/register";
                transition.next();
            },
            deactivate(transition) {
                transition.next();
            }
        },
        components:{
            "goBack":require('../components/go-back.vue'),
            "uiDialog":require('../components/ui-dialog.vue'),
        },
        methods:{
            
        }
    }
</script>



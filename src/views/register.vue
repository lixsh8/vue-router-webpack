<template>
    
    <div class="login">
        <h1>欢迎使用微车险</h1>
        <div class="login-cnt">
            <div class="login-form">
                <div class="input-box">
                    <input type="text" name="" placeholder="请输入手机号">
                </div>
                <div class="input-inline-box">
                    <input type="text" name="" placeholder="请输入验证码">
                    <span class="ver-code">获取验证码</span>
                </div>
                <div class="btn-box">
                    <button class="btn btn-primary" id="regBtn" @click="goLink()">注册</button>
                </div>
            </div>
            <div class="login-link">
                <p>我已同意注册条款，隐私条款</p>
            </div>
        </div>
    </div>

<!-- 全局footer -->
    <nv-footer :page-type=""
             :fix-footer="true"
             active-tab="mine"
             >
    </nv-footer>
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
            p{
                font-size: 14px;
                color:#999;
                padding: 0 15px
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
    .input-inline-box{
        padding:0 15px 15px 15px;
        font-size: 0;
        
        input,.ver-code{
            vertical-align: middle;
        }
        input{
            height: 44px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 0 10px;
            box-sizing: border-box;
            width:50%;
            display:inline-block;
            border-radius:5px 0 0 5px;
            border-right: none;
        }
        .ver-code{
            display: inline-block;
            width:50%;
            height: 44px;
            line-height: 44px;
            text-align: center;
            background: #f44335;
            color: white;
            font-size: 14px;
            border-radius:0 5px 5px 0;
        }
        .ver-code.disabled{
            background: #ccc;
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
        components:{
            "nvFooter":require('../components/footer.vue')
        },
        methods:{
            goLink: function(){
                this.$route.router.go({ name: 'registernext'});
            }
        }
    }
</script>



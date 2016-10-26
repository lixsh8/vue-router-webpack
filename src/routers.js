'use strict'

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '*':{				//无路由页面
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '/serv':{         //服务
            name: 'serv',
            component: function(resolve){
                require(['./views/serv.vue'],resolve);
            }
        },
        '/order':{         //订单
            name: 'order',
            component: function(resolve){
                require(['./views/order.vue'],resolve);
            }
        },
        '/mine':{         //我的
            name: 'mine',
            component: function(resolve){
                require(['./views/mine.vue'],resolve);
            }
        },
        '/myinsurance':{         //我的投保书
            name: 'myinsurance',
            component: function(resolve){
                require(['./views/myinsurance.vue'],resolve);
            }
        },
        '/myinsuranceDet':{         //我的投保书详情
            name: 'myinsuranceDet',
            component: function(resolve){
                require(['./views/myinsuranceDet.vue'],resolve);
            }
        },
        '/login':{         //登录
            name: 'login',
            component: function(resolve){
                require(['./views/login.vue'],resolve);
            }
        },
        '/register':{         //注册
            name: 'register',
            component: function(resolve){
                require(['./views/register.vue'],resolve);
            }
        },
        '/registernext':{         //注册下一步
            name: 'registernext',
            component: function(resolve){
                require(['./views/registernext.vue'],resolve);
            }
        },
        '/getpassword':{         //找回密码
            name: 'getpassword',
            component: function(resolve){
                require(['./views/getpassword.vue'],resolve);
            }
        },
        '/detail/:id':{         //详情
            name: 'detail',
            component: function(resolve){
                require(['./views/detail.vue'],resolve);
            }
        }
        
    })
}
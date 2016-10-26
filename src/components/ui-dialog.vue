<template>
    <div class="ui-dialog" v-show="showDialog">
        <div class="ui-dialog-cnt">
            <div class="ui-dialog-bd">{{content}}</div>
            <div class="ui-dialog-ctrl">
                <div class="ui-dialog-btn" v-for="btn in btns" @click="clsDialg()" :class="'ui-dialog-btn-'+[btn.type]">{{btn.txt}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .ui-dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.5);
        z-index: 999;

        .ui-dialog-cnt{
            width: 70%;
            background: white;
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 5px;
            -webkit-transform: translate(-50%, -50%);
            box-sizing: border-box;

            .ui-dialog-bd{
                font-size: 14px;
                padding: 18px;
            }

            .ui-dialog-ctrl{
                font-size: 0;

                .ui-dialog-btn{
                    width: 50%;
                    display: inline-block;
                    font-size: 14px;
                    color: white;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                }

                .ui-dialog-btn-cancel{
                    border-top: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    color: #333;
                }
                .ui-dialog-btn-ok{
                    border-top: 1px solid #ccc;
                    color: #f44335;
                }
                .ui-dialog-btn-alert{
                    width: 50%;
                    display: block;
                    font-size: 14px;
                    color: white;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    background:#f44335;
                    margin: 15px auto;
                    border-radius: 5px;
                }
            }
        }
    }

</style>

<script>
    export default{
        data(){
            return{
                
            }
        },
        props:['content','showDialog','btns'],
        methods:{
            clsDialg: function(){
                this.showDialog = false;
            }
        }, 
    }
</script>
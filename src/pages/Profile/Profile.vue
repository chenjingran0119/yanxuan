<template>
  <div class="loginContainer">
    <div class="header">
      <div class="left">
          <span class="iconfont icon-home" @click="$router.replace('/index')"/>
      </div>
      <div  class="middle">
        <h2 class="title"/>
      </div>
      <div  class="right">
        <span class="iconfont icon-icon_search" @click="$router.replace('/search')"/>
        <span class="iconfont icon-gouwuchekong"/>
      </div>
    </div>
    <div class="show">
      <div class="loginInner" :class="{on:loginway===3}">
        <div class="login_header">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="login_content">
          <div class="phone" @click="setLoginway(0)">
            <span class="iconfont icon-shouji" ></span>
            <span>手机号码登录</span>
          </div>
          <div class="email" @click="setLoginway(1)">
            <span class="iconfont icon-youxiang"></span>
            <span>邮箱号码登录</span>
          </div>
          <div class="zhuce" @click="setLoginway(2)">
            <span>手机号快捷注册</span>
            <span class="iconfont icon-icon_next_arrow"></span>
          </div>
        </div>
        <div class="login_footer">
          <div class="wechat">
            <span class="iconfont icon-weixin"></span>
            <span>微信</span>
          </div>
          <div class="qq">
            <span class="iconfont icon-QQ"></span>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <span class="iconfont icon-weibo"></span>
            <span>微博</span>
          </div>
        </div>
      </div>
      <div class=" phonelogin" :class="{on:loginway===0}" >
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content">
          <div class="form">
            <div class="phoneNum">
              <input type="text" placeholder="请输入手机号">
            </div>
            <div class="yanzhengma">
              <input type="text" placeholder="请输入短信验证码">
              <div class="button">获取验证码</div>
            </div>
            <div class="meetproblem">
              <span class="problem">遇到问题？</span>
              <span class="yanzhengmalogin">使用密码验证登录</span>
            </div>
            <div class="go">登录</div>
            <div class="other" @click="setLoginway(3)">其他登录方式</div>
            <div class="bottom">
              <span>注册账号</span>
              <span class="iconfont icon-icon_next_arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="emaillogin " :class="{on:loginway===1}" >
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content">
          <div class="form">
            <div class="phoneNum">
              <input type="text" placeholder="邮箱账号">
            </div>
            <div class="yanzhengma">
              <input type="text" placeholder="密码">
            </div>
            <div class="meetproblem">
              <span class="problem">注册账号</span>
              <span class="yanzhengmalogin">忘记密码</span>
            </div>
            <div class="go">登录</div>
            <div class="other" @click="setLoginway(3)">其他登录方式</div>
          </div>
        </div>
      </div>
      <div class=" register " :class="{on:loginway===2}" >
        注册
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
    export default {
      data(){
        return {
          loginway:3//0代表手机登录，1代表邮箱登录,2代表注册，3代表个人页
        }
      },
      methods:{
        setLoginway(way){
          this.loginway=way
          console.log(this.loginway)

        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.loginContainer
  width 100%
  height 1336px
  background #F2F5F4
  .header
    display flex
    width 100%
    height 88px
    background #fff
    box-sizing border-box
    padding 0 16px 0 24px
    position relative
    bottom-border-1px(rgb(#666))
    .left
      line-height 88px
      span
        font-size 60px
        color #666
        z-index 10
    .middle
      .title
        margin 25px 0 0 230px
        width 146px
        height 42px
        line-height 88px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-repeat no-repeat
        /*background-size contain*/
        background-size cover
        display inline-block


    .right
      position absolute
      right 16px
      top 0
      span
        margin-right 15px
        font-size 55px
        line-height 88px
        color #666

  .show
    >div
      display none
      padding-top 45px
      &.on
          display block
    .loginInner
           height 1248px
           position relative
           .login_header
                display flex
                justify-content center
                align-items center
                width 100%
                height 420px
                img
                  width 268px
                  height 90px
           .login_content
                width 670px
                padding 0 40px
                height 294px
                margin-bottom 205px
                display flex
                flex-direction column
                align-items center
                .phone
                  width 666px
                  height 90px
                  border 2px solid #b4282d
                  border-radius 5px
                  background #b4282d
                  display flex
                  align-items center
                  justify-content center
                  margin-bottom 32px
                  color #fff
                  font-size 28px
                  .iconfont
                    font-size 40px
                    margin-right 10px
                .email
                  width 666px
                  height 90px
                  border 2px solid #b4282d
                  border-radius 5px
                  display flex
                  align-items center
                  justify-content center
                  margin-bottom 32px
                  color #b4282d
                  font-size 28px
                  .iconfont
                    font-size 40px
                    margin-right 10px

                .zhuce
                  font-size 28px
           .login_footer
                width 100%
                height 40px
                display flex
                justify-content center
                color #666
                position: absolute
                left 0
                bottom 80px
                .wechat
                  height 40px
                  padding 0 40px
                  font-size 28px
                  line-height 40px
                  .iconfont
                    font-size 32px
                    margin-right 5px
                .qq
                  height 40px
                  padding 0 40px
                  font-size 28px
                  line-height 40px
                  border-left  1px solid #666
                  border-right  1px solid #666
                  .iconfont
                    font-size 32px
                    margin-right 5px
                .weibo
                  height 40px
                  padding 0 40px
                  font-size 28px
                  line-height 40px
                  .iconfont
                    font-size 32px
                    margin-right 5px

    .phonelogin,.emaillogin,.register
      width 100%
      height 1248px
      background #fff
      .logo
        width 100%
        text-align center
        img
          width 192px
          height 64px
      .content
        width 100%
        height 572px
        margin-top 160px
        .form
          width 671px
          height 572px
          padding 0 40px
          color  #333
          font-size 30px
          .phoneNum
            width 671px
            height 91px
            border-bottom 1px solid #bdbdbd;
            input
              width 590px
              height 43px
              margin 28px 0
          .yanzhengma
            width 671px
            height 91px
            display flex
            align-items center
            margin-top 32px
            border-bottom 1px solid #bdbdbd;
            input
              width 380px
              height 43px
              margin 20px 0
            .button
              width 164px
              height 54px
              line-height 54px
              border 2px solid #7F7F7F
              border-radius 8px
              margin-left 120px

          .meetproblem
            width 100%
            height 20px
            padding 38px 0
            .problem
              float left
            .yanzhengmalogin
              float right

          .go
            width 100%
            height 91px
            margin-top 20px
            background #b4282d
            color #fff
            text-align center
            line-height 91px
            border-radius 8px
          .other
            height 91px
            color #b4282d
            border 2px solid #b4282d
            text-align center
            line-height 91px
            border-radius 8px
            margin-top 28px
          .bottom
             text-align center
             margin-top 30px
             .iconfont
              font-size 30px


</style>

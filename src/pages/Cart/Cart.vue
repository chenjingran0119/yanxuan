<template>
    <div class="cartContainer">
      <div class="header">
        <div  class="middle">
          <span class="title">购物车</span>
        </div>
        <div  class="right">
          <span class='text' @click="$router.push('/profile')">领券</span>
        </div>
      </div>
      <div class="middle">
        <ul class="list">
          <li class="item">
            <span class="iconfont icon-duigou"></span>
            <span>30天无忧退货</span>
          </li>
          <li class="item">
            <span class="iconfont icon-duigou"></span>
            <span>48小时快速退款</span>
          </li>
          <li class="item">
            <span class="iconfont icon-duigou"></span>
            <span>满88元免邮费</span>
          </li>
        </ul>
        <div class="image">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
          <span class="text">去添加点什么吧</span>
          <div class="button" @click="$router.push('/profile')">登录</div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartContainer
    width 100%
    height 1336px
    background-color  #f4f4f4
    .header
      display flex
      width 100%
      height 88px
      background #fff
      box-sizing border-box
      padding 0 16px 0 24px
      position relative
      bottom-border-1px(rgb(#666))
      display flex
      justify-content center
      align-items center
      .title
          font-size 0.48rem
          line-height 88px
          display inline-block
      .right
        position absolute
        top 30px
        right 46px


        span
          color #B4282D
          font-size 0.4rem

    .middle
      width 690px
      height 70px
      padding 0 30px
      .list
        height 70px
        display flex
        justify-content space-between
        align-items center
        line-height 70px
      .image
        width 100%
        height 1148px
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 248px
          height 248px
          vertical-align bottom
        .text
          font-size 0.37333rem
          color #999
          margin-bottom 50px
        .button
          width: 6.4rem;
          height: 1.22667rem;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem;
          text-align center


</style>

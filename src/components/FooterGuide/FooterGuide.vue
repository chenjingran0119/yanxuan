<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " :class="{on:$route.path==='/index'}" @click="goto('/index')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/cate'}" @click="goto('/cate')">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/topic'}" @click="goto('/topic')">
      <span class="item_icon">
        <i class="iconfont icon-wupin"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/cart'}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-icon_signal"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 20px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 42px
</style>

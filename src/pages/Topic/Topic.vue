<!--识物-->
<template>
    <div class="topicContainer">
      <div class="header">
        <div class="left">
          <span class="iconfont icon-home" @click="$router.replace('/index')"/>
        </div>
        <div  class="middle">
          <span class="title1">发现</span>
          <span class="title2">甄选家</span>
        </div>
        <div  class="right">
          <span class="iconfont icon-icon_search" @click="$router.replace('/search')"/>
          <span class="iconfont icon-gouwuchekong"/>
        </div>
      </div>
      <div class="tabs">
        <ul class="tabs-inner">
          <li v-for="(tab,index) in topicData" :key="index">
            <router-link :to="`/topic/tab/${index}`">
              <span>{{tab.tabName}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['topicData'])
      },
      mounted(){
        this.$store.dispatch('getTopicData')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .topicContainer
    width 100%
    background #f4f4f4
    .header
      display flex
      width 100%
      height 100px
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
        margin-left 130px
        width 320px
        height 100px
        text-align center
        line-height 100px
        .title1
          font-size 40px
          color #b4282d
          font-weight bold
          margin-right 25px
        .title2
          font-size 28px
          color #666

      .right
        position absolute
        right 16px
        top 0
        span
          margin-right 15px
          font-size 55px
          line-height 88px
          color #666


    .tabs
      height 72px
      width 100%
      overflow hidden
      background #fff
      bottom-border-1px(rgb(#666))
      .tabs-inner
        display flex
        width 1000px
        padding-left 30px
        white-space nowrap
        li
          color #666
          font-size 28px
          height 72px
          line-height 72px
          padding 0 16px
          margin-left 20px
          &:nth-child(1)
            color #b4282d
            border-bottom 2px solid #b4282d
            margin-left 0

</style>

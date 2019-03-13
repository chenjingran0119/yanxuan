<template>
    <div class="searchContainer">
      <div class="content">
        <div class="search">
          <div class="left">
            <span class="iconfont icon-icon_search"></span>
            <span>{{search.defaultKeyword.keyword}}</span>
          </div>
          <span class="cancel" @click="$router.back()">取消</span>
        </div>
        <div class="hotSearch">
          <div class="wrap">
            <div  class="title">热门搜索</div>
            <ul class="list">
              <li class="item" v-for="(item,index) in search.hotKeywordVOList" :key="index">{{item.keyword}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['search'])
    },
    mounted(){
      this.$store.dispatch('getSearch')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    height 1314px
    background #f4f4f4
    .content
      width 100%
      height 494px
      background #fff
      .search
        width 690px
        padding 0 30px
        height 88px
        display flex
        align-items center
        .left
          width 564px
          height 56px
          padding 0 20px
          background #f4f4f4
          color #999
          line-height 56px
          font-size .37333rem
          display flex
          .iconfont
            font-size 40px
            margin-right 5px
        .cancel
          margin-left .4rem
          font-size .37333rem
          color #333
      .hotSearch
        width 100%
        height 406px
        .wrap
          width 690px
          height 376px
          padding 0 30px 30px
          margin-bottom 20px
          .title
            width 100%
            height 90px
            line-height 90px
            color #999
            font-size 28px
          .list
            display flex
            flex-wrap wrap
            .item
              padding 0 0.2rem
              margin-right .42667rem
              margin-bottom .42667rem
              line-height .61333rem
              border 1px solid #999
              border-radius 4px
              color: #333
              &.on
                border 1px solid #b4282d
                color #b4282d
</style>

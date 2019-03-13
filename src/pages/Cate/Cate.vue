<!--分类-->
<template>
    <div class="cartContainer">
      <div class="header">
        <div class="search"  @click="$router.push('/search')">
          <span class="iconfont icon-icon_search"></span>
          <span>搜索商品，共19966款好物</span>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <ul class="nav">
            <li class="item " v-for="cate in cates" :key="cate.id"
            :class="cate.id===$route.query.cateId*1?'active':''">
              <router-link :to="`/cate/cateList?cateId=${cate.id}`">{{cate.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="reight">
          <div class="routerView">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    import {reqCate} from '../../api'
    export default {
      mounted(){
        this.$store.dispatch('getCate')
        const leftScroll = new BScroll('.left',{
          click:true
        })
      },
      computed:{
        ...mapState({
          cates:state=>state.cates
        })
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartContainer
    width 100%
    .header
      width 100%
      height 88px
      display flex
      justify-content center
      align-items center
      bottom-border-1px(rgb(#666))
      .search
        width 690px
        height 56px
        line-height 56px
        color #333
        font-size .37333rem
        background #ededed
        border-radius .10667rem
        display flex
        justify-content center
        .iconfont
          font-size 40px
          margin-right 5px
    .content
      width 100%
      height 1148px
      display flex
      .left
        overflow hidden
        .nav
          padding 40px 0
          width 162px
          height 100%
          display flex
          flex-direction column
          .item
            width 100%
            height 50px
            line-height 50px
            text-align center
            font-size .37333rem
            color #333
            position relative
            margin-top 40px
            &:nth-child(1)
              margin-top 0
            &.active
              a
                color #ab2b2b
              &::before
                content ' '
                position absolute
                top 0
                left 0
                bottom 0
                width .08rem
                background-color #ab2b2b



      .reight
        width 528px
        padding 30px 30px 21px 30px


</style>

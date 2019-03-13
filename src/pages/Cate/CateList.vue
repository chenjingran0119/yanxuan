<!--分类-->
<template>
    <div class="cateContainer">
      <div class="scroll">
        <div class="topImg">
          <img src="http://yanxuan.nosdn.127.net/d723607e0cbb0c4a11c9396612c71d9b.jpg?imageView&thumbnail=0x196&quality=75" alt="">
        </div>
        <ul v-if="cateList" class="cateList">
          <li class="cateItem" v-for="(sub,index) in cateList.subCateList" :key="index">
            <img :src="sub.bannerUrl" alt="">
            <div>{{sub.name}}</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      const rightScroll = new BScroll('.cateContainer',{
        click:true
      })
    },
    computed:{
        ...mapState({
        cates:state=>state.cates
      }),
      cateList(){
        let result = this.cates.find(cate => cate.id===this.$route.query.cateId*1)
        if(!result){
          return this.cates[0]
        }else{
          return result
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cateContainer
    width 528px
    height 1148px
    overflow hidden
    .scroll
      .topImg
        margin-bottom 32px
      .cateList
        width 100%
        height 100%
        display flex
        flex-wrap wrap
        .cateItem
          width 144px
          height 216px
          margin-right 34px
          &:nth-child(3n+3)
            margin-right 0
          img
            width 144px
            height 144px
          div
            font-size 0.32rem
            height 0.96rem
            color #333
            line-height 48px
            text-align center


</style>

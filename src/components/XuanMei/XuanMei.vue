<template>

  <!--识物  style:1 选妹-->
    <div>
      <div class="content" >
        <div class="name">
          <img :src="topic.avatar" alt="">
          <span>{{topic.nickname}}</span>
        </div>
        <div class="title">{{topic.title}}</div>
        <div class="image">
          <img :src="topic.picUrl" alt="">
        </div>
        <div class="eyes">
          <span class="iconfont icon-check-circle"></span>
          <span>{{readCount}}人看过</span>
        </div>
      </div>

    </div>
</template>

<script>

  export default {
    props:{
      topic:Object
    },
    computed:{
      readCount(){
        const {readCount}=this.topic
        let readCountStr=readCount.toString()
        if(readCountStr.length<5){
          return readCountStr
        }else{
          readCountStr = (readCount/10000).toString().split('.')[0]+'w'
          return readCountStr
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    background #fff
    padding 36px 30px
    margin 20px 0
    .name
        width 100%
        align-items center
        margin-bottom 24px
        display flex
        img
          border-radius 50%
          width 54px
          height 54px
        span
          font-size 28px
          color #333
          margin-left 10px
      .title
        font-size 36px
        color #333
        line-height 48px
        margin-bottom 16px
      .image
        width 690px
        height 376px
        img
          border-radius 10px
          width 690px
          height 376px
    .eyes
      margin-top 18px
      margin-bottom -16px
      span
        font-size 20px
        color #999
</style>

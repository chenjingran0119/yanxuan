<template>

  <!--识物  style:2 员工精选-->
  <div>
    <div class="content" >
      <div class="name">
        <img :src="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">{{topic.title}}</div>
      <div class="subTitle ellipsis">{{topic.subTitle}}</div>
      <div class="eyes">
        <span class="iconfont icon-check-circle"></span>
        <span>{{readCount}}人看过</span>
      </div>
      <div class="image">
        <img :src="topic.picUrl" alt="">
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
    position relative
    background #fff
    padding 32px 30px
    margin 20px  0
    .name
      width 100%
      height 56px
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
      font-size 38px
      color #333
      line-height 48px
      margin-bottom 16px
      width 400px
      height 86px
    .subTitle
      width 400px
      height 40px
      padding-top 8px
      color #7f7f7f
      font-size 28px
      line-height 40px
    .eyes
      margin-top 18px
      margin-bottom -16px
      span
        font-size 20px
        color #999
    .image
      position absolute
      right 20px
      top 20px
      img
        width 272px
        height 272px
        border-radius 10px
</style>

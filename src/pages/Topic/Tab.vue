<template>
  <div>
    <!--推荐-->
    <div class="tabWrapper" v-if="tabId===0">
      <div class="content">
        <ul v-for="(item,index) in recommendData" :key="index">
          <li v-for="(topic,index) in item.topics" :key="index">
            <XuanMei v-if="topic.style===1" :topic="topic"/>
            <YuanGong v-if="topic.style===2" :topic="topic"/>
          </li>
        </ul>
        <ul v-for="(item,index) in moreRecommendData.result" :key="index+Date.now()">
          <li v-for="(topic,index) in item.topics" :key="index">
            <XuanMei v-if="topic.style===1" :topic="topic"/>
            <YuanGong v-if="topic.style===2" :topic="topic"/>
          </li>
        </ul>
      </div>
    </div>

    <!---->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import XuanMei from '../../components/XuanMei/XuanMei.vue'
  import YuanGong from '../../components/YuanGong/YuanGong.vue'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        autoGetDataNum:1
      }
    },
    computed:{
      ...mapState(['recommendData','tabData', "moreRecommendData"]),
      tabId(){
        if(this.$route.params.id==='0'){ //推荐
          return 0
        }else if(this.$route.params.id==='1'){  //收纳秘诀
          return 1
        }else if(this.$route.params.id==='2'){ //20元好物
          return 2
        }else if(this.$route.params.id==='3'){ //晒单
          return 3
        }else if(this.$route.params.id==='4'){  //达人
          return 4
        }else if(this.$route.params.id==='5'){  //上新
          return 5
        }else if(this.$route.params.id==='6'){  //HOME
          return 6
        }
      }
    },
    components:{
      XuanMei,
      YuanGong
    },
    mounted(){
      this.$store.dispatch('getMoreRecommendData', {page:1,size:5})
      this.$store.dispatch('getRecommendData')
      this.$store.dispatch('getTabData')
      new BScroll('.tabs',{
        scrollX: true,
        click:true
      })
      //上拉刷新
      let pullingUp = new BScroll('.tabWrapper',{
        scrollY: true,
        click:true,
        pullUpLoad: true,
      });
      pullingUp.on('pullingUp',()=>{
        this.autoGetDataNum++;
        this.$store.dispatch('getMoreRecommendData', {page: this.autoGetDataNum, size: 3})
        pullingUp.finishPullUp();//可以多次执行上拉刷新
        this.$nextTick(()=> pullingUp.refresh())

      })

    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabWrapper
    width 100%
    height 1125px
    overflow hidden
</style>

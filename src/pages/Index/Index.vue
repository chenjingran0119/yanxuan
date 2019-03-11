<template>
  <div class="indexContainer">
    <!--首页头部-->
    <header class="header">
      <div class="logoLine">
        <h1 id="logo"/>
        <div class="search"  @click="$router.push('/search')">
          <span class="iconfont icon-icon_search"></span>
          <span>搜索商品，共19966款好物</span>
        </div>
        <span class="loginButton" @click="$router.push('/profile')">登录</span>
      </div>
      <div class="nav">
        <div class="tabs">
          <ul class="tabs-inner">
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <!--<li>个护清洁</li>-->
            <!--<li>母婴亲子</li>-->
            <!--<li>运动旅行</li>-->
            <!--<li>数码家电</li>-->
            <!--<li>礼品特色</li>-->
          </ul>
        </div>
        <div class="down" >
          <span class="iconfont icon-down"/>
        </div>
      </div>
    </header>
    <!--首页内容-->
    <div class="content">
      <!--遮罩层-->
      <div class="zhezhao"></div>

      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!--slogon-->
      <div class="slogon">
        <ul class="g-grow">
          <li>
            <span class="iconfont icon-check-circle"></span>
            <span class="text">网易自营品牌</span>
          </li>
          <li>
            <span class="iconfont icon-check-circle"></span>
            <span class="text">30天无忧退货</span>
          </li>
          <li>
            <span class="iconfont icon-check-circle"></span>
            <span class="text">48小时快速退款</span>
          </li>
        </ul>
      </div>

      <!--shopNav-->
      <ul class="shopNav">
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" alt="">
          <span>服饰鞋包</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt="">
          <span>美食酒水</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt="">
          <span>个护清洁</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" alt="">
          <span>限时购</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" alt="">
          <span>母婴亲子</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" alt="">
          <span>运动旅行</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" alt="">
          <span>数码家电</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" alt="">
          <span>礼品特色</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" alt="">
          <span>超级会员</span>
        </li>
      </ul>

      <!--m-indexBigPromotionModule（献礼女王）-->
      <div class="m-indexBigPromotionModule">
        <div class="bigImg">
          <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
        </div>
        <div class="smallImg">
          <img class="left" src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
          <img class="right" src="https://yanxuan.nosdn.127.net/15519497825531997.jpg?imageView&thumbnail=375x0&quality=75" alt="">
        </div>
      </div>

      <!--员工精选-->
      <div class="cat">
        <img src="https://yanxuan.nosdn.127.net/e0e6ac580c822602d83fe42f3e0b4b58.png" alt="">
      </div>

      <!--四宫格-->
      <div class="m-sceneLightShoppingGuideModule">
        <div class="m-styleBanner">
          <div class="title">女王の专属美食阁</div>
          <div class="desc">3件75折/每满150减30</div>
          <div class="picList">
            <img class="leftImg" src="http://yanxuan.nosdn.127.net/2b7ffdac363edd686b0471de1655c813.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img class="rightImg" src="http://yanxuan.nosdn.127.net/d84dbafe215d765fb5bbd75e642ad445.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="m-styleBanner">
          <div class="title">2019明前龙井</div>
          <div class="desc">预售好价75折</div>
          <div class="picList">
            <img class="leftImg" src="http://yanxuan.nosdn.127.net/f958c8b4e8d6dfa7fc574bd06b530821.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img class="rightImg" src="http://yanxuan.nosdn.127.net/c33ee95d358956a927708d16d67d727e.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="m-styleBanner">
          <div class="title">按摩神器大赏</div>
          <div class="desc">仿真人手按摩</div>
          <div class="picList">
            <img class="leftImg" src="http://yanxuan.nosdn.127.net/0fc3975b621704cb00328ef96cdce963.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img class="rightImg" src="http://yanxuan.nosdn.127.net/823652e902ffeb49f50381b93e7e0be0.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="m-styleBanner">
          <div class="title">热销百强榜</div>
          <div class="desc">全站实时更新</div>
          <div class="picList">
            <img class="leftImg" src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img class="rightImg" src="http://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
      </div>

      <Split/>

      <!--私人定制-->
      <div class="private">
        <div class="moduleTitle">
          <span>私人定制</span>
        </div>
        <div class="swiper-container privateSw">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/a31d7ecdec0f914e1c375fac666c1183.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/eb3eccf64fea07c12a7b3f562e45795f.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">破壁机/冷热双杯</span>
                      <span class="dynamicPrice">￥599</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/b532f2f441572242333f6c5b92fc9f10.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/7c100387e5b3d55773a196c4d1ccc9e4.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">破壁机/冷热双杯</span>
                      <span class="dynamicPrice">￥599</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/122a30188b07fa93daf3257da917296b.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/44667cd3d46104cac038a5ae22416340.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/7c100387e5b3d55773a196c4d1ccc9e4.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">破壁机/冷热双杯</span>
                      <span class="dynamicPrice">￥599</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/122a30188b07fa93daf3257da917296b.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/63c5f749c41c193731ffec74cb846642.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/7c100387e5b3d55773a196c4d1ccc9e4.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">破壁机/冷热双杯</span>
                      <span class="dynamicPrice">￥599</span>
                    </div>
                  </li>
                  <li>
                    <div class="img">
                      <img src="http://yanxuan.nosdn.127.net/122a30188b07fa93daf3257da917296b.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                    <div class="desc">
                      <span class="data-reactid">严选礼品卡 200元面值</span>
                      <span class="dynamicPrice">￥220</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="swiper-pagination privateSw"></div>
          </div>
      </div>



<!--填充-->
      <div class="padding"></div>

    </div>
    <router-view/>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import Split from '../../components/Split/Split.vue'
    export default {
      data(){
        return {
          isAll:false
        }
      },
      methods:{
        goto(path) {
          this.$router.push(path)
        },
      },
      components:{
        Split
      },
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay: 3000,//自动轮播
          speed: 600,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
          //下面方法可以生成我们自定义的分页器到页面上
          paginationCustomRender: function(swiper, current, total) {
            var customPaginationHtml = "";
            for(var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if(i == (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        })
        new Swiper ('.swiper-container,.privateSw', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,

          },
        })

      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .indexContainer
   position relative
   .header
    height 148px
    background #fff
    position fixed
    left 0
    top 0
    z-index 2
    .logoLine
      display flex
      height 56px
      align-items center
      position relative
      padding 12px 30px
      #logo
        width 138px
        height 40px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-repeat no-repeat
        /*background-size contain*/
        background-size cover
        display inline-block
        margin-right 20px
      .search
        width 442px
        display flex
        align-items center
        justify-content center
        height 56px
        line-height 56px
        background #ededed
        border-radius 10px
        span
          font-size 26px
          color #666
        .iconfont
          font-size 30px
          margin-right 10px
      .loginButton
        height 38px
        width 72px
        border 1px solid #b4282d
        border-radius 5px
        font-size 22px
        color #b4282d
        text-align center
        line-height 38px
        margin-left 16px
    .nav
      display flex
      width 750px
      height 60px
      .tabs
        width 650px
        height 60px
        .tabs-inner
          display flex
          padding-left 30px
          li
            color #666
            font-size 28px
            height 60px
            line-height 60px
            padding 0 16px
            margin-left 20px
            &:nth-child(1)
               color #b4282d
               border-bottom 2px solid #b4282d
               margin-left 0
      .down
          width 100px
          height 60px
          line-height 60px
          text-align center
          .iconfont
            font-size 40px
            color #333
   .content
     margin-top 148px
     width 100%
     height 100%
     .zhezhao
       width 100%
       height 100%
       background rgba(0,0,0,0.3)
       z-index 2
     .swiper-container
        width 100%
        height 370px
        position relative
        .swiper-wrapper
          width 100%
          height 370px
          .swiper-slide
            width 100%
            height 370px
            img
              width 100%
              height 370px
        .swiper-pagination
          width 100%
          height 10px
          .swiper-pagination-custom
             bottom: 10px;
             left: 0;
             width: 100%;
             height: 100px;

     .slogon
      height 72px
      .g-grow
        display flex
        padding 0 30px
        height 72px
        align-items center
        justify-content center
      li
          width 228px
          height 36px
          .text
            color #b4282d
            font-size 24px
          .iconfont
            color #b4282d
            font-size 28px
     .shopNav
      display flex
      flex-wrap wrap
      padding-bottom 52px
      li
        margin 10px 20px 9px 20px
        display flex
        flex-direction column
        align-items center
        margin
        img
          width 110px
          height 110px
        span
          font-size 22px
          color #666
          margin-top 10px

     .m-indexBigPromotionModule
      width 750px
      height 430px
      display flex
      flex-wrap wrap
      .bigImg
        width 750px
        height 197px
      .smallImg
        width 750px
        height 203px
        .left
          float left
        .right
          float right
     .cat
      height 160px
      img
        height 160px
        width 100%

     .m-sceneLightShoppingGuideModule
      box-sizing border-box
      width 100%
      height 536px
      padding 10px 30px 30px 26px
      margin-bottom 20px
      display flex
      flex-wrap wrap
      .m-styleBanner
        background #F5F5F5
        padding 20px 0 0 20px
        margin 4px 0 0 4px
        width 323px
        height 244px
        .title
          color #333
          font-size 0.42667rem
          padding-left 10px
          height 48px
        .desc
          font-size 0.32rem
          color #7f7f7f
          padding-left 10px
          height 36px
        .picList
          .leftImg
            float left
            margin-right 4px
          .rightImg
            float right
            margin-right 4px
     .private
      height 470px
      .moduleTitle
        padding 0 30px
        height 100px
        line-height 100px
        span
          font-size .42667rem
      .swiper-container
        width 100%
        height 310px
        .swiper-wrapper
          .swiper-slide
            ul
              width 100%
              height 310px
              display flex
              li
                width 216px
                height 310px
                margin-left 20px
                .img
                  width 216px
                  height 216px
                  background #F5F5F5
                  margin-bottom 12px
                  img
                    width 216px
                    height 216px
                .desc
                  width 196px
                  height 72px
                  padding 0 10px
                  margin-bottom 10px
                  font-size 24px
                  .data-reactid
                    line-height 36px
                  .dynamicPrice
                    color #b4282d
     .padding
      width 100%
      height 500px
      background yellow
</style>
<style>
    /*包裹自定义分页器的div的位置等CSS样式*/
  .swiper-pagination-custom {
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 100px;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: .3;
    margin-right: 10px;
  }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background-color: #fff;
  }

</style>

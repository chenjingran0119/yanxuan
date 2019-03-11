import Index from '../pages/Index/Index.vue'
import Cart from '../pages/Cart/Cart.vue'
import Cate from '../pages/Cate/Cate.vue'
import Profile from '../pages/Profile/Profile.vue'
import Topic from '../pages/Topic/Topic.vue'
import Search from '../pages/Search/Search.vue'
import CateList from '../pages/Cate/CateList.vue'

export default [
  {
    path:'/index',
    component:Index,
    meta: {
      showFooter:true
    }

  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      showFooter:true
    }

  },
  {
    path:'/cate',
    component:Cate,
    meta: {
      showFooter:true
    },
    children:[
      {
        path:'/cate/cateList',
        component:CateList,
        meta: {
          showFooter:true
        },
      },
      {
        path:'/',
        redirect:'/cate/cateList'
      }
    ]

  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/topic',
    component:Topic,
    meta: {
      showFooter:true
    }

  },
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/search',
    component:Search
  }

]

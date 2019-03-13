import {reqCate,reqSearch,reqShouyeData,reqTabs,reqRecommendData,reqMoreRecommendData,reqTabData} from '../api'
import {RECEIVE_CATE,RECEIVE_SEARCH,RECEIVE_SHOUYEDATA,RECEIVE_TOPICDATA,RECEIVE_RECOMMENDDATA,RECEIVE_TABDATA,RECEIVE_MORE_RECOMMENDDATA} from './mutation-types'
export default {
  //获取分类列表
  async getCate({commit}){
    const result = await reqCate()
    if(result.code === 0){
      commit(RECEIVE_CATE,result.data)
    }
  },
  //获取搜索列表
  async getSearch({commit}){
    const result = await reqSearch()
    if(result.code === '200'){
      commit(RECEIVE_SEARCH,result.data)
    }
  },
//获取主页数据
  async getShouyeData({commit}){
    const result = await reqShouyeData()
    if(result.code === 0){
      commit(RECEIVE_SHOUYEDATA,result.data)
    }
  },

  //获取识物列表
  async getTopicData({commit}){
    const result = await reqTabs()
    if(result.code==='200'){
      commit(RECEIVE_TOPICDATA,result.data)
    }
  },

  //获取识物下面列表
  async getRecommendData({commit}){
    const result = await reqRecommendData()
    if(result.code==='200'){
      commit(RECEIVE_RECOMMENDDATA,result.data)
    }
  },

  //获取识物下面列表
  async getMoreRecommendData({commit}, {page, size}){
    const result = await reqMoreRecommendData(page, size)
    if(result.code==='200'){
      commit(RECEIVE_MORE_RECOMMENDDATA, result.data)
    }
  },

  //获取识物其他数据
  async getTabData({commit}){
    const result= await reqTabData()
    if(result.code==='200'){
      commit(RECEIVE_TABDATA,result.data)
    }
  }
}


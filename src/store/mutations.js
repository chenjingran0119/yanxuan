import {
  RECEIVE_CATE,
  RECEIVE_SEARCH,
  RECEIVE_SHOUYEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_RECOMMENDDATA,
  RECEIVE_TABDATA,
  RECEIVE_MORE_RECOMMENDDATA
} from './mutation-types'

export default {
  [RECEIVE_CATE](state,cates){
    state.cates=cates
  },
  [RECEIVE_SEARCH](state,search){
    state.search= search
  },
  [RECEIVE_SHOUYEDATA](state,shouyeData){
    state.shouyeData = shouyeData
  },
  [RECEIVE_TOPICDATA](state,topicData){
    state.topicData =topicData
  },
  [RECEIVE_RECOMMENDDATA](state,recommendData){
    state.recommendData=recommendData
  },
  [RECEIVE_TABDATA](state,tabData){
    state.tabData = tabData
  },
  [RECEIVE_MORE_RECOMMENDDATA](state,moreRecommendData){
    if(!state.moreRecommendData.hasMore){
      state.moreRecommendData = moreRecommendData
    }else if(state.moreRecommendData.hasMore){
      state.moreRecommendData.result.push(...moreRecommendData.result)
    }
  }


}

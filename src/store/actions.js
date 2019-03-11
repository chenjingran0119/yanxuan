import {reqCate} from '../api'
import {RECEIVE_CATE} from './mutation-types'

export default {
  async getCate({commit}){
    const result = await reqCate()
    if(result.code === 0){
      commit(RECEIVE_CATE,result.data)
    }

  }
}

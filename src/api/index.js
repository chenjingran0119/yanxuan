import  ajax from './ajax'

const BASE = '/api'
export const reqCate = () => ajax('/cate')
export const reqSearch = () => ajax(BASE+'http://m.you.163.com/xhr/search/init.json','POST')
export const reqShouyeData = () => ajax('/index')
// 请求识物组件内Tab懒数据
export const reqTabs = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)
// 请求识物下推荐数据
export const reqRecommendData = () => ajax(`${BASE}/topic/v1/find/recManual.json`)

// 推荐数据上拉加载
export const reqMoreRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${BASE}/topic/v1/find/recAuto.json`, {page, size, exceptIds})


// 获取其它组件数据
export const reqTabData = (page, size, tabId) => ajax(`${BASE}/topic/v1/find/getTabData.json`, {page, size, tabId})

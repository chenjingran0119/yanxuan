import Mock from 'mockjs'
import categroys from './fenlei_zhuanqu.json'
import shouye_data from './shouye_data.json'


Mock.mock( '/cate', {code: 0, data: categroys.categoryL1List});
Mock.mock('/index',{code:0,data:shouye_data});

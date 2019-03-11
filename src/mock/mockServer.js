import Mock from 'mockjs'
import categroys from './fenlei_zhuanqu.json'



Mock.mock( '/cate', {code: 0, data: categroys.categoryL1List});

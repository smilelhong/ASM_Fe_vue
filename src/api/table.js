import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function testget(params) {
  return request({
    url: '/test',
    method: 'get',
    params
  })
}

export function testget1(params) {
  return request({
    url: '/test1',
    method: 'get',
    params
  })
}

export function testget2(params) {
  return request({
    url: '/test2',
    method: 'get',
    params
  })
}


import request from '@/utils/request'

// 登陆验证（首先看有么有登陆）
export function loginStatus (parems) {
  return request({
    url: '/userLogin',
    method: 'get'
  })
}

// 验证登陆
export function verifyLogin () {
  return request({
    url: '/verify',
    method: 'get'
  })
}

import { fetch } from './fetch' // 引用fetch.js
import api from './url' // 引用url.js

// 查看用户
// export function lookOption (issuer, userId) { // lookOption是你要调用接口的名字，issuer,userId是传进来的参数
//   return fetch({
//     // api.Hallowmas 引用url.js里面的数据
//     url: api.Hallowmas + '/halloween/' + issuer + '/question',
//     method: 'get', // 请求方法
//     params: {
//       currentUserId: userId // 传过去的参数
//     }
//   })
// }
// 注册接口
export function register (username, password, email) {
  return fetch({
    url: api.Hallowmas + 'register/registerfrom',
    method: 'post',
    params: {
      'username': username,
      'password': password,
      'email': email
    }
  })
}
// 判断邮箱是否存在接口
export function isEmail (email) {
  return fetch({
    url: api.Hallowmas + 'register/email?email=' + email,
    method: 'get'
  })
}
// 判断用户名是否注册接口
export function isname (username) {
  return fetch({
    url: api.Hallowmas + 'register/username?username=' + username,
    method: 'get'
  })
}
// 用户登陆接口
export function login (username, password) {
  return fetch({
    url: api.Hallowmas + 'login',
    method: 'post',
    params: {
      'username': username,
      'password': password
    }
  })
}
// 获取用户信息接口
export function getPersonMessge () {
  return fetch({
    url: api.Hallowmas + 'user',
    method: 'get'
  })
}
// 获取视频评论接口
export function getComment (toVideoId) {
  return fetch({
    url: api.Hallowmas + 'comments/' + toVideoId,
    method: 'get'
  })
}
// 用户关注列表接口
export function getFollowList () {
  return fetch({
    url: api.Hallowmas + 'user/followList',
    method: 'get'
  })
}
// 用户粉丝列表接口
export function getFansList () {
  return fetch({
    url: api.Hallowmas + 'user/fansList',
    method: 'get'
  })
}
// 个人主页+我的作品接口
export function getUserhome () {
  return fetch({
    url: api.Hallowmas + 'user/userhome',
    method: 'get'
  })
}
// 用户收藏列表接口
export function getCollections () {
  return fetch({
    url: api.Hallowmas + 'user/collections',
    method: 'get'
  })
}
// 他人主页接口
export function getOthers (userId) {
  return fetch({
    url: api.Hallowmas + 'user/' + userId,
    method: 'get'
  })
}
/**
 * 获取视频分类接口
 */
export function videoType () {
  return fetch({
    url: api.Hallowmas + 'video/allVideoType',
    method: 'get'
  })
}
/**
 * 获取视频分类的视频
 * @param {当前页数} Number
 * @param {一页显示条数}} Number
 * @param {视频类型} String
 */
export function getVideos (pageIndex, pageSize, videoType) {
  return fetch({
    url: api.Hallowmas + `videoType/${pageIndex}&&${pageSize}?videoType=${videoType}`,
    method: 'get'
  })
}
/**
 * 顶一下视频
 * @param {Number} videoId
 */
export function videoTop (videoId) {
  return fetch({
    url: api.Hallowmas + `video/top/${videoId}`,
    method: 'put'
  })
}

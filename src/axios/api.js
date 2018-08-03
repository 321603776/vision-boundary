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
// 有新接口的时候像上面那样再来一次
// //修改昵称接口
// export function userID(name){
//   return fetch({
//     url:api.myself_name,
//     method:"put",
//     data:{
//       nickname:name
//     }
//   })
// }
//
//
// //取消转发赞踩接口
// export function cancelForward(articleId,type){
//   return fetch({
//     url:api.detail_article+articleId+"/forwarded_impress",
//     method:"delete",
//     params:{
//       type:type
//     }
//   })
// }

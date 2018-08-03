import axios from 'axios' // 引入axios

export function fetch (options) {
  return new Promise((resolve, reject) => {
    getToken()
    let instance
    if (window.localStorage.getItem('token') === null) {
      instance = axios.create({ // instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
        // 所有的请求都会带上这些配置，比如全局都要用的身份信息等。
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30 * 1000 // 30秒超时
      })
    } else {
      instance = axios.create({ // instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
        // 所有的请求都会带上这些配置，比如全局都要用的身份信息等。
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token') // token从全局变量那里传过来
        },
        timeout: 30 * 1000 // 30秒超时
      })
    }
    instance(options)
      .then(response => { // then请求成功之后进行什么操作
        resolve(response.data) // 把请求到的数据发到引用请求的地方
      })
      .catch(error => {
        console.log('请求异常信息：' + error)
        reject(error)
      })
  })
}
// 当token30分钟失效时重新获取token值
function getToken () {
  let username = window.localStorage.getItem('username')
  let password = window.localStorage.getItem('password')
  if (new Date().getTime() - window.localStorage.getItem('tokenDate') >= 30 * 60 * 1000) {
    axios.post('http://www.haogedada.top/api/login?username=' + username + '&password=' + password).then(res => {
      window.localStorage.setItem('token', res.data.data)
      window.localStorage.setItem('tokenDate', new Date().getTime())
    }).catch(err => {
      console.log(err, '错误')
    })
  }
}

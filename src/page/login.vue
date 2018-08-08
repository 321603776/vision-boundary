-<template>
  <div>
    <head-title>
      <span slot="conter">登陆</span>
      <span slot="right" @click="$router.push('/forgetPassword')">忘记密码</span>
    </head-title>
    <div class="loginFrom">
      <el-input v-model="from.username" placeholder="用户名" clearable></el-input>
      <el-input v-model="from.password" placeholder="密码" clearable type="password"></el-input>
      <el-input v-model="from.verification" placeholder="验证码" clearable class="yanzm"></el-input>
      <div class="yanzmImg">
        <img :src="src"/>
      </div>
        <el-button type="success" @click="login">登陆</el-button><el-button @click="$router.push('/register')">注册</el-button>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
import {login} from './../axios/api.js'
import {Message} from 'element-ui'
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      from: {
        username: '',
        password: '',
        verification: ''
      },
      src: '../../static/image/123.png'
    }
  },
  methods: {
    login () {
      login(this.from.username, this.from.password).then(res => {
        if (res.msg === 'success') {
          Message({
            message: '登陆成功',
            type: 'success',
            center: true
          })
          const token = res.data
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('tokenDate', new Date().getTime())
          window.localStorage.setItem('username', this.from.username)
          window.localStorage.setItem('password', this.from.password)
          this.$router.push('/person')
        } else if (res.msg === 'Account number is not activated') {
          Message({
            message: '账号未被激活，请前往邮箱激活',
            center: true
          })
        } else if (res.code === 105) {
          Message({
            message: '账号或者密码错误',
            center: true
          })
        }
      }).catch(err => {
        console.log(err, '登陆失败')
        Message({
          message: '登陆失败',
          type: 'error',
          center: true
        })
      })
    }
  },
  beforeMount () {
    let redirect = this.$route.query.redirect
    if (redirect !== undefined) {
      Message({
        message: '请先登陆o(*￣▽￣*)o',
        type: 'error',
        center: true,
        duration: 1500
      })
    }
  }
}
</script>

<style scoped>
.loginFrom{
  margin: 0 auto;
  width: 12.7rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.loginFrom div{
  padding: 0.4rem 0;
}
.loginFrom button{
  width: 6.1rem;
}
.yanzm{
  width: 8rem;
}
.yanzmImg{
    width: 4.5rem;
    float: right;
    height: 40px;
}
.yanzmImg img{
  width: 100%;
  height: 100%;
}
</style>

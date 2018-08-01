-<template>
  <div>
    <head-title>
      <span slot="conter">注册</span>
    </head-title>
    <div class="registerFrom">
      <el-input v-model="registerFrom.username" placeholder="用户名" clearable @blur="ifname" :suffix-icon="nameIcon"></el-input>
      <el-input v-model="registerFrom.password" placeholder="密码" type="password"></el-input>
      <el-input v-model="registerFrom.confirmPassword" placeholder="确认密码" type="password" @blur="ifPassword" :suffix-icon="passwordIcon"></el-input>
      <el-input v-model="registerFrom.email" placeholder="邮箱" type="email" @blur="isEmail" :suffix-icon="emailIcon"></el-input>
      <el-input v-model="verification" placeholder="验证码" clearable></el-input>
      <div>
        <el-button type="success" @click="submit">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
import {isEmail, register, isname} from '../axios/api.js'
import {Message} from 'element-ui'
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      registerFrom: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      },
      verification: '',
      emailIcon: '',
      passwordIcon: '',
      nameIcon: ''
    }
  },
  methods: {
    isEmail () {
      this.emailIcon = 'el-icon-loading'
      isEmail(this.registerFrom.email).then(res => {
        if (res.msg === '邮箱不存在') {
          this.emailIcon = 'el-icon-circle-check'
        } else {
          this.emailIcon = 'el-icon-circle-close'
        }
      }).catch(err => {
        this.emailIcon = 'el-icon-circle-close'
        console.log(err, '请求失败')
      })
    },
    ifPassword () {
      if (this.registerFrom.password === this.registerFrom.confirmPassword) {
        this.passwordIcon = 'el-icon-circle-check'
      } else {
        this.passwordIcon = 'el-icon-circle-close'
      }
    },
    ifname () {
      this.nameIcon = 'el-icon-loading'
      isname(this.registerFrom.username).then(res => {
        if (res.msg === 'success') {
          this.nameIcon = 'el-icon-circle-check'
        } else {
          this.nameIcon = 'el-icon-circle-close'
        }
      }).catch(err => {
        this.nameIcon = 'el-icon-circle-close'
        console.log(err, '请求失败')
      })
    },
    submit () {
      if (this.emailIcon === 'el-icon-circle-check' && this.passwordIcon === 'el-icon-circle-check' && this.nameIcon === 'el-icon-circle-check') {
        register(this.registerFrom.username, this.registerFrom.password, this.registerFrom.email).then(res => {
          if (res.msg === 'success') {
            Message.success('恭喜,注册成功')
            this.$router.push('/login')
          }
        }).catch(err => {
          console.log(err, '注册失败')
        })
      }
    }
  }
}
</script>

<style scoped>
.registerFrom{
  margin: 0 auto;
  width: 12.7rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.registerFrom div{
  padding: 0.4rem 0;
}
</style>

-<template>
  <div>
    <head-title>
      <span slot="conter">注册</span>
    </head-title>
    <div class="registerFrom">
      <el-input v-model="registerFrom.username" placeholder="用户名" clearable></el-input>
      <el-input v-model="registerFrom.password" placeholder="密码" clearable type="password"></el-input>
      <el-input v-model="registerFrom.confirmPassword" placeholder="确认密码" clearable type="password"></el-input>
      <el-input v-model="registerFrom.email" placeholder="邮箱" clearable type="email"></el-input>
      <el-input v-model="registerFrom.verification" placeholder="验证码" clearable></el-input>
      <div>
        <el-button type="success">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
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
        email: '',
        verification: ''
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

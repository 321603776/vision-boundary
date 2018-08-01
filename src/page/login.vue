-<template>
  <div>
    <head-title>
      <span slot="conter">登陆</span>
      <span slot="right">忘记密码</span>
    </head-title>
    <div class="loginFrom">
      <el-input v-model="from.username" placeholder="用户名" clearable></el-input>
      <el-input v-model="from.password" placeholder="密码" clearable type="password"></el-input>
      <el-input v-model="from.verification" placeholder="验证码" clearable class="yanzm"></el-input>
      <div class="yanzmImg">
        <img :src="src"/>
      </div>
        <el-button type="success">登陆</el-button><el-button>注册</el-button>
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
      from: {
        username: '',
        password: '',
        verification: ''
      },
      src: '../../static/image/123.png'
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

<template>
  <div>
    <head-title>
      <span slot="conter">个人信息</span>
    </head-title>
    <div class="detailed">
      <el-row>
        <el-col :span="12">
          <span>头像</span>
        </el-col>
        <el-col :span="12">
          <img v-if="obj.data.headimgUrl === ''" src="/static/image/headImg.jpg" alt="">
          <img v-else :src="obj.data.headimgUrl" alt="">
        </el-col>
      </el-row>
            <el-row>
        <el-col :span="12">
          <span>昵称</span>
        </el-col>
        <el-col :span="12">
          <span v-if="isloading" alt="">{{obj.data.userNickname}}</span>
        </el-col>
      </el-row>
            <el-row>
        <el-col :span="12">
          <span>性别</span>
        </el-col>
        <el-col :span="12">
          <span v-if="isloading" alt="">{{obj.data.userSex}}</span>
        </el-col>
      </el-row>
            <el-row>
        <el-col :span="12">
          <span>生日</span>
        </el-col>
        <el-col :span="12">
          <span v-if="isloading" alt="">{{obj.data.userBirthday}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span>签名</span>
        </el-col>
        <el-col :span="12">
          <span v-if="isloading" alt="">{{obj.data.bardianSign}}</span>
        </el-col>
      </el-row>
      <el-button type="danger" @click="quit">退出登陆</el-button>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
import { getPersonMessge } from './../axios/api.js'
export default {
  components: {
    headTitle: title
  },
  data () {
    return {
      obj: {
        data: {
          headimgUrl: '/static/image/headImg.jpg'
        }
      },
      isloading: false
    }
  },
  methods: {
    quit () {
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('password')
      window.localStorage.removeItem('tokenDate')
      window.localStorage.removeItem('token')
      this.$router.push('/person')
    }
  },
  mounted () {
    getPersonMessge()
      .then(res => {
        this.obj = res
        this.isloading = true
        console.log(res.data.bardianSign)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.detailed{
  margin-top: 3rem;
}
.el-row{
  height: 2rem;
}
.el-row:after{
  content: '';
  display: block;
  border-bottom: 1px solid #999;
}
.el-row span{
  line-height: 2rem;
  text-align: center;
  display: block;
}
.el-row img{
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0.1rem auto;
  border-radius: 50%;
}
.el-button{
  display: block;
  width: 12rem;
  margin: 2rem auto;
}
</style>

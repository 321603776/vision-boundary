<template>
  <div>
    <head-title>
      <span slot="conter">粉丝</span>
    </head-title>
    <div class="input">
      <el-input @change="inputChange" placeholder="搜索" v-model="search" prefix-icon="el-icon-search"></el-input>
    </div>
    <div class="fensi">
      <ul v-if="fansListReady" v-for="item in FansList" :key="item.userId">
        <li>
          <div class="content">
            <div class="left">
              <img :src="item.headimgUrl" alt="">
            </div>
            <div class="right">
              <div class="name">
                <span>{{item.userName}}</span>
              </div>
              <div class="bardianSign">
                <span>{{item.bardianSign}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
import title from '@/components/common/title/title.vue'
import {getFansList} from './../axios/api.js'
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      FansList: Array,
      fansListReady: false,
      search: ''
    }
  },
  mounted () {
    getFansList().then(res => {
      this.FansList = res.data
      this.fansListReady = true
    }).catch(err => {
      console.log(err, '请求出错了')
    })
  },
  methods: {
    inputChange () {
      console.log(this.search)
    }
  }
}
</script>

<style scoped>
.input{
  margin: 0.5rem auto;
  width: 14rem;
}
.content{
  margin: 0 auto;
  width: 14rem;
}
.left{
  float: left;
  width: 2.2rem;
  height: 2.2rem;
  background-color: #999999;
  border-radius: 50%;
  overflow: hidden;
}
.left img{
  width: 100%;
  height: 100%;
}
.right{
  margin: 0 0 0 1rem;
  float: left;
  width: 10rem;
  height: 2.2rem;
}
.name{
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
}
.bardianSign{
  height: 0.7rem;
  line-height: 0.7rem;
}
li::after{
  clear: both;
  transform: scale(1,0.5);
  content: '';
  display: block;
  padding-top: 0.5rem;
  border-bottom: 1px solid #999999;
  width: 100%;
}
</style>

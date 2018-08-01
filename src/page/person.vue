-<template>
  <div>
    <div class="top" @scroll="backScroll">
      <div class="back">
        <i class="iconfont icon-back" @click="$router.go(-1)"></i>
      </div>
      <div class="imgBg">
        <img :src="fengmian" alt="">
      </div>
    </div>
    <div class="foot">
      <div class="actorImg">
        <router-link to="personmessge"><img :src="fengmian" alt=""></router-link>
      </div>
      <div class="footXiang">
        <span class="name">{{name}}</span>
        <br>
        <router-link to="fensi">
          <span class="fen">{{fens}}粉丝</span>
        </router-link>
        <router-link to="guanzhu">
          <span class="guan">{{guanz}}关注</span>
        </router-link>
      </div>
      <div class="footListVideo">
          <div class="fenlei" :class="xuanzp" @click="xuanzhezp">我的作品</div>
          <div class="fenlei" :class="xuansc" @click="xuanzhesc">我的收藏</div>
        <div class="line"></div>
        <div v-if="showzp" class="zhuoping">
          <ul>
            <li v-for="item in 5" :key="item.id">
              <div>{{item}}</div>
            </li>
          </ul>
        </div>
        <div v-else class="shouchang">

        </div>
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
      fengmian: '/static/image/d55fea002e7e079129717cb104edd5f6.jpg',
      name: '白菜',
      fens: '1w',
      guanz: '12',
      xuanzp: 'xuan',
      xuansc: '',
      showzp: true,
      showsc: false
    }
  },
  methods: {
    xuanzhezp () {
      this.xuanzp = 'xuan'
      this.xuansc = ''
      this.showzp = true
    },
    xuanzhesc () {
      this.xuanzp = ''
      this.xuansc = 'xuan'
      this.showzp = false
    },
    backScroll () {
      console.log('aaaa')
    }
  }
}
</script>

<style scoped>
.back{
  width: 16rem;
  position: fixed;
  color: #fff;
}
.iconfont{
  font-size: 1rem;
  line-height: 2rem;
  margin-left: 0.4rem;
}
.imgBg{
  width: 16rem;
  height: 11rem;
}
.imgBg img{
  width: 100%;
  height: 100%;
}
.actorImg{
  width: 4.5rem;
  height: 4.5rem;
  margin: -2.25rem auto auto 1rem;
}
.actorImg img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.footXiang{
  width: 9.8rem;
  float: right;
  font-size: 0.5rem;
  margin-top: -2.25rem;
}
.footXiang span{
  line-height: 0.9rem;
}
.name{
  font-size: 0.7rem;
}
.footListVideo{
  margin-top: 0.8rem;
  text-align: center;
}
.xuan:after{
  content: "";
  background-color: #999;
  margin-top: 5px;
  display: block;
  width: 8rem;
  height: 2px;
  clear: both;
}
.line{
  width: 16rem;
  border-top: 1px solid #999;
  clear: both;
}
.fenlei{
  width: 8rem;
  float: left;
}
.zhuoping,.shouchang{
  margin: 1rem;
}
.zhuoping ul,.shouchang ul{
  overflow: hidden;
}
.zhuoping div{
  margin: 1rem;
  width: 5rem;
  height: 8rem;
  background-color: #999;
  float: left;
}
</style>

-<template>
  <div class="main">
    <div class="top">
      <div class="back">
        <i class="iconfont icon-back" @click="$router.push('/home')"></i>
      </div>
      <div class="imgBg">
        <img :src="defaultBg" alt="">
      </div>
    </div>
    <div class="foot">
      <router-link to="personmessge">
      <div class="actorImg">
        <img v-if="homePrepare && Userhome.heardUrl != ''" :src="Userhome.heardUrl" alt="" onerror='this.src="/static/image/headImg.jpg"'>
        <img v-else :src="morenActor" alt="">
      </div>
      </router-link>
      <div class="footXiang">
        <span v-if="homePrepare" class="name">{{Userhome.nickName}}</span>
        <br>
        <router-link to="fensi">
          <span v-if="homePrepare" class="fen">{{Userhome.fansNum}}粉丝</span>
        </router-link>
        <router-link to="guanzhu">
          <span v-if="homePrepare" class="guan">{{Userhome.followNum}}关注</span>
        </router-link>
      </div>
      <div class="footListVideo">
          <div class="fenlei" :class="xuanzp" @click="xuanzhezp">我的作品</div>
          <div class="fenlei" :class="xuansc" @click="xuanzhesc">我的收藏</div>
        <div class="line"></div>
        <div v-if="showzp" class="zhuoping">
          <div class="zcontent">
             <ul>
              <li v-if="homePrepare" v-for="item in Userhome.videos" :key="item.videoId">
                <img :src="item.videoCoverUrl" alt="" onerror="this.src='./../../static/image/imgNotFound.png'">
                <span>{{item.videoTitle}}</span>
              </li>
            </ul>
          </div>

        </div>
        <div v-else class="shouchang">
           <div class="zcontent">
             <ul>
              <li v-if="collectionsPrepare" v-for="item in Collections" :key="item.videoId">
                <img :src="item.videoCoverUrl" alt="" onerror="this.src='./../../static/image/imgNotFound.png'">
                <span>{{item.videoTitle}}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
import {getUserhome, getCollections} from './../axios/api.js'
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      morenActor: '/static/image/headImg.jpg',
      defaultBg: '/static/image/default.png',
      xuanzp: 'xuan',
      xuansc: '',
      showzp: true,
      showsc: false,
      Userhome: Object,
      homePrepare: false,
      Collections: Object,
      collectionsPrepare: false
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
    appScroll () {
      let main = document.getElementsByClassName('main')[0]
      let scrollTop = main.scrollTop
      let backBox = document.getElementsByClassName('back')[0]
      let mountedHeight = document.getElementsByClassName('imgBg')[0].clientHeight
      backBox.style.background = 'rgba(153, 153, 153, ' + scrollTop / mountedHeight + ')'
    }
  },
  mounted () {
    let main = document.getElementsByClassName('main')[0]
    main.addEventListener('scroll', this.appScroll)
    getUserhome().then(res => {
      this.Userhome = res.data
      this.Userhome.videos.reverse()
      this.homePrepare = true
    }).catch(err => {
      console.log(err, '获取数据失败')
    })
    getCollections().then(res => {
      this.Collections = res.data
      this.collectionsPrepare = true
    }).catch(err => {
      console.log(err, '获取数据失败')
    })
  }
}
</script>

<style scoped>
.main{
  height: 100%;
  overflow-y: scroll;
}
.back{
  width: 16rem;
  position: fixed;
  color: #fff;
  background-color: rgb(153, 153, 153, 0);
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
  /* overflow: hidden; */
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
  background-color: #82848a;
  margin-top: 5px;
  display: block;
  width: 8rem;
  height: 2px;
  clear: both;
}
.line{
  width: 16rem;
  border-top: 1px solid #e4e4e4;
  clear: both;
}
.fenlei{
  width: 8rem;
  float: left;
}
.zhuoping{
  background-color: #dfdfdf;
  width: 100%;
}
.zcontent{
  padding: 0.5rem;
  overflow: hidden;
}
.zcontent li {
  float: left;
  margin: 0.2rem;
  width: 7.1rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 3px;
}
.zcontent img{
  width: 7.1rem;
  height: 4rem;
  border-radius: 3px;
}
.shouchang{
  background-color: #f7f7f7;
  width: 100%;
}
</style>

<template>
  <div class="main" v-loading="typeof(type) === 'function' && typeof(videos) === 'function'">
    <div class="nav-top">
      <span class="selected">视频</span>
      <span @click="$router.push('person')">个人</span>
    </div>
    <div class="nav">
      <div class="item" :class="{'selected': index === 0}" @click="selected(index, item.substr(0, item.length - 3))"
      v-for="(item, index) in type" :key="item.id">{{ item | filterSub }}</div>
    </div>
    <div class="content" v-loading="videos === null">
      <div class="content-video" v-for="(video, index) in videos" :key="video.id">
        <div class="videoBox">
          <video class="video" controls preload="auto" webkit-playsinline playsinline>
            <source :src="video.videoBean.videoUrl" type="video/mp4">
          </video>
          <div class="display">
            <div class="title">{{video.videoBean.videoTitle}}</div>
            <div class="cover">
              <img class="coverImg" :src="video.videoBean.videoCoverUrl || './../../static/image/imgNotFound.png'"
                onerror="this.src='./../../static/image/imgNotFound.png'" alt="">
              <i class="iconfont icon-bofang" @click="player(index)"></i>
            </div>
          </div>
        </div>
        <div class="massge">
          <div class="massge-ather">{{video.videoBean.userBean.userNickname}}</div>
          <i class="iconfont icon-jinrudaobo" @click="forwarding(index)"></i>
          <i class="iconfont icon-pinglun" @click="comment(index, video.videoBean.videoId)"><span>{{video.commentNum}}</span></i>
          <i class="iconfont icon-ding" @click="ding(video.videoBean.videoId, index)"><span>{{video.videoBean.videoTipNum}}</span></i>
        </div>
      </div>
      <div class="add" v-if="!(indexPage === tatolPage) && videos !== null" @click="add" v-loading="isAddLoading" element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading" element-loading-background="rgb(255, 255, 255)" element-loading-customClass="elAdd">点击获取更多</div>
      <div class="add" v-else-if="!(typeof(type) === 'function') && !(typeof(videos) === 'function') && videos !== null">已经到最底下了o(*￣▽￣*)o</div>
    </div>
    <div class="blur"></div>
    <div class="comment">
      <div class="combox"></div>
      <comment :commentList="commentList"></comment>
      <div class="icon">
        <i class="iconfont icon-guanbi guanbi"></i>
        <i class="iconfont icon-pinglun" @click="pinglun"></i>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '@/components/common/comment/comment.vue'
import {videoType, getVideos, getComment, videoTop} from './../axios/api.js'
export default {
  components: {
    'comment': comment
  },
  data () {
    return {
      type: Object,
      videos: Object,
      indexPage: Number,
      tatolPage: Number,
      currentType: String,
      isAddLoading: false,
      commentList: null
    }
  },
  methods: {
    selected (index, type) {
      this.videos = null
      let item = document.getElementsByClassName('item')[index]
      let items = document.getElementsByClassName('item')
      for (const item of items) {
        item.classList.remove('selected')
      }
      item.classList.add('selected')
      getVideos(0, 9, type).then(res => {
        this.videos = res.data.list
        this.indexPage = res.data.indexPage
        this.currentType = res.data.list[0].videoBean.videoType.split('|')[0]
      }).catch(err => {
        console.log(err, '请求视屏列表失败')
      })
    },
    player (index) {
      let video = document.getElementsByTagName('video')[index]
      let display = document.getElementsByClassName('display')[index]
      display.style.display = 'none'
      video.style.display = 'inline'
      video.play()
      video.addEventListener('ended', () => {
        display.style.display = 'inline'
        video.style.display = 'none'
      })
    },
    forwarding () {
      console.log('转发')
    },
    ding (videoId, index) {
      let massge = document.getElementsByClassName('massge')[index]
      let tip = massge.getElementsByClassName('icon-ding')[0]
      if (window.localStorage.getItem('token') === null) {
        this.$router.push('person')
      } else {
        videoTop(videoId).then(res => {
          this.videos[index].videoBean.videoTipNum++
          tip.style.color = '#409eff'
        }).catch(err => {
          console.log(err)
        })
      }
    },
    comment (index, videoId) {
      this.commentList = null
      getComment(videoId).then(res => {
        if (res.code === 200) {
          this.commentList = res.data
        }
      }).catch(err => {
        console.log(err, '获取评论失败')
      })
      let comment = document.getElementsByClassName('comment')[0]
      let blur = document.getElementsByClassName('blur')[0]
      let videoBox = document.getElementsByClassName('videoBox')[index]
      let guanbi = document.getElementsByClassName('guanbi')[0]
      videoBox.style.position = 'fixed'
      videoBox.style.zIndex = 6
      videoBox.style.top = 0
      videoBox.style.left = 0
      blur.style.display = 'inline'
      comment.style.display = 'inline'
      guanbi.addEventListener('click', function () {
        videoBox.style.position = 'relative'
        videoBox.style.zIndex = 'auto'
        blur.style.display = 'none'
        comment.style.display = 'none'
      })
    },
    pinglun () {
      console.log('评论')
    },
    add () {
      this.isAddLoading = true
      getVideos(this.indexPage + 1, 9, this.currentType).then(res => {
        this.videos = this.videos.concat(res.data.list)
        this.indexPage = this.indexPage + 1
        this.tatolPage = res.data.tatolPage
        this.currentType = res.data.list[0].videoBean.videoType.split('|')[0]
        this.isAddLoading = false
        console.log(this.indexPage, this.tatolPage)
      }).catch(err => {
        console.log(err, '请求下一页出错')
      })
    }
  },
  filters: {
    filterSub (val) {
      return val.substr(val.length - 2, 2)
    }
  },
  mounted () {
    videoType().then(res => {
      this.type = res.data.reverse()
    }).catch(err => {
      console.log(err, '请求视频类型出错')
    })

    getVideos(0, 9, 'hot').then(res => {
      this.videos = res.data.list
      this.indexPage = res.data.indexPage
      this.tatolPage = res.data.tatolPage
      this.currentType = res.data.list[0].videoBean.videoType.split('|')[0]
    }).catch(err => {
      console.log(err, '请求视频信息出错')
    })
  }
}
</script>

<style scoped>
.main{
  padding: 0 5px;
  height: 100%;
  overflow-y: scroll;
}
.nav{
  width: 100%;
  position: fixed;
  top: 1.5rem;
  overflow: hidden;
  height: 1rem;
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 3;
  background-color: #ffffff;
  padding: 5px 0;
}
.nav::-webkit-scrollbar{
  display: none;
}
.item{
  font-size: 0.65rem;
  padding: 0 0.3rem;
}
.selected{
  color: #409eff;
  /* border-bottom: 2px solid #409eff; */
}
.content{
  margin-top: 3.5rem;
  min-height: calc(100% - 3.1rem);

}
.content::-webkit-scrollbar{
  display: none;
}
.content-video{
  background-color: #eeeeee;
  margin-top: 1rem;
  height: 10.393rem;
}
.videoBox{
  position: relative;
  width: 100%;
  height: 8.993rem;
}
.videoBox .video{
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
.videoBox .display{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.display .title{
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem;
  background-color: rgba(0, 0, 0, 0.155);
  width: 96%;
  color: #ffffff;
  font-size: 0.66rem;
  z-index: 1;
}
.display .cover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cover img{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}
.cover i{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 3rem;
  color: #409eff;
}
.massge{
  padding: 0.2rem 0;
  height: 1rem;
  font-size: 0.6rem;
}
.massge:after{
  content: '';
  display: block;
  clear: both;
}
.massge-ather{
  float: left;
  line-height: 1rem;
}
.massge i{
  float: right;
  font-size: 1rem;
  line-height: 1rem;
  margin-right: 3px;
}
.massge i span{
  font-size: 0.6rem;
  display: inline-block;
  vertical-align: top;
}
.comment{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.555);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: none;
  overflow-y: scroll;
}
.blur{
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(224, 132, 10), #409eff);
  z-index: 3;
  /* filter: blur(10px); */
}
.icon{
  position: fixed;
  right: 0;
  bottom: 0;
  width: 3.5rem;
  height: 10rem;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
  word-spacing: 70px;
  line-height: 1.5rem;
}
.guanbi{
  font-size: 1rem;
}
.icon-pinglun{
  font-size: 1.4rem;
}
.fixed{
  position: fixed;
  height: auto;
  z-index: 6;
}
.combox{
  margin-top: 8.993rem;
}
.add{
  margin: 0.6rem 0;
  color: #409eff;
  text-align: center;
  font-size: 0.6rem;
}
.elAdd{
  font-size: 0.6rem;
}
.nav-top{
  position: fixed;
  background-color: #ffffff;
  z-index: 3;
  font-size: 0.8rem;
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
}
</style>

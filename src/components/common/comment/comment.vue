<template>
  <div class="commentBox" v-loading="commentList === null" element-loading-background="rgba(255, 255, 255, 0)">
    <div class="total" v-for="item in commentList" :key="item.id">
      <div class="firstClass">
        <div class="msg">
          <div class="head">
            <img :src="item.comment.userBean.headimgUrl" alt="">
          </div>
          <div class="nt">
            <div class="name">{{item.comment.userBean.bardianSign}}</div>
            <div class="time">{{item.comment.txtCreatTime | filterTime}}</div>
          </div>
        </div>
        <div class="content">{{item.comment.txtContext}}</div>
        <div class="icon">
          <i class="iconfont icon-ding">{{item.comment.commentatorTipNum}}</i>
          <i class="iconfont icon-cai">{{item.comment.commentatorTrampleNum}}</i>
          <i class="iconfont icon-pinglun">{{item.comments.length}}</i>
        </div>
      </div>
      <div v-for="item2 in item.comments" :key="item2.id">
        <div class="secondClass">
          <div class="msg">
            <div class="head">
              <img :src="item2.userBean.headimgUrl" alt="">
            </div>
            <div class="nt">
              <div class="name">{{item2.userBean.bardianSign}}</div>
              <div class="time">{{item2.txtCreatTime | filterTime}}</div>
            </div>
          </div>
          <div class="content">{{item2.txtContext}}</div>
          <div class="icon">
            <i class="iconfont icon-ding">{{item2.commentatorTipNum}}</i>
            <i class="iconfont icon-cai">{{item2.commentatorTrampleNum}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    commentList: {
      type: Array
    }
  },
  filters: {
    filterTime: function (value) {
      let times = value.split('-')
      let year = times[0].substr(2, 3)
      let month = times[1]
      let day = times[2].substr(0, 2)
      return `${year}-${month}-${day}`
    }
  }
}
</script>

<style scoped>
.commentBox{
  min-height: calc(100% - 8.993rem)
}
.total{
  padding: 1rem 10px 0 10px;
  font-size: 0.65rem;
  color: #ffffff;
}
.msg:after{
  content: '';
  display: block;
  clear: both;
}
.head,.nt{
  float: left;
}
.head{
  width: 1.7rem;
  height: 1.7rem;
  background-color: rgb(100, 100, 100);
  border-radius: 50%;
  overflow: hidden;
}
.head img{
  width: 100%;
  height: 100%;
}
.nt{
  margin-left: 0.5rem;
  margin-top: 0.15rem;
}
.name{
  font-weight: 800
}
.time{
  font-size: 0.5rem;
}
.content{
  margin: 0.7rem auto auto 2.3rem;
}
.icon{
  margin: 0.5rem auto auto 2.3rem;
}
.icon i{
  margin-right: 0.3rem;
}
.secondClass{
  margin: 0.7rem auto auto 2.3rem;
}
.iconfont{
  font-size: 0.8rem;
}
</style>

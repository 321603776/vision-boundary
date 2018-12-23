<template>
  <div class="others">
    <div class="othersBg">
      <img src="" alt="">
    </div>
    <div class="content">
      <div class="userMsg">
        <div class="userOne">
          <div class="leftMsg">
            <span class="fensi">{{userMsg.fansNum}}</span>
            <span>粉丝</span>
          </div>
          <div class="centerMsg">
            <div class="headBox">
              <img :src="userMsg.heardUrl" alt="">
            </div>
          </div>
          <div class="rightMsg">
            <span class="guanzhu">{{userMsg.followNum}}</span>
            <span>关注</span>
          </div>
        </div>
        <div class="userTwo">
          <div class="nickName">
            {{userMsg.nickName}}
          </div>
        </div>
        <div class="userThree">
        </div>
      </div>
      <div class="production">
        <p>作品</p>
        <div class="line"></div>
        <div class="videoBox">
          <ul>
            <li>
              <div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getOthers} from './../axios/api.js'
export default {
  data () {
    return {
      userMsg: Object
    }
  },
  mounted () {
    getOthers(1).then(res => {
      this.userMsg = res.data
      console.log(this.userMsg)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.content span{
  font-size: 0.65rem;
  line-height: 2.4rem;
}
.othersBg{
  width: 100%;
  height: 11rem;
  background-color: #575757;
}
.userMsg{
  width: 100%;
  text-align: center;
  position: relative;
}
.leftMsg{
  float: left;
  width: 5.6rem;
}
.centerMsg{
  float: left;
  width: 4.8rem;
  height: 4.8rem;
}
.headBox{
  width: 100%;
  height: 100%;
  background-color: #4caf5a;
  border-radius: 50%;
  margin-top: -2.4rem;
}
.rightMsg{
  float: left;
  width: 5.6rem;
}
.userOne:after{
  content: '';
  display: block;
  clear: both;
}
.userTwo{
  position: absolute;
  top: 3rem;
  width: 100%;
}
.production p{
  text-align: center;
  font-size: 0.8rem;
}
.line{
  width: 100%;
  height: 2px;
  background-color: #000000;
}
</style>

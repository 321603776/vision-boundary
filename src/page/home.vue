-<template>
  <div class="main"
       v-tap="tap"
       v-swipeleft="swipeleft"
       v-swiperight="swiperight"
       v-press="press"
       v-bothleft="bothleft"
       v-bothright="bothright">
    <div class="one"></div>
    <div class="two" v-tap="tap">
      <video :src="videoUrl" autoplay></video>
    </div>
    <div class="three"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoUrl: '/static/video/trailer.mp4'
    }
  },
  methods: {
    tap (s, e) {
      alert('点击')
      console.log('触摸点击')
    },
    swipeleft (s, e) {
      console.log('单指左滑')
      this.$router.push('/person')
    },
    swiperight (s, e) {
      console.log('单指右滑')
      this.$router.push('/shoot')
    },
    press (s, e) {
      console.log('press事件')
    },
    bothleft (s, e) {
      this.$router.push('/person')
    },
    bothright (s, e) {
      this.$router.push('/shoot')
    }
  }
}
</script>

<style scoped>
.main{
  height: 100%;
}
.one{
  position: absolute;
  top:  0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.two{
  z-index: 2;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.two video{
  width: 100%;
}
.three{
  z-index: 3;
}
</style>

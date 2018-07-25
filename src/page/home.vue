-<template>
  <div v-tap="tap"
       v-swipeleft="swipeleft"
       v-swiperight="swiperight"
       v-press="press">
    <div class="one"></div>
    <div class="two">
      <video :src="videoUrl"></video>
    </div>
    <div class="three"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoUrl: ''
    }
  },
  methods: {
    tap (s, e) {
      console.log('触摸点击')
    },
    swipeleft (s, e) {
      this.$router.push('/person')
    },
    swiperight (s, e) {
      this.$router.push('/shoot')
    },
    press (s, e) {
      console.log('press事件')
    }
  }
}
</script>

<style scoped>
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
}
.two video{
  width: 100%;
  height: 12rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.three{
  z-index: 3;
}
</style>

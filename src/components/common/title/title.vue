<template>
  <div class="title">
    <el-row>
      <el-col :span="6">
        <i class="iconfont icon-back" @click="$router.go(-1)"></i>
      </el-col>
      <el-col :span="12">
        <div class="centre">
          <slot name="conter"></slot>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="right">
          <slot name="right"></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backColor: ''
    }
  }
}
</script>

<style scoped>
.title{
  background-color: #444444;
  width: 16rem;
  height: 2rem;
  color: #fff;
  font-size: .8rem;
}
.iconfont{
  font-size: 1rem;
  line-height: 2rem;
  margin-left: 0.4rem;
}
.centre{
  line-height: 2rem;
  display: table;
  margin: 0 auto;
}
.right{
  line-height: 2rem;
  display: table;
  margin: 0 auto;
  margin-right: 0.4rem;
}
</style>

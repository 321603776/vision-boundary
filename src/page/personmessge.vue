<template>
  <div>
    <head-title>
      <span slot="conter">个人信息</span>
    </head-title>
    <div>
    </div>
  </div>
</template>

<script>
import title from '@/components/common/title/title.vue'
import {getPersonMessge} from './../axios/api.js'
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      data: 'vaterUrl'
    }
  },
  mounted: () => {
    getPersonMessge().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>

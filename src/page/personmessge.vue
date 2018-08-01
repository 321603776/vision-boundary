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
export default {
  components: {
    'headTitle': title
  },
  data () {
    return {
      data: 'vaterUrl'
    }
  }
}
</script>

<style scoped>

</style>

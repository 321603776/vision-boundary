<template>
  <div>
    <head-title>
      <span slot="conter">粉丝</span>
    </head-title>
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
      key: 'value'
    }
  }
}
</script>

<style scoped>

</style>

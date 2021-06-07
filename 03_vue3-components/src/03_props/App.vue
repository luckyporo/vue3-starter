<template>
  <div>
    <show :title="title" :content="content" class="red-text"></show>
    <show :="message"></show>
  </div>
</template>
<script>
import Show from './Show.vue'
export default {
  components: {
    Show,
  },
  data() {
    return {
      title: '我是标题',
      content: '我是内容',
      message: {
        title: '我也是标题',
        content: '我也是内容',
        class: 'blue-text',
      }
    }
  }
}
</script>
<style scoped>
  
</style>
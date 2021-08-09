<template>
  <div>
    <h2>Hello World</h2>
  </div>
</template>
<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('Hello Mounted')
    })

    onUpdated(() => {
      console.log('Hello Updated')
    })

    onUnmounted(() => {
      console.log('Hello Unmounted')
    })
  }
}
</script>
<style>
  
</style>
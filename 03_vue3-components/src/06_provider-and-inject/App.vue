<template>
  <div>
    <home></home>
  </div>
</template>
<script>
import Home from './Home.vue'

export default {
  components: {
    Home,
  },
  provide() {
    return {
      name: 'luckyporo',
      age: 25
    }
  }
}
</script>
<style scoped>
  
</style>
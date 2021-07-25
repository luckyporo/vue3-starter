<template>
  <div>
    Hello Home
  </div>
</template>
<script>
import BasePage from './BasePage.vue'
export default {
  extends: BasePage,
  data() {
    return {
      message: 'home'
    }
  },
  created() {
    console.log('hello home')
  }
} 
</script>
<style>
  
</style>
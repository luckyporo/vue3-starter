<template>
  <div>
    <h2>About</h2>
  </div>
</template>
<script>
import emitter from './utils/eventbus';
export default {
  created() {
    emitter.on('HomeContentBtnClick', (event) => console.log(event));
  }
}
</script>
<style scoped>
  
</style>
<template>
  <div>
    <button @click='btnClick'>click</button>
  </div>
</template>
<script>
import emitter from './utils/eventbus'
export default {
  methods: {
    btnClick() {
      console.log('HomeContent点击了');
      emitter.emit('HomeContentBtnClick', {
        name: 'luckyporo',
        age: 25
      })
    }
  }
}
</script>
<style scoped>
  
</style>
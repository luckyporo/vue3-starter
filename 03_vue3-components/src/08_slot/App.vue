<template>
  <div>
    <my-slot>
      <button>slot按钮</button>
      <span>slotspan</span>
      <p>slot段落</p>
    </my-slot>
  </div>
</template>
<script>
import MySlot from './MySlot.vue'

export default {
  components: {
    MySlot,  
  }
}
</script>
<style scoped>
  
</style>
<template>
  <div>
    <button @click="increment">{{ counter }}</button>
    <br>
    <hello v-if="show" />
    <br>
    <button @click="showCopn">销毁/挂载子组件</button>
  </div>
</template>
<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
import Hello from './Hello.vue'

export default {
  components: {
    Hello
  },
  setup() {
    const counter = ref(0);
    const show = ref(true);

    const increment = () => {
      counter.value++;
    }

    const showCopn = () => {
      show.value = !show.value;
    }

    onMounted(() => {
      console.log('App Mounted')
    })

    onUpdated(() => {
      console.log('App Updated')
    })

    onUnmounted(() => {
      console.log('App Unmounted')
    })

    return {
      counter,
      increment,
      show,
      showCopn
    }
  }
}
</script>
<style>
  
</style>
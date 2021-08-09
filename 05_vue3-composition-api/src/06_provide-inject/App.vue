<template>
  <div>
    <home />
    <button @click="increment">+1</button>
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import Home from './Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    const name = 'lucyporo';
    const counter = ref(100);

    const increment = () => {
      counter.value++
    }

    provide('name', name)
    provide('counter', counter)

    return {
      increment
    }
  }
}
</script>
<style>
  
</style>
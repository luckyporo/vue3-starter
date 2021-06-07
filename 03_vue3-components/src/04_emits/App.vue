<template>
  <div>
    <h2>{{ counter }}</h2>
    <counter-option @add="addOne" @sub="subOne" @addN="addN"></counter-option>
  </div>
</template>
<script>
import CounterOption from './CouterOption.vue'

export default {
  components: {
    CounterOption,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addOne() {
      this.counter++;
    },
    subOne() {
      this.counter--;
    },
    addN(num) {
      this.counter += num;
    }
  }
}
</script>
<style scoped>
  
</style>
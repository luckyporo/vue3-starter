<template>
  <div>
    Home Page
    {{ message }}
    <div>
      {{ state.counter }}
      {{ anotherCounter }}
      <button @click="increment">+1</button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRef } from 'vue'

export default {
  props: {
    message: {
      type: String,
      require: true,
    }
  },
  setup(props, context) {
    console.log(props)
    console.log(context.attrs)
    context.emit('greet', 'hi')

    const state = reactive({
      counter: 0
    })

    let counter = toRef(state, 'counter')

    let anotherCounter = ref(10)

    const increment = () => {
      counter.value++
      anotherCounter.value++
    }

    return {
      state,
      anotherCounter,
      increment
    }
  }
}
</script>
<style>
  
</style>
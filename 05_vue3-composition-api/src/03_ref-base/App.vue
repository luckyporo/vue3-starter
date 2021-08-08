<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeAge">修改age</button>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import debonceRef from './hook/useDebounceRef'

export default {
  setup() {
    const info = reactive({
      name: 'luckyporo',
      age: 18,
    })

    const message = debonceRef('hello world')

    const { name, age } = toRefs(info)

    const changeAge = () => {
      info.age++
    }

    return {
      name,
      age,
      message,
      changeAge
    }
  }
}
</script>
<style>
  
</style>
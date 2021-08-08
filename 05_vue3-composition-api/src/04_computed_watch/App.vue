<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">changeName</button>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">changeMessage</button>
    <h2>{{ age }}</h2>
    <button @click="changeAge">changeAge</button>
  </div>
</template>
<script>
import { ref, computed, watchEffect, watch } from 'vue'

export default {
  setup() {
    const firstName = ref('lucky')
    const lastName = ref('poro')
    const message = ref('hello world');
    const age = ref(18);

    const fullName = computed(() => firstName.value + lastName.value)

    const changeName = () => {
      firstName.value = 'zhang'
      lastName.value = 'san'
    }

    const changeMessage = () => {
      message.value = Math.floor(Math.random() * 100)
    }

    const changeAge = () => {
      age.value = Math.floor(Math.random() * 30)
    }

    watchEffect(() => {
      console.log('message:', message.value);
    })

    watch(age, (newVal, oldVal) => {
      console.log(`newVal: ${newVal}, oldVal: ${oldVal}`)
    })

    return {
      fullName,
      changeName,
      message,
      changeMessage,
      age,
      changeAge
    }
  }

};
</script>
<style >
</style>
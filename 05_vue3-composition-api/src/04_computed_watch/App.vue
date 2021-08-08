<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">changeName</button>
  </div>
</template>
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const firstName = ref('lucky')
    const lastName = ref('poro')

    const fullName = computed(() => firstName.value + lastName.value)

    const changeName = () => {
      firstName.value = 'zhang'
      lastName.value = 'san'
    }

    return {
      fullName,
      changeName
    }
  }

};
</script>
<style >
</style>
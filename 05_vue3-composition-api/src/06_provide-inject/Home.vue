<template>
  <div>
    {{ name }} {{ counter }}
  </div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    const name = inject('name')
    const counter = inject('counter')

    return {
      name,
      counter
    }
  }
}
</script>
<style>
  
</style>
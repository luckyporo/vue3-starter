<template>
  <div>
    {{ title }}
    {{ message }}
    <button @click="foo">foo</button>
  </div>
</template>
<script>
import { Demo } from './mixins/demo'
export default {
  mixins: [Demo],
  data() {
    return {
      title: 'hello world'
    }
  }
}
</script>
<style>
  
</style>
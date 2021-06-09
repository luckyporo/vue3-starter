<template>
  <div>
    <h2>{{age}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>
<script>
export default {
  inject: ['name', 'age']
}
</script>
<style scoped>
  
</style>
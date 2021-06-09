<template>
  <div>
    <show :names="names">
      <template #="{ item, index }">
        <span>{{ item }} - {{index}}</span>
      </template>
    </show>
  </div>
</template>
<script>
import Show from './Show.vue';
export default {
  components: { Show },
  data() {
    return {
      names: ['brad', 'lucky', 'poro', 'luckyporo']
    }
  }
}
</script>
<style scoped>
  
</style>
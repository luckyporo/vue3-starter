<template>
  <div>
    <nav-bar :slotName="slotName">
      <template #left>
        <p>我是左边</p>
      </template>
      <template #center>
        我是中间
      </template>
      <template #right>
        <button>我是右边</button>
      </template>
      <template #[slotName]>
        <p>我是自定义</p>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      slotName: 'luckyporo'
    }
  }
};
</script>
<style scoped>
</style>
<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <div class="addition"><slot :name="slotName"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    slotName: String,
  }
};
</script>
<style scoped>
.nav {
  height: 100px;
  display: flex;
}

.left .right .addition{
  width: 100px;
}

.center {
  flex: 1;
  text-align: center;
}
</style>
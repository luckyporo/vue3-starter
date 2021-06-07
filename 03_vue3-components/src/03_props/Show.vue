<template>
  <div>
    <h2 :="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  inheritAttrs: false,
};
</script>
<style scoped>
.red-text {
  color: red;
}
.blue-text {
  color: blue;
}
</style>
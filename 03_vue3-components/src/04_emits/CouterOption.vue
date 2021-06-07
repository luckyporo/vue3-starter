<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <br />
    <input type="text" v-model.number="num" />
    <button @click="incrementN">增加</button>
  </div>
</template>
<script>
export default {
  emits: ["add", "sub", 'addN'],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      console.log("+1");
      this.$emit("add");
    },
    decrement() {
      console.log(-1);
      this.$emit("sub");
    },
    incrementN() {
      this.$emit('addN', this.num)
    }
  },
};
</script>
<style scoped>
</style>
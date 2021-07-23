<template>
  <div>
    <button v-for="item in items" :key="item" @click="btnClick(item)">
      {{ item }}
    </button>
    <component :is='currentTab'></component>
  </div>
</template>
<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Profile from './pages/Profile.vue'

export default {
  components: { Home, About, Profile },
  data() {
    return {
      items: ['home', 'about', 'profile'],
      currentTab: 'home'
    }
  },
  methods: {
    btnClick(tab) {
      this.currentTab = tab
    }
  },
}
</script>
<style scoped>
  
</style>
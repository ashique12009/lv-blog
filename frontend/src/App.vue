<template>
  <div>
    <navbar-menu />
    <img alt="Vue logo" src="./assets/logo.png">
    <welcome-page />
  </div>
</template>

<script>
import NavbarMenu from './views/NavbarMenu.vue';
import WelcomePage from '@/views/guest/WelcomePage.vue'

export default {
  name: 'App',
  components: {
    WelcomePage, 
    NavbarMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
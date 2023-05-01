<template>
  <div>
    <navbar-menu />
    <router-view />
  </div>
</template>

<script>
import NavbarMenu from './views/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
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
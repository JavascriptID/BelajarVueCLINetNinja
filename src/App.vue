<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Dibawah sini adalah isi Router View</p>
    <router-view></router-view>
    <!-- <list-makanan></list-makanan> -->
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

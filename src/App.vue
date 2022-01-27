<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <header-component></header-component>

      <sidebar-component></sidebar-component>
      <router-view> </router-view>

      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
/* include Global CSS */
/* @import "../../css/style.css"; */

*/ #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*body {*/
  /*  margin: 0;*/
  /*  auto: 0;*/
  /*}*/
  * {
      margin: 0;
      auto: 0;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body{
    width: 100%;
    height: 100%;
    /*background: url(assets/background.png) no-repeat center 0*/
  }
</style>

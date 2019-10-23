<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: "app"
  }
</script>

<style lang="scss">
  #app {
    margin-top: 80px;
    width: 100%;
    height: 100%;
  }
</style>
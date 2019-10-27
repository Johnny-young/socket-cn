<template>
  <ul class="menu">
    <menuitem v-for="item in data" :key="item.name">
      <h2>{{item.name}}</h2>
      <menu v-if="item.children && item.children.length" :data="item.children"></menu>
    </menuitem>
  </ul>
</template>

<script lang="ts">
  import menuItem from "./menuItem"
import func from '../../../vue-temp/vue-editor-bridge'
  export default {
    name: "Menu",
    props: ["data"],
    components: {
      "menuitem": menuItem
    },
    data() {
      return {
        
      }
    },
    methods: {
      buildMenu: function() {

      }
    },
    created: function() {
      
    },
    mounted: function() {
      
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    top: 80px;
    left: 0;
    height: 100%;
    padding: 0 20px 20px 60px;
    width: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
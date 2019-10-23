<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu.name" :href="'#' + menu.path">{{menu.name}}</a>
  </div>
</template>

<script lang="ts">
  export default {
    name: "menu",
    data: function() {
      return {
        menus: [
          {
            path: "Introduction",
            name: "Introduction"
          },
          {
            path: "The-web-framework",
            name: "The web framework"
          },
          {
            path: "Serving-HTML",
            name: "Serving HTML"
          },
          {
            path: "Integrating-Socket.IO",
            name: "Integrating Socket.IO"
          },
          {
            path: "Emmitting-events",
            name: "Emmitting events"
          },
          {
            path: "Broadcasting",
            name: "Broadcasting"
          },
          {
            path: "Homework",
            name: "Homework"
          },
          {
            path: "Getting-this-example",
            name: "Getting this example"
          }
        ]
      }
    },
    methods: {
      handleClick: function(name) {
        this.$router.push({
          path: "#" + name
        })
      }
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

    a {
      display: block;
      line-height: 26px;
      color: #9b9b9b;
      font-size: 12px;
    }
  }
</style>
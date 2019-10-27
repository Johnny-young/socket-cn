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
            name: "介绍"
          },
          {
            path: "The-web-framework",
            name: "web框架"
          },
          {
            path: "Serving-HTML",
            name: "发送HTML页面"
          },
          {
            path: "Integrating-Socket.IO",
            name: "整合Socket.IO"
          },
          {
            path: "Emitting-events",
            name: "触发事件"
          },
          {
            path: "Broadcasting",
            name: "广播"
          },
          {
            path: "Homework",
            name: "家庭作业"
          },
          {
            path: "Getting-this-example",
            name: "获取这个案例"
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
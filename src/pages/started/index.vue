<template>
  <div class="started">
    <my-header></my-header>
    <h2>开始你的冒险之旅</h2>
    <router-link class="app-link" to="/get-started/chat/">写一个聊天室应用</router-link>
    <p>起步学习Socket.IO或Node.js。'Hello world'基于这些框架</p>
    <div class="edit-tip">发现错误？在<a href="https://github.com/socketio/socket.io-website/blob/master/source/get-started/index.md">Github</a>页编辑</div>
  </div>
</template>

<script lang="ts">
  import header from "@/src/components/header"
  export default {
    name: "started",
    components: {
      "my-header": header
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .started {
    margin: 0 auto;
    width: 800px;
    color: #555;
    h2 {
      margin: 20px 0;
    }

    .app-link {
      display: block;
      margin: 16px 0;
      padding-left: 20px;
      text-decoration: underline;
    }
    p {
      margin: 16px 0;
    }
    .edit-tip {
      margin: 60px 0 30px;
    }
  }
</style>
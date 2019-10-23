<template>
  <div class="chat">
    <my-header></my-header>
    <my-menu></my-menu>
    <div class="content">
      chat
    </div>
  </div>
</template>

<script lang="ts">
  import header from '@/src/components/header'
  import menu from "@/src/components/menu"

  export default {
    name: "chat",
    components: {
      'my-header': header,
      "my-menu": menu
    }
  }
</script>

<style lang="scss" scoped>
  .chat {
    margin-left: 320px;
  }
</style>
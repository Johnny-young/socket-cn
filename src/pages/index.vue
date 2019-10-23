

<template>
  <div class="index">
    <my-head />
    <div class="title">
      <p>Socket.IO 能够实时、双向、基于事件通信</p>
      <p>它可以在每个平台、浏览器、或者其他设备上工作，关注与可靠性和速度</p>
    </div>
    <div class="features">
      <div class="features-item">
        <h2>实时分析</h2>
        <p>将实时的计算、图表、日志推送到客户端上</p>
      </div>
      <div class="features-item">
        <h2>即时通信和聊天</h2>
        <p>Socket.IO的‘Hello world’ 案例就是一个聊天室，仅使用了少许代码</p>
      </div>
      <div class="features-item">
        <h2>二进制流</h2>
        <p>从1.0开始，就可以发送blob数据，以及image,audio,video</p>
      </div>
      <div class="features-item">
        <h2>文档合作</h2>
        <p>允许用户同时编辑文档，并且可以看见其他人的修改</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import header from "../components/header.vue";

export default {
  name: "index",
  components: {
    "my-head": header
  },
  data() {
    return {
      header: "head"
    };
  }
};
</script>

<style lang="scss" scoped>
.index {
  margin: 0 auto;
  width: 800px;
  
  .title {
    color: #555;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .features {
    margin-top: 60px;

    .features-item {
      display: inline-block;
      margin-bottom: 30px;
      width: 49%;
      text-align: left;
      vertical-align: top;

      h2 {
        font-size: 18px;
        font-weight: normal;
        color: #000;
      }
      p {
        margin: 10px 0;
      }
    }
  }
}
</style>
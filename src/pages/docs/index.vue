<template>
  <div class="docs">
    <my-header></my-header>
    <div class="menu-wrapper">
      <my-menu :data="menuData"></my-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import mymenu from "./menu";
import header from "@/src/components/header";

export default {
  name: "docs",
  components: {
    "my-menu": mymenu,
    "my-header": header
  },
  data: function() {
    return {
      menuData: [
          {
            key: "Overview",
            path: "",
            name: "概述",
            level: 1,
            children: [
              {
                key: "What Socket.IO is",
                path: "What-Socket.IO-is",
                name: "Socket.IO是什么",
                level: 2
              },
              {
                key: "What Socket.IO is not",
                path: "What-Socket.IO-is-not",
                name: "Socket.IO不是什么",
                level: 2
              },
              {
                key: "Installing",
                path: "Installing",
                name: "安装",
                level: 2
              },
              {
                key: "Using with Node http server",
                path: "Using-with-Node-http-server",
                name: "使用Node的http服务器",
                level: 2
              },
              {
                key: "Using with Express",
                path: "Using-with-Express",
                name: "使用Express",
                level: 2
              },
              {
                key: "Sending and receiving events",
                path: "Sending-and-receiving-events",
                name: "发送和接手事件",
                level: 2
              },
              {
                key: "Restricting yourself to a namespace",
                path: "Restricting-yourself-to-a-namspace",
                name: "使用命名空间作为限制",
                level: 2
              },
              {
                key: "Sending volatile messages",
                path: "Sending-volatile-messages",
                name: "发送经常变化的信息",
                level: 2
              },
              {
                key: "Sending and getting data",
                path: "Sending-and-getting-data",
                name: "发送和接手数据",
                level: 2
              },
              {
                key: "Broadcasting messages",
                path: "Broadcasting-messages",
                name: "广播信息",
                level: 2
              },
              {
                key: "Using it just as cross-browser WebSocket",
                path: "Using-it-just-as-cross-browser-WebSocket",
                name: "仅仅作为跨浏览器的WebSockey使用",
                level: 2
              }
            ]
          },
          {
            key: "Rooms and Namespaces",
            path: "Rooms-and-Namespaces",
            name: "房间和命名空间",
            level: 1,
            children: [
              {
                key: "Namespaces",
                path: "Namespaces",
                name: "命名空间",
                level: 2,
                children: [
                  {
                    key: "Default namespaces",
                    path: "Default-namespaces",
                    name: "默认的命名空间",
                    level: 3
                  },
                  {
                    key: "Custom namespaces",
                    path: 'Custom-namespaces',
                    name: "自定义的命名空间",
                    level: 3
                  }
                ]
              },
              {
                key: "Rooms",
                path: "Rooms",
                name: "房间",
                level: 2,
                children: [
                  {
                    key: "Joining and leaving",
                    path: 'Joining-and-leaving',
                    name: "加入和离开",
                    level: 3
                  },
                  {
                    key: "Default room",
                    path: "Defaul-room",
                    name: "默认的房间",
                    level: 3
                  },
                  {
                    key: "Disconnection",
                    path: "Disconnection",
                    name: "断开连接",
                    level: 3
                  }
                ]
              },
              {
                key: "Sending messages from the outside-world",
                path: "Sending-messages-from-the-outside-world",
                name: "从外部发送信息",
                level: 2
              }
            ]
          },
          {
            key: "Migrating from 0.9",
            path: "Migrating-from-0.9",
            name: "从0.9版本迁移",
            level: 1,
            children: [
              {
                key: "Authentication differences",
                path: "Authentication-differences",
                name: "授权的不同",
                level: 2
              },
              {
                key: "Log differences",
                path: "Log-differences",
                name: "日志的不同",
                level: 2
              },
              {
                key: "Configuration differences",
                path: "Configuration-differences",
                name: "配置的不同",
                level: 2
              },
              {
                key: "Parser/Protocal differences",
                path: "Parser/Protocal-differences",
                name: "解析/协议的不同",
                level: 2
              }
            ]
          },
          {
            key: "Using multiple nodes",
            path: "Using-multiple-nodes",
            name: "使用多个节点",
            level: 1,
            children: [
              {
                key: "Sticky load balancing",
                path: "Sticky-load-balancing",
                name: "粘性负载均衡",
                level: 2
              },
              {
                key: "Nginx configuration",
                path: "Nginx-configuration",
                name: "Nginx的配置",
                level: 2
              },
              {
                key: "Apache HTTPD configuration",
                path: "Apache-HTTPD-configuration",
                name: "Apache HTTPD的配置",
                level: 2
              },
              {
                key: "HAProxy configuration",
                path: "HAProxy-configuration",
                name: "HAProxy的配置",
                level: 2
              },
              {
                key: "Using Node.JS Cluster",
                path: "Using-Node.JS-Cluster",
                name: "使用nodejs集群",
                level: 2
              },
              {
                key: "Passing events between nodes",
                path: "Passing-events-between-nodes",
                name: "在节点间传递事件",
                level: 2
              }
            ]
          },
          {
            key: "Logging and debugging",
            path: "Logging-and-debugging",
            name: "日志和调试",
            level: 1,
            children: [
              {
                key: "Available debugging scopes",
                path: "Available-debugging-scopes",
                name: '可用的调试技巧',
                level: 2
              }
            ]
          },
          {
            key: "Emit cheatsheet",
            path: "Emit-cheatsheet",
            name: "发送备忘单",
            level: 1,
          },
          {
            key: "Internals overview",
            path: "Intervals-overview",
            name: "内部概览",
            level: 1,
            children: [
              {
                key: "Dependency graph",
                path: "Dependency-graph",
                name: "依赖图",
                level: 2,
                children: [
                  {
                    key: "engine.io-parser",
                    path: "engine.io-parser",
                    name: "engine.io-parser",
                    level: 3
                  },
                  {
                    key: "engine.io",
                    path: "engine.io",
                    name: "engine.io",
                    level: 3
                  },
                  {
                    key: "engine.io-client",
                    path: "engine.io-client",
                    name: "engine.io-client",
                    level: 3
                  },
                  {
                    key: "socket.io-adapter",
                    path: "socket.io-adapter",
                    name: "socket.io-adapter",
                    level: 3
                  },
                  {
                    key: "socket.io-redis",
                    path: "socket.io-redis",
                    name: "socket.io-redis",
                    level: 3
                  },
                  {
                    key: "socket.io-parser",
                    path: "socket.io-parser",
                    name: "socket.io-parser",
                    level: 3
                  },
                  {
                    key: "socket.io",
                    path: "socket.io",
                    name: "socket.io",
                    level: 3
                  },
                  {
                    key: "socket.io-client",
                    path: "socket.io-client",
                    name: "socket.io-client",
                    level: 3
                  }
                ]
              },
              {
                key: "Under the hood",
                path: "Under-the-hood",
                name: "高级选项",
                level: 2,
                children: [
                  {
                    key: "connection",
                    path: "connection",
                    name: "连接",
                    level: 3
                  },
                  {
                    key: "Upgrade",
                    path: "Upgrade",
                    name: "更新",
                    level: 3
                  }
                ]
              }
            ]
          },
          {
            key: "FAQ",
            path: "FAQ",
            name: "常见问题",
            level: 1,
            children: [
              {
                key: "Can I use wildcards in events?",
                path: "Can-I-use-wildcards-in-evnets?",
                name: "能在事件中使用通配符吗?",
                level: 2
              },
              {
                key: "Socket.IO with Apache Cordova?",
                path: "Socket.IO-with-Apache-Cordova?",
                name: "Apache-Cordova如何使用Socket.IO？",
                level: 2
              },
              {
                key: "Socket.IO on iOS?",
                path: "Socket.IO-on-iOS?",
                name: "iOS上如何使用Socket.IO？",
                level: 2
              },
              {
                key: "Socket.IO on Android?",
                path: "Socket.IO-on-Android?",
                name: "Android上如何使用Socket.IO？",
                level: 2
              }
            ]
          }
        ]
    };
  }
};
</script>

<style lang="scss" scoped>
.docs {
  .menu-wrapper {
    position: fixed;
    top: 80px;
    left: 0;
    height: 100%;
    padding: 0 15px 20px 50px;
    width: 200px;
    color: #9b9b9b;
    overflow: hidden;
  }
  .content {
    margin-left: 320px;
    margin-right: 240px;
  }
}
</style>
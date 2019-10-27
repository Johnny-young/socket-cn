<template>
  <div class="menu">

  </div>
</template>

<script lang="ts">
  export default {
    name: "menu",
    data() {
      return {
        menu: [
          {
            key: "Overview",
            path: "Overview",
            name: "概述",
            children: [
              {
                key: "What Socket.IO is",
                path: "What-Socket.IO-is",
                name: "Socket.IO是什么"
              },
              {
                key: "What Socket.IO is not",
                path: "What-Socket.IO-is-not",
                name: "Socket.IO不是什么"
              },
              {
                key: "Installing",
                path: "Installing",
                name: "安装"
              },
              {
                key: "Using with Node http server",
                path: "Using-with-Node-http-server",
                name: "使用Node的http服务器"
              },
              {
                key: "Using with Express",
                path: "Using-with-Express",
                name: "使用Express"
              },
              {
                key: "Sending and receiving events",
                path: "Sending-and-receiving-events",
                name: "发送和接手事件"
              },
              {
                key: "Restricting yourself to a namespace",
                path: "Restricting-yourself-to-a-namspace",
                name: "使用命名空间作为限制"
              },
              {
                key: "Sending volatile messages",
                path: "Sending-volatile-messages",
                name: "发送经常变化的信息"
              },
              {
                key: "Sending and getting data",
                path: "Sending-and-getting-data",
                name: "发送和接手数据"
              },
              {
                key: "Broadcasting messages",
                path: "Broadcasting-messages",
                name: "广播信息"
              },
              {
                key: "Using it just as cross-browser WebSocket",
                path: "Using-it-just-as-cross-browser-WebSocket",
                name: "仅仅作为跨浏览器的WebSockey使用"
              }
            ]
          },
          {
            key: "Rooms and Namespaces",
            path: "Rooms-and-Namespaces",
            name: "房间和命名空间",
            children: [
              {
                key: "Namespaces",
                path: "Namespaces",
                name: "命名空间",
                children: [
                  {
                    key: "Default namespaces",
                    path: "Default-namespaces",
                    name: "默认的命名空间"
                  },
                  {
                    key: "Custom namespaces",
                    path: 'Custom-namespaces',
                    name: "自定义的命名空间"
                  }
                ]
              },
              {
                key: "Rooms",
                path: "Rooms",
                name: "房间",
                children: [
                  {
                    key: "Joining and leaving",
                    path: 'Joining-and-leaving',
                    name: "加入和离开"
                  },
                  {
                    key: "Default room",
                    path: "Defaul-room",
                    name: "默认的房间"
                  },
                  {
                    key: "Disconnection",
                    path: "Disconnection",
                    name: "断开连接"
                  }
                ]
              },
              {
                key: "Sending messages from the outside-world",
                path: "Sending-messages-from-the-outside-world",
                name: "从外部发送信息"
              }
            ]
          },
          {
            key: "Migrating from 0.9",
            path: "Migrating-from-0.9",
            name: "从0.9版本迁移",
            children: [
              {
                key: "Authentication differences",
                path: "Authentication-differences",
                name: "授权的不同"
              },
              {
                key: "Log differences",
                path: "Log-differences",
                name: "日志的不同"
              },
              {
                key: "Configuration differences",
                path: "Configuration-differences",
                name: "配置的不同"
              },
              {
                key: "Parser/Protocal differences",
                path: "Parser/Protocal-differences",
                name: "解析/协议的不同"
              }
            ]
          },
          {
            key: "Using multiple nodes",
            path: "Using-multiple-nodes",
            name: "使用多个节点",
            children: [
              {
                key: "Sticky load balancing",
                path: "Sticky-load-balancing",
                name: "粘性负载均衡"
              },
              {
                key: "Nginx configuration",
                path: "Nginx-configuration",
                name: "Nginx的配置"
              },
              {
                key: "Apache HTTPD configuration",
                path: "Apache-HTTPD-configuration",
                name: "Apache HTTPD的配置"
              },
              {
                key: "HAProxy configuration",
                path: "HAProxy-configuration",
                name: "HAProxy的配置"
              },
              {
                key: "Using Node.JS Cluster",
                path: "Using-Node.JS-Cluster",
                name: "使用nodejs集群"
              },
              {
                key: "Passing events between nodes",
                path: "Passing-events-between-nodes",
                name: "在节点间传递事件"
              }
            ]
          },
          {
            key: "Logging and debugging",
            path: "Logging-and-debugging",
            name: "日志和调试",
            children: [
              {
                key: "Available debugging scopes",
                path: "Available-debugging-scopes",
                name: '可用的调试技巧'
              }
            ]
          },
          {
            key: "Emit cheatsheet",
            path: "Emit-cheatsheet",
            name: "发送备忘单"
          },
          {
            key: "Internals overview",
            path: "Intervals-overview",
            name: "内部概览",
            children: [
              {
                key: "Dependency graph",
                path: "Dependency-graph",
                name: "依赖图",
                children: [
                  {
                    key: "engine.io-parser",
                    path: "engine.io-parser",
                    name: "engine.io-parser"
                  },
                  {
                    key: "engine.io",
                    path: "engine.io",
                    name: "engine.io"
                  },
                  {
                    key: "engine.io-client",
                    path: "engine.io-client",
                    name: "engine.io-client"
                  },
                  {
                    key: "socket.io-adapter",
                    path: "socket.io-adapter",
                    name: "socket.io-adapter"
                  },
                  {
                    key: "socket.io-redis",
                    path: "socket.io-redis",
                    name: "socket.io-redis"
                  },
                  {
                    key: "socket.io-parser",
                    path: "socket.io-parser",
                    name: "socket.io-parser"
                  },
                  {
                    key: "socket.io",
                    path: "socket.io",
                    name: "socket.io"
                  },
                  {
                    key: "socket.io-client",
                    path: "socket.io-client",
                    name: "socket.io-client"
                  }
                ]
              },
              {
                key: "Under the hood",
                path: "Under-the-hood",
                name: "高级选项",
                children: [
                  {
                    key: "connection",
                    path: "connection",
                    name: "连接"
                  },
                  {
                    key: "Upgrade",
                    path: "Upgrade",
                    name: "更新"
                  }
                ]
              }
            ]
          },
          {
            key: "FAQ",
            path: "FAQ",
            name: "常见问题",
            children: [
              {
                key: "Can I use wildcards in events?",
                path: "Can-I-use-wildcards-in-evnets?",
                name: "能在事件中使用通配符吗?"
              },
              {
                key: "Socket.IO with Apache Cordova?",
                path: "Socket.IO-with-Apache-Cordova?",
                name: "Apache-Cordova如何使用Socket.IO？"
              },
              {
                key: "Socket.IO on iOS?",
                path: "Socket.IO-on-iOS?",
                name: "iOS上如何使用Socket.IO？"
              },
              {
                key: "Socket.IO on Android?",
                path: "Socket.IO-on-Android?",
                name: "Android上如何使用Socket.IO？"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu {

  }
</style>
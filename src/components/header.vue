<template>
  <header class="header">
    <div class="left" title="socket.io">
      <router-link to="/">
        <img class="logo" src="https://socket.io/css/images/logo.svg" alt />
      </router-link>
    </div>
    <div class="right">
      <div class="learn">
        <span class="txt">Learn</span>
        <ul class="list">
          <li v-for="link in learnLinks" :key="link.name">
            <Router-link :to="link.url">{{link.name}}</Router-link>
          </li>
        </ul>
      </div>
      <div class="resources">
        <span class="txt">Resources</span>
        <ul class="list">
          <li v-for="link in resourcesLinks" :key="link.title">
            <div class="link-title">{{link.title}}</div>
            <div class="inner-list">
              <div v-for="innerLink in link.children" :key="innerLink.url">
                <a :href="innerLink.url" :title="innerLink.name">{{innerLink.name}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a
        class="txt"
        href="https://opencollective.com/socketio"
        target="_blank"
        :style="{margin: '0 10px'}"
      >Support Socket I.O</a>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "header",
  data() {
    return {
      learnLinks: [
        {
          name: "Get started",
          url: "/get-started/chat/"
        },
        {
          name: "Doucmentation",
          url: "/docs/"
        },
        {
          name: "Demos",
          url: "/demos/chat/"
        },
        {
          name: "Server API",
          url: "/docs/server-api/"
        },
        {
          name: "Client API",
          url: "/docs/client-api/"
        }
      ],
      resourcesLinks: [
        {
          title: "Getting help",
          children: [
            {
              name: "Slack",
              url: "https://slackin-socketio.now.sh/"
            },
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com/questions/tagged/socket.io"
            }
          ]
        },
        {
          title: "News",
          children: [
            {
              name: "Blog",
              url: "https://socket.io/blog/socket-io-2-0-1-2-0-2-and-2-0-3/"
            },
            {
              name: "Twitter",
              url: "https://twitter.com/SocketIO"
            }
          ]
        },
        {
          title: "Links",
          children: [
            {
              name: "Github",
              url: "https://github.com/socketio/socket.io"
            },
            {
              name: "CDN",
              url: "https://cdnjs.com/libraries/socket.io"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;

  .logo {
    width: 136px;
    height: 40px;
  }

  .right {
    position: absolute;
    top: 0;
    right: 30px;
    height: 100%;
    overflow: hidden;

    &:hover {
      overflow: visible;
    }

    .learn,
    .resources {
      position: relative;
      display: inline-block;
      margin: 0 10px;
      height: 100%;
      cursor: pointer;

      &:hover {
        .list {
          top: 80%;
          opacity: 1;
        }

        a {
          color: #444;
        }
      }

      .list {
        position: absolute;
        top: 100%;
        left: -20px;
        padding: 0 20px 10px 20px;
        background-color: #fff;
        border: 1px solid #eee;
        opacity: 0;
        transition: all .3s ease-in-out;

        a {
          display: inline-block;
          margin-top: 10px;
          line-height: 20px;
          font-size: 12px;
          color: #9b9b9b;
        }

        .link-title {
          margin-top: 10px;
          width: 100px;
          line-height: 20px;
          font-size: 12px;
          font-weight: bold;

        }
        .inner-list {
          padding-left: 15px;
        }
      }
    }

    .txt {
      line-height: 65px;
    }
  }
}
</style>
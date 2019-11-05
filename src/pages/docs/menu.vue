<template>
  <ul :class="data[0].level === 1 ? 'inner-menu' : 'inner-sub-menu'">
    <menu-item v-for="(item, index) in data" :class="currIndex === index ? 'active' : ''" :key="item.name">
      <a :href="'#' + item.path" class="txt" v-if="!item.children && item.level !== 1" :title="item.name">{{item.name}}</a>
      <h2 v-else @click="data[0].level === 1 && toggleMenu(index, item.path)" :class="data[0].level === 1 ? 'title' : 'inner-title'" :title="item.name">{{item.name}}</h2>
      <my-menu v-if="item.children && item.children.length" :data="item.children"></my-menu>
    </menu-item>
  </ul>
</template>

<script lang="ts">
  import menuItem from "./menuItem"

  export default {
    name: "my-menu",
    props: ['data'],
    components: {
      "menu-item": menuItem
    },
    data() {
      return {
        currIndex: 0,
        menu: [
          'Rooms-and-Namespaces',
          'Migrating-from-0.9',
          'Using-multiple-nodes',
          'Logging-and-debugging',
          'Emit-cheatsheet',
          'Intervals-overview',
          'FAQ'
        ]
      }
    },
    methods: {
      getCurrIndex: function() {
        let index = null
        this.menu.find((item, inx) => {
          if(this.$route.path.includes(item)) {
            index = inx + 1
          }
          return false
        })

        if(index) {
          this.currIndex = index
        }else {
          let arr = this.$route.path.split("/")
          if(arr[arr.length-1] === '' && arr[arr.length-2] === 'docs') {
            this.currIndex = 0
          }
        }

      },
      // 菜单切换
      toggleMenu: function(index, path) {
        this.currIndex = index
        let arr = this.$route.path.split("/")
        
        arr[arr.length-2] !== path && this.$router.push(path ? "/docs/" + path + "/" : "/docs/")
      },
      //页面内容跳转
      jumpHashTitlte: function(id) {
        !this.$route.path.includes(id) 
        && 
        this.$router.push({
          path: "/#" + id
        })
      }
    },
    created: function() {
      this.getCurrIndex()
    },
    mounted: function() {
      
    }
  }
</script>

<style lang="scss" scoped>
  .inner-menu {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .item {
      &.active {
        h2 {
          font-weight: bold;
        }
        .inner-sub-menu {
          display: block;
          .inner-title {
            font-weight: bold;
          }
        }
      }

      .txt {
        display: inline-block;
        width: 100%;
        line-height: 26px;
        cursor: pointer;
      }
    }
    .title {
      line-height: 26px;
      font-size: 14px;
      font-weight: normal;
      cursor: pointer;
    }
    .inner-sub-menu {
      display: none;
      padding-left: 10px;
      font-size: 12px;
      .inner-title {
        line-height: 26px;
        font-size: 12px;
        font-weight: normal;
        cursor: pointer;
      }
    }
  }
</style>
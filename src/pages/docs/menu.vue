<template>
  <ul :class="data[0].level === 1 ? 'menu' : 'sub-menu'">
    <menu-item v-for="(item, index) in data" :class="currIndex === index ? 'active' : ''" :key="item.name">
      <a  :href="'#' + item.path" class="txt" v-if="!item.children" :title="item.name">{{item.name}}</a>
      <template v-else>
        <h2 @click="data[0].level === 1 && toggleMenu(index, item.path)" :class="data[0].level === 1 ? 'title' : 'inner-title'" :title="item.name">{{item.name}}</h2>
        <my-menu :data="item.children"></my-menu>
      </template>
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
      }
    },
    methods: {
      // 菜单切换
      toggleMenu: function(index, path) {
        this.currIndex = index
        !this.$route.path.includes(path) && this.$router.push("/docs/" + path)
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
      
    },
    mounted: function() {
      
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .item {
      &.active {
        h2 {
          font-weight: bold;
        }
        .sub-menu {
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
    .sub-menu {
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
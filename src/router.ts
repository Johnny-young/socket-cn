import Vue from "vue"
import Router from "vue-router"

import index from "./pages/index"

Vue.use(Router)

const started = () => import("./pages/started/index")
const chat = () => import("./pages/started/chat.vue")

const docs = () => import("./pages/docs/index.vue")

const demo = () => import("./pages/demo.vue")


export default new Router({
  mode: "history", // 卧槽，你个SB，耽误我好长时间
  routes: [
    {
      path: "/",
      component: index,
    },
    {
      path: "/get-started/",
      component: started
    },
    {
      path: "/get-started/chat",
      component: chat
    },
    {
      path: "/docs/",
      component: docs
    },
    {
      path: "/demo/",
      component: demo
    }
  ]
})
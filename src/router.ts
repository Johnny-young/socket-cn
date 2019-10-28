import Vue from "vue"
import Router from "vue-router"

import index from "./pages/index"

Vue.use(Router)

const started = () => import("./pages/started/index")
const chat = () => import("./pages/started/chat.vue")

const docs = () => import("./pages/docs/index.vue")
const overview = () => import("./pages/docs/overview")
const roomsAndNamespaces = () => import("./pages/docs/rooms-namespaces")
const migrating = () => import("./pages/docs/migrating")
const usingMultipleNodes = () => import("./pages/docs/using-multiple-nodes")
const loggingAndDebugging = () => import("./pages/docs/logging-debugging")
const emitAndDebugging = () => import("./pages/docs/emit-cheatsheet")
const internalsOverview = () => import("./pages/docs/internals-overview")
const faq = () => import("./pages/docs/FAQ")

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
      component: docs,
      children: [
        {
          path: "/",
          component: overview
        },
        {
          path: "Rooms-and-Namespaces/",
          component: roomsAndNamespaces
        },
        {
          path: "Migrating-from-0.9/",
          component: migrating
        },
        {
          path: "Using-multiple-nodes/",
          component: usingMultipleNodes
        },
        {
          path: "Logging-and-debugging/",
          component: loggingAndDebugging
        },
        {
          path: "Emit-cheatsheet/",
          component: emitAndDebugging
        },
        {
          path: "Intervals-overview/",
          component: internalsOverview
        },
        {
          path: "FAQ/",
          component: faq
        }
      ]
    },
    {
      path: "/demo/",
      component: demo
    }
  ]
})
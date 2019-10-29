import Vue from 'vue'

import App from "./app"
import router from "./router"
import "./static/css/common.scss"

Vue.config.devtools = true // 浏览器的开发者面板中显示vue插件

let vm = new Vue({
  data: {},
  router,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router"
// 引入vuex store
import store from './store'

// 测试请求 成功
// import {
//   getBaseCategoryList
// } from "./api/index.js"
// console.log('getBaseCategoryList()', getBaseCategoryList())

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app') // 挂载app
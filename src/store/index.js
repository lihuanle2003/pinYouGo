// vuex

import Vue from "vue"
import Vuex from "vuex"

// 使用插件
Vue.use(Vuex)
// 使用vuex模块化
import home from "./homeVuex"
import search from "./searchVuex"


// 对外暴露一个Store实例
export default new Vuex.Store({
    // 注册vuex模块
    modules:{
        home,
        search
    }
})
// home 模块 vuex

import {
    getBaseCategoryList
} from '@/api';

const state = {
    categoryList: []
}

const mutations = {
    GETLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    async getList({
        commit
    }) {
        // 使用async/await 异步执行函数 获取到数据
        let result = await getBaseCategoryList()
        result.code === 200 ? commit("GETLIST",result.data) : new Error("服务器请求失败") 
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
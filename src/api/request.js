// 对于axios 二次封装 加上请求、响应拦截器

import axios from "axios"
// 引入进度条
import nProgress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
    // 自动在路径上添加 /api
    baseURL: "/api",
    // 超时时间
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    // 开始请求时 进度条开始
    nProgress.start()
    // 请求拦截器 拿到配置对象  中的 Header请求头信息
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 响应 返回 进度条 done
    nProgress.done()
    // 返回 成功数据
    return res.data;
}, (error) => {
    // 返回 错误信息 promise终止错误信息链
    return Promise.reject(new Error("错误信息"))
})

// 暴露 requests
export default requests;
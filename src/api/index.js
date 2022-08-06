// 引入二次封装axios
import requests from "./request.js"

// 统一管理 向服务器发送请求的接口 使用时直接调用 返回响应结果 
// 使用了箭头函数 简写 返回响应 Promise对象
export const getBaseCategoryList = ()=> requests({  
    // baseUrl 配置了 /api 
    url:"/product/getBaseCategoryList",
    // get请求
    method:"get"
})
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 配置 代理服务器 支持跨域
  devServer:{
    proxy:{
      // 跨域请请求遇到 /api路径时 代理服务器向target服务器发送请求 
      // 服务器之间不存在跨域
      'api':{
        target:"http://gmall-h5-api.atguigu.cn",
        // 路径重写
        // pathRewrite:{
        //   "^/api":""
        // }
        ws:true
      }
    }
  }
})

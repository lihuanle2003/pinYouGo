// 配置路由

// 导入包并使用插件
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


// 引入组件区域
import HomeComp from "@/views/HomeComp"
import LoginComp from "@/views/LoginComp"
import SearchComp from "@/views/SearchComp"
import PhoneComp from "@/views/PhoneComp.vue"

const route = new VueRouter({
    mode: "hash",
    routes: [{
            // 路径
            path: "/home",
            component: HomeComp,
            // 挂载路由元信息
            meta: {
                isShowFooter: true,
                isShowHeader: true
            },
        },
        {
            path: "/login",
            component: LoginComp,
            meta: {
                isShowFooter: false,
                isShowHeader: false
            }
        },
        {
            // 命名
            name: "search",
            path: "/search/:keyword?",
            // 不知道要不要传递params参数时，路径加上？表示可传可不传，解决路径出错问题
            component: SearchComp,
            meta: {
                isShowFooter: false,
                isShowHeader: true
            }
        },
        {
            path: "/goods",
            component: PhoneComp,
            meta: {
                isShowFooter: true,
                isShowHeader: true
            }
        },
        {
            path: "*",
            // 重定向，项目被访问时首先访问到首页
            redirect: "/home",
        }
    ]

})

// 向外暴露
export default route
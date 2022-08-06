<template>
  <div id="Header">
    <!-- shortcut模块 begin -->
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>品优购欢迎您！&nbsp;</li>
            <li>
              <router-link to="/login">请登录</router-link>&nbsp;
              <router-link to="/login" class="style_red">免费注册</router-link>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>我的订单</li>
            <li></li>
            <li class="arra_ran">我的品优购</li>
            <li></li>
            <li>品优购会员</li>
            <li></li>
            <li>企业采购</li>
            <li></li>
            <li class="arra_ran">关注品优购</li>
            <li></li>
            <li class="arra_ran">客户服务</li>
            <li></li>
            <li class="arra_ran">网站导航</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- shortcut模块 end -->

    <!-- 头部模块制作 begin -->
    <header class="header w">
      <!-- logp -->
      <div class="logo">
        <h1>
          <router-link to="/home" title="品优购商场">品优购商场</router-link>
        </h1>
      </div>
      <!-- search -->
      <div class="search">
        <input
          type="search"
          id=""
          v-model="keyword"
          name=""
          placeholder="语言开发"
        />
        <button @click="goSearch">搜索</button>
      </div>
      <!-- hotwords -->
      <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购 </a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
      </div>
      <!-- 购物车模块 -->
      <div class="shopcar">
        我的购物车
        <span class="count">99+</span>
      </div>
    </header>
    <!-- 头部模块制作 end -->
  </div>
</template>

<script>
export default {
  name: "Header-Comp",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      // 编程式路由导航
      this.$router.push(
        // 使用字符串传递...

        // 使用模板字符串传递params和query参数
        // `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
        // 使用对象方式传递参数
        {
          name: "search",
          params: {
            keyword: this.keyword,
          },

          // params参数不存在，路由匹配规则时对路径添加一个？解决

          // params:{
          //     keyword:"" || undefined
          // },
          // params传递空串，也会导致路径出错，使用判断为false变为undefined解决
          query: {
            k: this.keyword.toUpperCase(),
          },
        }
      );
    },
  },
};
</script>

<style scoped long="css">
</style>
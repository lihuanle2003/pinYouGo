<template>
  <div>
    <!-- nav模块 begin -->
    <nav class="nav">
      <div class="w">
        <div class="dropdown">
          <!-- 此处存在俩个盒子之间的解释关系 -->
          <dt>全部商品分类</dt>
          <dd>
            <ul>
              <li v-for="c1 in categoryList" :key="c1.categoryId">
                <a href="javascript:;">{{ c1.categoryName }}</a>
              </li>
            </ul>
          </dd>
        </div>
        <div class="navitems">
          <ul>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">服装城</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- nav模块 end -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavComp",
  props: ["slideshow"],
  methods: {},
  // 在这个声明周期钩子上 强服务器发送请求 获取数据
  mounted() {
    // 通过diapatch调用actions方法 发送请求拿到数据
    this.$store.dispatch("getList");
  },
  computed: {
    ...mapState({
      // 使用categoryList这个计算属性 右边函数会立即执行 拿到数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style scoped>
</style>
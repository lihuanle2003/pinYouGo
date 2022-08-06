<template>
  <div>
    <Header_Comp v-show="$route.meta.isShowHeader" />
    <router-view></router-view>
    <!-- <Footer_Comp v-show="$route.path=='/home'"/> -->
    <Footer_Comp v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
import Header_Comp from "./components/Header.vue";
import Footer_Comp from "./components/Footer.vue";
export default {
  components: {
    Header_Comp,
    Footer_Comp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}

em,
i {
  font-style: normal;
}

li {
  list-style: none;
}

img {
  border: 0;
  vertical-align: middle;
}

button {
  cursor: pointer;
}

a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #c81623;
}
i,
u {
  text-decoration: none;
}
button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  border: 0;
  outline: none;
}

body {
  /* -webkit-font-smoothing: antialiased; */
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  color: #666;
}

h5 {
  font-size: 14px;
  color: #666;
}
.hide,
.none {
  display: none;
}

.clearfix:after {
  display: block;
  content: " ";
  visibility: hidden;
  clear: both;
  height: 0;
}

.clearfix {
  *zoom: 1;
}

/* 版心 */
.w {
  width: 1200px;
  margin: 0 auto;
}
@font-face {
  font-family: "icomoon";
  src: url("../fonts/icomoon.eot?8i0hvh");
  src: url("../fonts/icomoon.eot?8i0hvh#iefix") format("embedded-opentype"),
    url("../fonts/icomoon.ttf?8i0hvh") format("truetype"),
    url("../fonts/icomoon.woff?8i0hvh") format("woff"),
    url("../fonts/icomoon.svg?8i0hvh#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
/* 快捷导航模块 */
.shortcut {
  height: 31px;
  /* 继承行高 */
  line-height: 31px;
  background: #f1f1f1;
}
.style_red {
  color: #c81623;
}
.shortcut ul li {
  float: left;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
/* 选择所以偶数小li */
.shortcut .fr ul li:nth-child(even) {
  width: 1px;
  height: 12px;
  background: #666;
  margin: 9px 15px 0px;
}
.arra_ran::after {
  content: "\e9c5";
  font-family: "icomoon";
  font-size: 12px;
  margin-left: 4px;
}
/* header制作 */
.header {
  position: relative;
  height: 105px;
}
/* logo */
.logo {
  position: absolute;
  top: 25px;
  left: 0px;
  width: 171px;
  height: 61px;
}
.logo a {
  display: block;
  width: 171px;
  height: 61px;
  font-size: 0px;
  background: url(@/assets/img/logo.png) no-repeat;
}
/* search */
.search {
  display: flex;
  position: absolute;
  top: 25px;
  left: 378px;
  width: 538px;
  height: 36px;
  border: 2px solid #b1191a;
}
.search > input {
  float: left;
  width: 454px;
  height: 33px;
  /* 使用css3盒子模型，不用担心padding会撑大盒子 */
  padding: 10px;
}
/* 行内块元素之间存在缝隙，使用浮动清除 */
.search > button {
  flex: 1;
  height: 34px;
  color: white;
  font-size: 16px;
  background: #b1191a;
}
.hotwords {
  position: absolute;
  top: 61px;
  left: 378px;
}
.hotwords a {
  font-size: 12px;
  margin: 0px 5px;
}
.shopcar {
  position: absolute;
  top: 25px;
  right: 50px;
  width: 140px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #f1f1f1;
}
.shopcar::before {
  content: "\e93a";
  font-family: "icomoon";
  color: #b1191a;
  margin-right: 5px;
}
.shopcar::after {
  content: "\ea42";
  font-family: "icomoon";
  margin-left: 10px;
}
.count {
  position: absolute;
  top: -7px;
  /* 使用left值可以是文字变多时往右移 */
  left: 105px;
  /* 不给宽度，让内容撑开盒子 */
  height: 14px;
  padding: 0 5px;
  font-size: 12px;
  color: #fff;
  /* 继承父元素行高，需要改正 */
  line-height: 14px;
  border-radius: 7px 7px 7px 0;
  background: #e60012;
}
.nav {
  height: 48px;
  border-bottom: 2px solid #b1191a;
}
.dropdown {
  float: left;
  width: 210px;
  height: 46px;
  background: #b1191a;
}
.dropdown dt {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
}
.dropdown dd {
  /* display: none;hg */
  width: 210px;
  height: 465px;
  margin-top: 2px;
  background-color: #c81623;
  overflow: auto;
  scrollbar-width: thin;
}
.dropdown dd ul li {
  position: relative;
  line-height: 31px;
  padding-left: 10px;
}

.dropdown dd ul li:hover {
  background: #fff;
}
.dropdown dd ul li a {
  color: #fff;
  font-size: 14px;
}
.dropdown dd ul li a::after {
  position: absolute;
  right: 10px;
  content: "";
  font-family: "icomoon";
  color: #fff;
}
.dropdown dd ul li:hover a,
.dropdown dd ul li:hover a::after {
  color: #c81623;
}
.navitems {
  float: left;
}
.navitems ul li {
  float: left;
}
.navitems ul li a {
  display: block;
  height: 45px;
  line-height: 45px;
  padding: 0 25px;
  font-size: 16px;
}
</style>
<template>
  <div class="w">
    <!-- header begin -->
    <header class="header">
      <div class="logo">
        <a href="./index.html"><img src="@/assets/img/logo.png" alt="" /></a>
      </div>
    </header>
    <!-- header end -->

    <!-- register begin  -->
    <div class="register">
      <h3>
        注册新用户
        <div class="login">
          我有账号，去<a href="./index.html" class="style_red">登录</a>
        </div>
      </h3>
      <div class="reg_from">
        <ul>
          <li>
            <label for="">手机号：</label>
            <input type="tel" class="inp" />
            <span class="error">
              <i class="error_icon"></i>
              手机号码格式不正确，请重新输入
            </span>
          </li>
          <li>
            <label for="">短信验证码：</label>
            <input type="text" class="inp" />
            <span class="success">
              <i class="success_icon"></i>
              短信验证码输入正确
            </span>
          </li>
          <li>
            <label for="">登录密码：</label>
            <input type="password" class="inp" />
            <span class="error">
              <i class="error_icon"></i>
              手机号码格式不正确，请重新输入
            </span>
          </li>
          <li>
            <div class="safe">
              安全强度
              <em class="rou"> 弱 </em>
              <em class="zhong"> 中 </em>
              <em class="qiang"> 强 </em>
            </div>
          </li>
          <li>
            <label for="">确认密码：</label>
            <input type="password" class="inp" />
            <span class="error">
              <i class="error_icon"></i>
              手机号码格式不正确，请重新输入
            </span>
          </li>
          <li class="agree">
            <input type="checkbox" name="" id="" /> 同意协议并注册
            <a href="#">《查看用户协议》</a>
          </li>
          <li>
            <button class="btn" type="submit">"完成注册"</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- register end  -->

    <!-- footer begin  -->
    <footer class="footer">
      <div class="mod_copyright">
        <div class="links">
          关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 |
          友情链接 | 销售联盟 | 品优购社区 | 品优购公益 | English Site | Contact
          U
        </div>
        <div class="copy_right">
          地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096
          电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn
          <br />
          京ICP备08001421号京公网安备110108007702
        </div>
      </div>
    </footer>
    <!-- footer begin  -->
  </div>
</template>

<script>
export default {
  name: "LoginComp",
};
</script>

<style scoped>
.style_red {
  color: #c81623;
}
.header {
  height: 84px;
  border-bottom: 1px solid #c81623;
}
.logo {
  padding-top: 18px;
  /* 此处使用margin-top会有外边距塌陷的问题 */
}
.register {
  height: 525px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.register h3 {
  height: 42px;
  border-bottom: 1px #ccc solid;
  background: #ececec;
  font-size: 18px;
  font-weight: 400;
  line-height: 42px;
  padding: 0 15px;
}
.login {
  float: right;
  font-size: 14px;
}
.reg_from {
  width: 600px;
  margin: 50px auto 0;
}
.reg_from ul li {
  margin-bottom: 20px;
}
/* 保障每一个label都右对齐，转换为行内块元素，文字右对齐 */
.reg_from ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
}
.reg_from ul li .inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ccc;
}
.error {
  color: #c81623;
}
.success {
  color: green;
}
.error_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background: url(@/assets/img/icon_error.png) no-repeat;
  background-size: 100%;
}
.success_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background: url(@/assets/img/icon_succes.png) no-repeat;
  background-size: 100%;
}
.safe {
  padding-left: 165px;
}
.safe em {
  padding: 0 12px;
  color: white;
}
.rou {
  background: #de1111;
}
.zhong {
  background: #f79100;
}

.qiang {
  background: #40b83f;
}
.agree {
  padding-left: 95px;
}
.agree input {
  vertical-align: center;
}
.agree a {
  color: aqua;
}
.btn {
  width: 200px;
  height: 34px;
  background: #c81623;
  font-size: 14px;
  color: #fff;
  line-height: 34px;
  text-align: center;
  margin: 30px 0 0 110px;
}
.mod_copyright {
  text-align: center;
  padding: 20px;
}
.links {
  margin-bottom: 20px;
}
.copy_right {
  line-height: 20px;
}
</style>
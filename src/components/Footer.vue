<template>
  <div id="Footer">
    <!-- footer模块 begin -->
    <footer class="footer">
      <div class="w">
        <!-- mod_sericve -->
        <div class="mod_sericve">
          <ul>
            <li>
              <h5></h5>
              <div class="sericve_text">
                <h4>正品保障</h4>
                <p>正品保障，提供发票</p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div class="sericve_text">
                <h4>正品保障</h4>
                <p>正品保障，提供发票</p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div class="sericve_text">
                <h4>正品保障</h4>
                <p>正品保障，提供发票</p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div class="sericve_text">
                <h4>正品保障</h4>
                <p>正品保障，提供发票</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- mod_help -->
        <div class="mod_help">
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服 </a></dd>
          </dl>
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服 </a></dd>
          </dl>
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服 </a></dd>
          </dl>
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服 </a></dd>
          </dl>
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服 </a></dd>
          </dl>
          <div class="erweima">
            <p>帮助中心</p>
            <img src="img/wx_cz.jpg" alt="关注官方客户端" />
            <p>品优购客户端</p>
          </div>
        </div>
        <div class="mod_copyright">
          <div class="links">
            关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 |
            友情链接 | 销售联盟 | 品优购社区 | 品优购公益 | English Site |
            Contact U
          </div>
          <div class="copy_right">
            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096
            电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn
            <br />
            京ICP备08001421号京公网安备110108007702
          </div>
        </div>
      </div>
    </footer>
    <!-- footer模块 end -->
  </div>
</template>

<script>
export default {
  name: "Footer-Comp",
  data:()=>{
    return{

    }
  }
};
</script>

<style scoped long="css">
.w {
  width: 1200px;
  margin: 0 auto;
}
.footer {
  height: 415px;
  background: #f5f5f5;
  padding-top: 40px;
}
.mod_sericve {
  height: 80px;
  border-bottom: 1px rgb(172, 172, 172) solid;
}
.mod_sericve ul li {
  float: left;
  width: 300px;
  height: 50px;
  padding-left: 35px;
}
.mod_sericve ul li h5 {
  float: left;
  width: 50px;
  height: 50px;
  background: url(../assets/img/icons.png) no-repeat -252px -2px;
  margin-right: 8px;
}
.mod_sericve ul li:nth-child(2) h5 {
  background: url(../assets/img/icons.png) no-repeat -255px -53px;
}
.mod_sericve ul li:nth-child(3) h5 {
  background: url(../assets/img/icons.png) no-repeat -257px -105px;
}
.mod_sericve ul li:nth-child(4) h5 {
  background: url(../assets/img/icons.png) no-repeat -257px -157px;
}
.sericve_text h4 {
  font-size: 14px;
}
.sericve_text p {
  margin-top: 2px;
  font-size: 12px;
}
.mod_help {
  height: 185px;
  border-bottom: 1px rgb(172, 172, 172) solid;
  padding-top: 20px;
}
.mod_help dl {
  float: left;
  margin: 0px 60px;
}
.mod_help dl dt {
  font-size: 16px;
  margin-bottom: 10px;
}
.mod_help dl dd a {
  font-size: 12px;
}
.erweima {
  text-align: center;
}
.erweima p:first-child {
  font-size: 16px;
  margin-bottom: 10px;
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
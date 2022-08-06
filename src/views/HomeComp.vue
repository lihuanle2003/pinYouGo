<template>
  <div id="Home">
    <!-- nav模块 begin -->
    <NavComp/>
    <!-- nav模块 end -->
    
    <!-- main模块 begin -->
    <div class="w">
      <div class="main">
        <div class="focus">
          <!-- 轮播图不可以自己放图片，需要放入ul，li中去，后使用js脚本进行转换操作 -->
          <ul>
            <li>
              <img src="@/assets/uplode/focus1.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="newsflash">
          <div class="news">
            <div class="news_hd">
              <h5>品优购快报</h5>
              <a href="#" class="more"> 更多 </a>
            </div>
            <div class="news_bd">
              <ul>
                <li>
                  <span class="style_red">【热门】</span>
                  <a href="#">
                    <p>无惧挑战，轻松搞定移动办公需求的小新搭配</p>
                  </a>
                </li>
                <li>
                  <span class="style_red">【热门】</span>
                  <a href="#">
                    <p>无惧挑战，轻松搞定移动办公需求的小新搭配</p>
                  </a>
                </li>
                <li>
                  <span class="style_red">【热门】</span>
                  <a href="#">
                    <p>无惧挑战，轻松搞定移动办公需求的小新搭配</p>
                  </a>
                </li>
                <li>
                  <span class="style_red">【热门】</span>
                  <a href="#">
                    <p>无惧挑战，轻松搞定移动办公需求的小新搭配</p>
                  </a>
                </li>
                <li>
                  <span class="style_red">【热门】</span>
                  <a href="#">
                    <p>无惧挑战，轻松搞定移动办公需求的小新搭配</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="lifesericve">
            <ul>
              <li>
                <i> </i>
                <p>话费</p>
              </li>
              <li>
                <div class="youhui">
                  <p>减</p>
                  <div class="trangle">
                    <div class="trangle_real"></div>
                  </div>
                </div>
                <i> </i>
                <p>飞机票</p>
              </li>
              <li>
                <div class="youhui">
                  <p>减</p>
                  <div class="trangle">
                    <div class="trangle_real"></div>
                  </div>
                </div>
                <i> </i>
                <p>电影</p>
              </li>
              <li>
                <i> </i>
                <p>游戏机</p>
              </li>
              <li>
                <i> </i>
                <p>彩票</p>
              </li>
              <li>
                <i> </i>
                <p>加油</p>
              </li>
              <li>
                <i> </i>
                <p>房价</p>
              </li>
              <li>
                <i> </i>
                <p>火车票</p>
              </li>
              <li>
                <i> </i>
                <p>投资</p>
              </li>
              <li>
                <i> </i>
                <p>储蓄</p>
              </li>
              <li>
                <i> </i>
                <p>优惠卡</p>
              </li>
              <li>
                <i> </i>
                <p>白条</p>
              </li>
            </ul>
          </div>
          <div class="bargain">
            <img src="@/assets/uplode/bargain.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- main模块 end -->
    <!-- 推荐模块 begin -->
    <div class="w recom">
      <div class="recom_hd">
        <img src="@/assets/img/recom.png" alt="" />
        <h3>今日推荐</h3>
      </div>
      <div class="recom_bd">
        <ul>
          <li>
            <a href="#"><img src="@/assets/uplode/icom_03.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/uplode/icom_03.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/uplode/icom_03.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/uplode/icom_03.jpg" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐模块 end -->

    <!-- 楼层区制作 begin -->
    <div class="floor">
      <!-- 1楼 -->
      <div class="w jiadian">
        <div class="box_hd">
          <h2>家用电器</h2>
          <!-- 命名tab_list，以后js选项卡功能需要 -->
          <div class="tab_list">
            <ul>
              <li><a href="#" class="style_red">热门</a>|</li>
              <li><a href="#">高端电器</a>|</li>
              <li><a href="#">大家电</a>|</li>
              <li><a href="#">生活电器</a>|</li>
              <li><a href="#">厨房电器</a>|</li>
              <li><a href="#">个护健康</a>|</li>
              <li><a href="#">应季电器</a>|</li>
              <li><a href="#">空气/净水</a>|</li>
              <li><a href="#">新奇特</a></li>
            </ul>
          </div>
        </div>
        <div class="box_bd">
          <div class="tab_content">
            <div class="tab_list_item">
              <div class="col_210">
                <ul>
                  <li><a href="#">节能补贴</a></li>
                  <li><a href="#">4k电视</a></li>
                  <li><a href="#">空气净化器</a></li>
                  <li><a href="#">IH电饭煲</a></li>
                  <li><a href="#">滚筒洗衣机</a></li>
                  <li><a href="#">电热水器</a></li>
                </ul>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-1.jpg" alt="" />
                </a>
              </div>
              <div class="col_329">
                <img src="@/assets/uplode/floor-1-b01.png" alt="" />
              </div>
              <div class="col_221">
                <a href="#" class="border_bottom">
                  <img src="@/assets/uplode/floor-1-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-3.jpg" alt="" />
                </a>
              </div>
              <div class="col_221 border_lr">
                <a href="#">
                  <img src="@/assets/uplode/floor-1-4.jpg" alt="" />
                </a>
              </div>
              <div class="col_219">
                <a href="#" class="border_bottom">
                  <img src="@/assets/uplode/floor-1-5.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-6.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2楼 -->
      <div class="w shoji">
        <div class="box_hd">
          <h2>手机通讯</h2>
          <!-- 命名tab_list，以后js选项卡功能需要 -->
          <div class="tab_list">
            <ul>
              <li><a href="#" class="style_red">热门</a>|</li>
              <li><a href="#">高端电器</a>|</li>
              <li><a href="#">大家电</a>|</li>
              <li><a href="#">生活电器</a>|</li>
              <li><a href="#">厨房电器</a>|</li>
              <li><a href="#">个护健康</a>|</li>
              <li><a href="#">应季电器</a>|</li>
              <li><a href="#">空气/净水</a>|</li>
              <li><a href="#">新奇特</a></li>
            </ul>
          </div>
        </div>
        <div class="box_bd">
          <div class="tab_content">
            <div class="tab_list_item">
              <div class="col_210">
                <ul>
                  <li><a href="#">节能补贴</a></li>
                  <li><a href="#">4k电视</a></li>
                  <li><a href="#">空气净化器</a></li>
                  <li><a href="#">IH电饭煲</a></li>
                  <li><a href="#">滚筒洗衣机</a></li>
                  <li><a href="#">电热水器</a></li>
                </ul>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-1.jpg" alt="" />
                </a>
              </div>
              <div class="col_329">
                <img src="@/assets/uplode/floor-1-b01.png" alt="" />
              </div>
              <div class="col_221">
                <a href="#" class="border_bottom">
                  <img src="@/assets/uplode/floor-1-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-3.jpg" alt="" />
                </a>
              </div>
              <div class="col_221 border_lr">
                <a href="#">
                  <img src="@/assets/uplode/floor-1-4.jpg" alt="" />
                </a>
              </div>
              <div class="col_219">
                <a href="#" class="border_bottom">
                  <img src="@/assets/uplode/floor-1-5.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="@/assets/uplode/floor-1-6.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 楼层区制作 end -->
  </div>
</template>

<script>
import NavComp from "@/components/NavComp"
export default {
  name: "HomeComp",
  computed:{
    
  },  
  components:{
    NavComp
  }
};
</script>

<style scoped>
/* 版心 */
.w{
    width: 1200px;
    margin: 0 auto;
}
.main {
  width: 980px;
  height: 455px;
  margin-top: 10px;
  margin-left: 220px;
}
.focus {
  float: left;
  width: 721px;
  height: 100%;
}
.newsflash {
  float: right;
  width: 250px;
  height: 100%;
}

.news {
  height: 165px;
  border: 1px solid #e4e4e4;
}
.news_hd {
  height: 33px;
  border-bottom: 2px dotted #e4e4e4;
  line-height: 33px;
}
.news_hd h5 {
  float: left;
  margin-left: 15px;
}
.news_hd .more {
  float: right;
  margin-right: 14px;
}
.news_hd .more::after {
  content: "";
  font-family: "icomoon";
}
.news_bd {
  padding: 5px 15px 0;
}
.news_bd ul li {
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
}
.news_bd ul li span {
  float: left;
  background: #f5eded;
}
.news_bd ul li a p {
  /* 强制一行显示文本 */
  white-space: nowrap;
  overflow: hidden;
  /* 文本超出部分使用省略号替代 */
  text-overflow: ellipsis;
}

.lifesericve {
  overflow: hidden;
  height: 210px;
  border: 1px solid #e4e4e4;
  border-top: 0;
}
.lifesericve ul {
  /* 加大盒子，完美容纳li */
  width: 252px;
}
.lifesericve ul li {
  position: relative;
  float: left;
  height: 72px;
  width: 63px;
  text-align: center;
  border-color: #e4e4e4;
  border-style: solid;
  border-width: 0 1px 1px 0;
}
.lifesericve ul li i {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: 12px;
}
.lifesericve ul li:nth-child(1) i {
  background: url(@/assets/img/icons.png) no-repeat -17px -16px;
}
.lifesericve ul li:nth-child(2) i {
  background: url(@/assets/img/icons.png) no-repeat -78px -16px;
}
.lifesericve ul li:nth-child(3) i {
  background: url(@/assets/img/icons.png) no-repeat -141px -16px;
}
.lifesericve ul li:nth-child(4) i {
  background: url(@/assets/img/icons.png) no-repeat -205px -16px;
}
.lifesericve ul li:nth-child(5) i {
  background: url(@/assets/img/icons.png) no-repeat -17px -89px;
}
.lifesericve ul li:nth-child(6) i {
  background: url(@/assets/img/icons.png) no-repeat -79px -89px;
}
.lifesericve ul li:nth-child(7) i {
  background: url(@/assets/img/icons.png) no-repeat -142px -89px;
}
.lifesericve ul li:nth-child(8) i {
  background: url(@/assets/img/icons.png) no-repeat -208px -89px;
}
.lifesericve ul li:nth-child(9) i {
  background: url(@/assets/img/icons.png) no-repeat -17px -159px;
}
.lifesericve ul li:nth-child(10) i {
  background: url(@/assets/img/icons.png) no-repeat -79px -159px;
}
.lifesericve ul li:nth-child(11) i {
  background: url(@/assets/img/icons.png) no-repeat -143px -159px;
}
.lifesericve ul li:nth-child(12) i {
  background: url(@/assets/img/icons.png) no-repeat -206px -159px;
}
.youhui {
  position: absolute;
  right: 2px;
  top: 0;
  width: 16px;
  height: 20px;

  background: green;
}
.youhui p {
  width: 16px;
  height: 15px;
  font-size: 10px;
  color: white;
}
.youhui .trangle {
  position: relative;
  width: 16px;
  height: 5px;
}
.trangle .trangle_real {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  line-height: 0;
  border: 8px solid transparent;
  border-bottom: 5px white solid;
}
.bargain {
  margin-top: 5px;
}

/* 推荐模块 */
.recom {
  height: 165px;
  margin-top: 12px;
}
.recom_hd {
  float: left;
  width: 208px;
  height: 165px;
  background-color: rgb(70, 65, 65);
  text-align: center;
  padding-top: 30px;
}
.recom_hd h3 {
  color: white;
  margin-top: 12px;
}
.recom_bd {
  float: right;
}
.recom_bd ul li {
  position: relative;
  float: left;
}
/* 强制拉伸img */
.recom_bd ul li img {
  width: 248px;
  height: 163px;
}
.recom_bd ul li:nth-child(-n + 3)::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 10px;
  width: 1px;
  height: 145px;
  background-color: rgb(207, 131, 131);
}
.floor .w {
  margin-top: 30px;
}
.box_hd {
  height: 30px;
  border-bottom: 2px solid #c81623;
}
.box_hd h2 {
  float: left;
  color: #c81623;
  font-weight: 400;
}
.box_hd .tab_list {
  float: right;
  height: 30px;
  line-height: 30px;
}
.tab_list ul li {
  float: left;
}
.tab_list ul li a {
  padding: 0 15px;
}
.box_bd {
  height: 361px;
}
.tab_list_item > div {
  float: left;
  height: 361px;
}
.tab_list_item a {
  /* a包含有宽度的盒子一班需要转换为块级元素 */
  display: block;
  width: 100%;
}
.col_210 {
  width: 210px;
  background: #f9f9f9;
  text-align: center;
}
.col_329 {
  width: 329px;
  text-align: center;
}
.col_221 {
  width: 221px;
  text-align: center;
}
.col_219 {
  width: 219px;
  text-align: center;
}
.col_210 ul li {
  float: left;
  width: 88px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #c0bebe;
  margin-left: 5px;
}
.col_329 > img {
  width: 329px;
  height: 361px;
}
.border_bottom {
  border-bottom: 1px solid #ccc;
}
.border_lr {
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom: 0;
}
</style>
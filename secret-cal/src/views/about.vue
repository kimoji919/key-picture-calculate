<template>
  <div>
    <div class="in-dex" data-aos="zoom-in">
      <div class="content">
        <h1>SECRET-CAL</h1>
      </div>
    </div>
    <hr />
    <div class="cal">
      <div class="content" data-aos="zoom-in" style="font-size: 54px">
        <h3>拟态风UI界面设计</h3>
      </div>
      <!-- <div class="pre" style="margin-top: 40px">
        <div class="ul-image" data-aos="zoom-in">
          <img src="../assets/cal-precious.jpg" alt="" style="width: 500px" />
        </div>
        <div
          class="content"
          style="font-size: 40px; margin-top: 0px"
          data-aos="zoom-in"
        >
          <h3>超高计算精度</h3>
        </div>
      </div> -->
    </div>
    <div class="login_new" style="margin-top: 50px">
      <div class="box">
        <div class="content-box">
          <img src="../assets/cal-precious.jpg" style="margin-top: 16px" />
          <h2>Calculator</h2>
        </div>
        <div class="input-box">
          <div class="content" style="margin-top: 0px" data-aos="zoom-in">
            <h3 style="font-size: 30px">计算精度</h3>
            <h3 style="font-size: 40px">1e^-9!!!</h3>
            <h3 style="font-size: 55px">1e^-9!!!</h3>
            <h3 style="font-size: 70px">1e^-9!!!</h3>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="power" style="margin-bottom: 80px">
      <div class="content" data-aos="zoom-in" style="font-size: 54px">
        <h3>功能嘎嘎强大</h3>
      </div>
      <!-- 还在用图片加密？都什么年代了快来试试文件加密的船新版本 -->
      <el-carousel
        :interval="4000"
        type="card"
        height="500px"
        @change="changeImg"
      >
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <el-image
            :class="className"
            style="width: 100%; height: 100%"
            :src="item.idView"
            fit="fit"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
      <div
        class="carder"
        style="margin-top: 80px; height: 600px; text-align: center"
      >
        <el-row>
          <el-col :span="8">
            <div data-aos="fade-up">
              <el-card style="height: 610px">
                <img
                  src="../assets/pic-se.jpg"
                  alt=""
                  style="height: 400px; margin-top: 40px"
                />
                <p
                  style="
                    color: #6e6e73;
                    font-size: 18px;
                    font-weight: 600;
                    leter-spacing: 0.011em;
                    margin-top: 60px;
                  "
                >
                  使用多种加密算法<br />一键生成密码
                </p>
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div data-aos="fade-up">
              <el-card>
                <img src="../assets/des-c.png" alt="" style="height: 270px" />
              </el-card>
            </div>
            <div data-aos="fade-up">
              <el-card>
                <img src="../assets/rsa-c.png" alt="" style="height: 270px" />
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div data-aos="fade-up">
              <el-card>
                <img
                  src="../assets/des.png"
                  alt=""
                  style="height: 80px; margin-top: 20px"
                />
                <div style="font-size: 50px; font-weight: 600">
                  <p>简单快捷</p>
                </div>
                <p
                  style="
                    color: #6e6e73;
                    font-size: 21px;
                    font-weight: 600;
                    leter-spacing: 0.011em;
                  "
                >
                  对称式加密
                </p>
              </el-card>
            </div>
            <div data-aos="fade-up" style="background-image:url('../assets/rsa-c.png');">
              <el-card>
                <img src="../assets/rsa.png" alt="" style="height: 100px" />
                <div style="font-size: 50px; font-weight: 600">
                  <p>传输安全</p>
                </div>
                <p
                  style="
                    color: #6e6e73;
                    font-size: 21px;
                    font-weight: 600;
                    leter-spacing: 0.011em;
                  "
                >
                  非对称式加密
                </p>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <hr />
    <div class="tip" style="text-align: center; margin-top: 20px">
      <p>图片内容仅供参考,虽然实物也长这样 _(:зゝ∠)_</p>
    </div>
    <!-- <div class="pic"> 
      <div class="code">
        <a
          href="https://github.com/dolbydot/css3PaintPicachu/blob/master/index.scss"
          ><img
            src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
        /></a>
      </div>
      <div class="container">
        <div class="hold-head">
          <div class="ear ear-left"></div>
          <div class="ear ear-right"></div>
          <div class="hold-face">
            <div class="eyebrow eyebrow-left"></div>
            <div class="eyebrow eyebrow-right"></div>
            <div class="eye eye-left">
              <div class="iris iris-left"></div>
              <div class="iris iris-small"></div>
            </div>
            <div class="eye eye-right">
              <div class="iris iris-right"></div>
              <div class="iris iris-small"></div>
            </div>
            <div class="nose">
              <div class="nose-top"></div>
              <div class="hold-nose-bottom">
                <div class="nose-bottom"></div>
              </div>
            </div>
            <div id="open" class="mouth-open">
              <div class="tongue"></div>
            </div>
            <div class="hold-mouth">
              <div class="mouth mouth-left"></div>
              <div class="mouth mouth-center"></div>
              <div class="mouth mouth-right"></div>
            </div>
            <div class="cheek cheek-left">
              <div class="hold-thunder hold-thunder1">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
              <div class="hold-thunder hold-thunder2">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
              <div class="hold-thunder hold-thunder3">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
            </div>
            <div class="cheek cheek-right">
              <div class="hold-thunder hold-thunder1">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
              <div class="hold-thunder hold-thunder2">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
              <div class="hold-thunder hold-thunder3">
                <div class="thunder thunder1"></div>
                <div class="thunder thunder2"></div>
                <div class="thunder thunder3"></div>
              </div>
            </div>
            <div class="light light-left"></div>
            <div class="light light-right"></div>
          </div>
          <div class="head head-up"></div>
          <div class="head head-middle"></div>
          <div class="head head-down"></div>
        </div>
        <div class="hold-body" >
          <div class="hand hand-left"></div>
          <div class="hand hand-right"></div>
        </div>
        <div class="foot left-foot"></div>
        <div class="foot right-foot"></div>
        <div class="hold-tail">
          <div class="tail brown tail1"></div>
          <div class="tail brown tail2"></div>
          <div class="tail tail3"></div>
          <div class="tail tail4"></div>
          <div class="tail tail5"></div>
          <div class="tail tail6"></div>
        </div>
      </div>
    </div> -->
    <div
      class="start"
      style="text-align: center; margin-top: 59px; margin-bottom: 40px"
      @click="index()"
      data-aos="zoom-in"
    >
      <div class="content"><h3 style="font-size: 40px">Start</h3></div>
      <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      images: [
        { id: 0, idView: require("../assets/轮播1-new.jpg") },
        { id: 1, idView: require("../assets/轮播2-new.jpg") },
        { id: 2, idView: require("../assets/轮播3-new.jpg") },
      ],
      className: "",
    };
  },
  mounted() {
    this.className = "lun-img-two";
    setTimeout(() => {
      this.className = "lun-img";
    }, 300);
  },
  methods: {
    changeImg: function (e) {
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
    },
    index() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
/* @import "../assets/pic.css"; */
.cal {
  margin-top: 100px;
  text-align: center;
}
.pre {
  display: inline-block;
}

.in-dex {
  text-align: center;
  margin-top: 400px;
  margin-bottom: 400px;
}
.content {
  margin-top: 30px;
  font-size: 64px;
  background: -webkit-linear-gradient(
    top,
    #3da2b5,
    #927ff3,
    #e84151
  ); /*设置线性渐变*/
  /*为了支持更多的浏览器*/
  -webkit-background-clip: text; /*背景被裁剪到文字*/
  -webkit-text-fill-color: transparent; /*设置文字的填充颜色*/
}
hr {
  position: relative;
  margin-top: 100px;
}
.jiange {
  margin-top: 30px;
  margin-bottom: 30px;
}

.login_new {
  width: 1000px;
  height: 900px;
  height: 99%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.login_new .box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 700px;
  height: 750px;
  margin: 20px;
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
    -18px -18px 30px rgba(255, 255, 255, 1);
  border-radius: 50px;
  background-color: #efeeee;
  transition: box-shadow 0.2s ease-out;
  position: relative;
}

.login_new .content-box {
  position: absolute;
  width: 100%;
  text-align: center;
  transition: 1s;
  z-index: 0;
  overflow: hidden;
}

.login_new .box:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}

.login_new .box img {
  width: 400px;
  transition: width 0.2s ease-out;
  -moz-user-select: none; /*图片不可被选中*/
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-user-drag: none; /*图片不可被拖动*/
}

.login_new .box:hover img {
  width: 300px;
  transform: translateX(-160px) translateY(30px);
  transition: 1s;
}

.login_new .box:hover h2 {
  font-weight: 80px;
  letter-spacing: 5px;
  transform: translateX(130px) translateY(-400px);
  transition: 0.5s;
}

.login_new .box h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 20px 8px 8px 8px;
  color: slategrey;
}

.login_new .box .input-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.login_new .box .input-box .content {
  opacity: 0;
  font-size: 42px;
  display: inline-block;
  position: relative;
  text-align: center;
}
.login_new .box:hover .input-box .content {
  opacity: 1;
  transform: translateX(130px) translateY(0px);
  transition-delay: 0.3s;
}

.el-carousel__item {
  border-radius: 5px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.power {
  text-align: center;
  margin-top: 100px;
}
.power .el-carousel {
  margin-top: 80px;
}
.pic {
  position: absolute;
  left: 42.5%;
}
.el-icon-arrow-down {
  width: 100px;
}
.el-card {
  height: 300px;
  background-color: #f8f8f9;
  margin: 10px;
  border-radius: 7px;
}
.carder {
}
</style>
<style lang="scss" scoped>
// @import "../assets/pic.scss";
</style>
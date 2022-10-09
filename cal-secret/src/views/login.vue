<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <div class="login_new">
        <div class="box">
          <div class="content-box">
            <img src="../assets/图片2.png" />
            <h2>Calculator</h2>
          </div>
          <div class="input-box">
            <h4>
              <br />
              a small electronic device that is used for doing calculations
              <br /><br />——by wiki
            </h4>
            <a>
              <a1 @click="cal('cal')">mode1</a1>
              <a2 @click="rule('rule')">mode2</a2>
            </a>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    cal() {
      this.$router.push('/cal');
    },
    rule() {
      this.$router.push('/rule');
    },
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeeee;
}
.login_new {
  width: 1000px;
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
  width: 750px;
  height: 450px;
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
  width: 200px;
  transition: width 0.2s ease-out;
  -moz-user-select: none; /*图片不可被选中*/
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-user-drag: none; /*图片不可被拖动*/
}

.login_new .box:hover img {
  width: 198px;
  transform: translateX(-180px) translateY(30px);
  transition: 1s;
}

.login_new .box:hover h2 {
  font-weight: 1000;
  letter-spacing: 5px;
  transform: translateX(130px) translateY(-190px);
  transition: 1s;
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

/*输入框*/
.login_new .box h4 {
  opacity: 0;
  display: inline-block;
  position: relative;
  width: 40%;
  height: 120px;
  font-weight: 100;
  letter-spacing: 2px;
  margin: 15px 3px 3px 3px;
  color: slategrey;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  border-radius: 20px;
  border: none;
  outline: medium;
  background-color: #efeeee;
  text-align: center;
}

.login_new .box:hover h4 {
  opacity: 1;
  transform: translateX(130px) translateY(64px);
  transition-delay: 0.15s;
}

.login_new .box h4:hover {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  transition: box-shadow 0.2s ease-out;
}

/*最下面的login按钮 */
.login_new .box .input-box a {
  display: flex;
  justify-content: center; /*水平主轴居中*/
  align-items: center; /*垂直交叉轴居中*/
  width: 400px;
  margin-top: 40px;
  transform: translateX(120px) translateY(40px);
}

.login_new .box .input-box a1 {
  display: inline-block;
  padding: 10px 20px;
  background: #43cf7c;
  margin-right: 100px;
  text-decoration: none;
  font-weight: 600;
  color: white;
  opacity: 0;
  visibility: hidden;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 1);
  border-radius: 50px;
}

.login_new .box .input-box a2 {
  display: inline-block;
  padding: 10px 15px;
  background: #0080ff;
  text-decoration: none;
  font-weight: 600;
  color: white;
  opacity: 0;
  visibility: hidden;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 1);
  border-radius: 50px;
}

.login_new .box:hover .input-box a1,
.login_new .box:hover .input-box a2 {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.15s;
}

.login_new .box .input-box a1:hover,
.login_new .box .input-box a2:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 10px 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.1s ease-out;
}
</style>
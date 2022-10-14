<template>
  <div class="glass-container">
    <div class="home">
      <div class="nav">
        <div class="nav-inner">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#f6f6fa"
            text-color="#414652"
            active-text-color="#232935"
            router
          >
            <el-menu-item index="/rule/generate">
              <i class="el-icon-s-check"></i>
              <span slot="title">生成密钥</span>
            </el-menu-item>
            <el-menu-item index="/rule/secret">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">图片密码</span>
            </el-menu-item>
            <el-menu-item index="/rule/encrypt">
              <i class="el-icon-s-order"></i>
              <span slot="title">文件加密</span>
            </el-menu-item>
            <el-menu-item index="/rule/decrypt">
              <i class="el-icon-s-claim"></i>
              <span slot="title">文件解密</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  /* box-shadow: -7px 7px 14px #3c5ecf, 7px -7px 14px #517fff; */
  overflow: hidden;
  background-color: #f9fafc;
}
.nav {
  height: 100%;
  background-color: #f9fafc;
  .nav-inner {
    margin-top: 100px;
    .el-menu {
      width: 250px;
      border: none;
    }
  }
}
.container {
  flex: 1;
  box-sizing: border-box;
  width: 800px;
  height: 680px;
  padding: 20px;
}
.glass-container{
  
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 18px;
    backdrop-filter: blur(20px);
    background-color: rgba(249,250,252, 0.436);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
</style>
<style lang="scss" >
.el-menu {
  .el-menu-item {
    padding: 0 30px !important;
    i {
      font-size: 24px;
      color: #232935;
    }
    span {
      margin-left: 20px;
      letter-spacing: 2px;
      font-size: 16px;
      font-weight: 600;
    }
    border-right: 3px solid #f6f6fa;
  }
  .el-menu-item:hover {
    background-color: #e8e8f6 !important;
  }
  .is-active {
    background-color: #e4e4f5 !important;
    border-color: #5c4ff9;
    i {
      color: #5c4ff9 !important;
    }
  }
}
</style>

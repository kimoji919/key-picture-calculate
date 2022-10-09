<template>
  <el-container>
    <el-head>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{path:'/login'}">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="v.href" v-for="v in brea" :key="v.path">
          <!-- 动态生成面包屑 -->
          {{ v.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-head>
    <el-main>
      <div id="app" style="margin-top:100px">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  created() {
    setTimeout(() => {
      //看板娘  这里会产生跨域问题 但是script里面的src允许跨域加载问题，但是app.vue里面就得修改了
      window.L2Dwidget.init({
        //pluginRootPath: 'http://106.12.119.247/live2dw/',
        pluginRootPath: "./live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-tororo/assets/", //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        //model: {jsonPath: 'http://106.12.119.247/live2dw/live2d-widget-model-tororo/assets/tororo.model.json'},
        model: {
          jsonPath:
            "./live2dw/live2d-widget-model-tororo/assets/tororo.model.json",
        },
        display: { position: "left", width: 350, height: 500, vOffset: -250 }, //调整大小,和位置
        mobile: { show: true }, //要不要盯着你的鼠标看
        log: false,
      });
    }, 10);
  },
  methods: {
    change() {
      console.log("h");
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
  components: {},
  computed: {
    brea() {
      // 监听路由中的面包屑
      return this.$route.matched;
    },
  },
 /* mounted() {
    console.log(this.$route);
    document.querySelector("body").style.backgroundImage =
      "url('https://gd-hbimg.huaban.com/efecf0cf1d9e2fedce889f99aeb466d185a87585273e3f-AGsghA_fw658') ";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundSize = "cover";
    //查看路由信息
  },*/
};
</script>
<style>
el-head {
  position: fixed;
  top: 1%;
  left: 2%;
}
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeeee;
  flex-direction: column;
}
</style>
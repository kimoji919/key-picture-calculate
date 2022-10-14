<template>
  
  <div class="encrypt">
    <h1>图片密码</h1>
    <div class="encrypt-container">
      <div class="encrypt-item upload">
        <p>上传文件获得密码</p>
        <div class="encrypt-body">
          <el-upload
            class="upload-demo"
            drag
            action="http://127.0.0.1:8888/api/secret/upload"
            :data="{ des: this.desPsd }"
            :multiple="false"
            :on-success="
              (res) => {
                return encryptUpload(res);
              }
            "
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </div>
      </div>
    </div>

    <hr />

    <div class="secret-container">
      <div class="secret-item">
        <div class="secret-title">
          <p>密码</p>
        </div>
        <div class="text-box" style="height:100px">
          <div class="form">
            <el-input
              type="textarea"
              placeholder="密码"
              v-model="key"
              style="height: 40px;width: 360px;"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      desPsd: "",
      ruleForm: {
        path: "",
      },
      rules: {
        path: [
          { required: true, message: "请输入文件路径", trigger: "blur" },
          { min: 5, message: "长度太短", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.desPsd = localStorage.getItem("des");
  },
  methods: {
    /* 上传加密 */
    encryptUpload(res) {
      this.key="";
      this.$message({
        message: "上传成功，正在生成密码",
        type: "success",
      });
      this.key=res.key;
      console.log(this.key);
      this.ruleForm.path= "";
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: #333;
  margin-bottom: 40px;
}
.encrypt-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.encrypt-item {
  width: 400px;
  p {
    color: #333;
  }
  .encrypt-body {
    margin-top: 50px;
  }
}
.path {
  .form {
    .el-button {
      margin-top: 20px;
    }
  }
}
.upload {
  margin-right: 100px;
}
@media (max-width: 1720px) {
  .upload {
    margin-right: 0;
  }
}
hr {
  margin-top: 40px;
  background-color: #aaa;
  border: none;
  height: 2px;
  opacity: 0.1;
  width: 80%;
}
.secret-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  .secret-item {
    width: 40%;
    .secret-title {
      width: 150px;
      display: flex;
      justify-content: space-between;
      p {
        color: #666;
        font-size: 18px;
      }
      margin-bottom: 10px;
    }
    .text-box {
      height: 40px;
      width: 150px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
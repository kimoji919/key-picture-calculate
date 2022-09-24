<script setup>
import cal from "./components/cal.vue";
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <el-container>
    <el-header></el-header>
    <el-main>
      <div class="calc">
        <cal />
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
  .calc {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eee;
}

</style>

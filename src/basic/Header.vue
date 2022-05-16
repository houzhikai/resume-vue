<template>
  <div class="wrapper">
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    我是顶部栏，内容可以填充
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  props() {
    // isCollapse: Boolean;
  },
  data() {
    return {
      // isCollapse: true,
    };
  },
};
</script>
<style scoped>
.wrapper {
  height: 60px;
  background: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
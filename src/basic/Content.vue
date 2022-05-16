<template>
  <div class="wrapper">我是内容</div>
</template>
<script>
export default {
  name: "ContentPage",
  data() {
    return {};
  },
};
</script>
<style scoped>
.wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f0f2f5;
}
</style>
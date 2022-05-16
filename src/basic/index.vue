<template>
  <el-container>
    <el-aside>
      <el-menu
        backgroundColor="#001529"
        activeTextColor="#ff6a00"
        text-color="#fff"
        :unique-opened="false"
        style="height: 100vh; width: 200px"
        :default-openeds="current"
      >
        <div class="title">智能操作平台</div>
        <MenuItems v-for="item in menus" :key="item.code" :value="item" />
      </el-menu>
    </el-aside>
    <el-main>
      <!-- <transition name="fade-transform" mode="out-in">
        <keep-alive :exclude="noCaches">
          <router-view />
        </keep-alive>
      </transition> -->
      <Header @isCollapse="toggleCollapse" />
      <Content />
      <Footer />
    </el-main>
  </el-container>
</template>
<script>
import MenuItems from "./menuItems.vue";
import menus from "./menus";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
export default {
  name: "IndexPage",
  components: { MenuItems, Header, Content, Footer },
  data() {
    return {
      isCollapse: true,
      current: ["home", "page", "system"],
      noCaches: [],
      menus,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  methods: {
    toggleCollapse() {
      return !this.isCollapse;
    },
  },
};
</script>
<style scoped>
.el-container {
  /* margin: 20px auto; */
  height: 100%;
}
.el-aside {
  background: white;
  overflow: hidden;
  width: 200px !important;
}
.el-main {
  padding: 0;
  background: #ccc;
  display: flex;
  flex-direction: column;
}
.title {
  color: #fff;
  font-size: 20px;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #333;
  line-height: 47px;
}
</style>

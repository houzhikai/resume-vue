<template>
  <el-submenu :index="value.code">
    <template slot="title">
      <i :class="value.icon" />
      <span style="color: #fff">{{ value.description }}</span>
    </template>
    <div v-for="child in children" :key="child.url">
      <el-menu-item v-if="child.url" :index="child.url" @click="select(child)">
        {{ child.description }}
      </el-menu-item>
      <MenuItems v-if="!child.url && children.length > 0" :value="child" />
    </div>
  </el-submenu>
</template>
<script>
export default {
  name: "menusItems",
  props: {
    value: Object,
  },
  computed: {
    children() {
      if (!this.value.children) {
        return [];
      }
      return this.value.children.filter((child) => {
        return child;
      });
    },
  },
  methods: {
    select(menu) {
      console.log("menu", menu);
      return this.$route.push("#", menu.url);
    },
  },
};
</script>
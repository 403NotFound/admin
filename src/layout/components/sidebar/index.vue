<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :default-active="activeMenu"
        class="menu-container"
        background-color="#1f2d3d"
        active-text-color="#409EFF"
        text-color="#bfcdb9"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters(['permission_routes']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }

      console.log(path)
      return path
    },
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  mounted() {
    console.log(this.$store.state.routes)
  },
}
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
  .menu-container {
    border-right: 0;
  }
}
</style>

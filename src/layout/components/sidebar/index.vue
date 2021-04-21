<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="!sidebar_opend"
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
    ...mapGetters(['permission_routes', 'sidebar_opend']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }

      return path
    },
  },
  data() {
    return {
      isCollapse: true,
    }
  },
  mounted() {
    console.log(this.$store.state.routes)
  },
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-menu {
      width: 100% !important;
      height: 100%;
      border: none;
    }
    .el-menu-collapse {
      width: 56px !important;
    }
    .menu-container {
      border-right: 0;
    }
  }
}
</style>

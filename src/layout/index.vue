<template>
  <div class="layout-cantainer">
    <side-bar class="sidebar-container" :style="sidebarWidth" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar'
import AppMain from './components/AppMain'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  computed: {
    sidebarWidth() {
      if (!this.sidebar_opend) {
        return 'width: 56px'
      }
    },
    ...mapGetters(['sidebar_opend']),
  },
  components: {
    SideBar,
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
.layout-cantainer {
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  .sidebar-container {
    width: $sideBarWidth;
    min-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background: $subMenuBg;
  }
  .main-container {
    flex: 1;
    overflow: scroll;
  }
}
</style>

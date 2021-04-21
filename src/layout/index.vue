<template>
  <div class="layout-cantainer" :class="!sidebar_opend ? 'hidden-sidebar' : ''">
    <side-bar class="sidebar-container" :style="sidebarWidth" />
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar'
import AppMain from './components/AppMain'
import NavBar from './components/navbar'
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
    NavBar,
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
    transition: width 0.28s;
    width: $sideBarWidth;
    min-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background: $menuBg;
    // reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out,
        0s padding-right ease-in-out;
    }
  }
  .main-container {
    flex: 1;
    overflow: scroll;
  }
}
</style>

<template>
  <div class="layout-cantainer">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
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
    overflow: scroll;
  }
  .main-container {
    flex: 1;
    overflow: scroll;
  }
}
</style>

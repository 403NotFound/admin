<template>
  <div>
    <side-bar />
    <app-main />
  </div>
</template>

<script>
import SideBar from './components/sidebar'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: {
    SideBar,
    AppMain
  }
}
</script>

<style lang='scss' scoped>

</style>
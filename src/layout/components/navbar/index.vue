<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      @toggleClick="toggleSidebar"
      :isActive="sidebar_opend"
    />
    <breadcrumb id="breadcrumb-container" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
  },
  data() {
    return {
      sidebarOpen: false,
    }
  },
  computed: {
    ...mapGetters(['sidebar_opend']),
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('changeSideBarStates')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  #hamburger-container {
    line-height: 50px;
    height: 100%;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  #breadcrumb-container {
    height: 50px;
    line-height: 50px;
  }
}
</style>

<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      @toggleClick="toggleSidebar"
      :isActive="sidebar_opend"
    />
    <breadcrumb id="breadcrumb-container" />
    <div class="right-menu">
      <screenfull id="screenfull" />
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <el-image
            style="width: 35px; height: 35px; border-radius: 5px"
            :src="avatar"
            class="drop-image"
          ></el-image>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout"
            >Log Out</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
  },
  data() {
    return {
      sidebarOpen: false,
    }
  },
  computed: {
    ...mapGetters(['sidebar_opend', 'avatar']),
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('changeSideBarStates')
    },
    async logout() {
      console.log(',.,.,.,.,.,')
      console.log(this.$router)
      await this.$store.dispatch('actionLogout')
      this.$router.push('/login')
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
  .right-menu {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    #screenfull {
      margin-right: 15px;
    }
    .drop-image {
      margin-right: 10px;
    }
    & .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <i class="iconfont icon-quanping" @click="click"></i>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  mounted() {
    console.log(screenfull)
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '你的浏览器不支持全屏显示！',
          type: 'warning',
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    },
  },
}
</script>

<style scoped>
.icon-quanping {
  display: inline-block;
  cursor: pointer;
  font-size: 24px;
  vertical-align: 10px;
}
</style>

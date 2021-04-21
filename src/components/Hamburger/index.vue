<template>
  <div
    class="hamburger"
    @click="toggleClick"
    :class="isActive ? 'isActive' : ''"
  >
    <i class="iconfont icon-hanbaocaidan"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  padding: 0 15px;
  .icon-hanbaocaidan {
    font-size: 24px !important;
  }
  &.isActive {
    transform: rotate(180deg);
  }
}
</style>

<template>
  <div>
    <!-- out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style></style>

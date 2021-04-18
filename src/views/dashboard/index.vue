<template>
  <div class="dashboard-container">
    <p v-for="n in 100" :key="n">{{ n }}</p>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  background: skyblue;
  height: 100%;
}
</style>

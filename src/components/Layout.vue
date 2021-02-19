<template>
  <div>
    <Navbar />
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Layout",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
}
</style>

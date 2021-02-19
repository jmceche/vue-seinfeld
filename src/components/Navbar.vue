<template>
  <nav class="navbar">
    <h1>
      <router-link to="/">
        Seinfeld
      </router-link>
    </h1>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
@import "../styles/variables";

.navbar {
  position: relative;
  top: 0;
  width: 100%;
  background: $primary;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  color: $light;
}
</style>

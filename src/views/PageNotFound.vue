<template>
  <Layout>
    <div class="container">
      <h1>
        Not Found
      </h1>
      <router-link to="/" class="home-button">Back to Home</router-link>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
export default {
  name: "NotFound",
  components: {
    Layout
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }
}
.home-button {
  padding: 1rem;
  border-radius: 6px;
  background: blue;
  color: white;
  width: fit-content;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: mapActions(["getShowData"]),
  created() {
    this.getShowData();
  }
};
</script>

<style lang="scss"></style>

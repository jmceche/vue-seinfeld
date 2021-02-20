<template>
  <Layout v-if="showData">
    <div class="container">
      <div class="left">
        <img
          src="/Seinfeld_Serie_de_TV-842891056-large.jpg"
          alt="seinfeld"
          class="cover-image"
        />
      </div>
      <div class="right">
        <div v-html="showData.summary" class="show-overview"></div>
        <SeasonsList />
      </div>
    </div>
  </Layout>
</template>

<script>
import SeasonsList from "../components/SeasonsList.vue";
import Layout from "../components/Layout.vue";
import { mapState } from "vuex";

export default {
  components: { Layout, SeasonsList },
  name: "Home",
  computed: {
    ...mapState(["showData"])
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.left {
  margin-right: 1rem;
}

.right {
  flex: 1;
}
.show-overview {
  margin: 2rem 0;
}

.cover-image {
  max-width: 300px;
}
</style>

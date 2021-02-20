<template>
  <Layout>
    <div v-if="singleEpisode" class="episode-container">
      <div class="left">
        <img :src="`${singleEpisode.image.original}`" alt="cover_image" />
      </div>
      <div class="right">
        <h1 class="episode-title">{{ singleEpisode.name }}</h1>
        <h4>Duration: {{ singleEpisode.runtime }} min</h4>
        <h4>Air Date: {{ singleEpisode.airdate }}</h4>
        <p v-html="singleEpisode.summary" class="episode-summary"></p>
        <a class="go-back" @click="$router.go(-1)">Go Back</a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import { mapState } from "vuex";

export default {
  name: "Details",
  components: { Layout },

  computed: {
    ...mapState(["episodesData", "singleEpisode", "pageNotFound"])
  },
  created() {
    const payload = {
      season: this.$route.params.se,
      episode: this.$route.params.ep
    };
    this.$store.dispatch("getSingleEpisode", payload);
  },
  watch: {
    pageNotFound: {
      immediate: false,
      handler() {
        if (this.pageNotFound) {
          this.$router.push("/not-found");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.episode-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}

.episode-title {
  margin-bottom: 1rem;
}

.episode-summary {
  margin-top: 1rem;
}

.left {
  margin-right: 4rem;

  img {
    max-width: 500px;
  }
}
.right {
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0.5rem 0;
  }
}

.go-back {
  margin: 2rem 0;
  background-color: blue;
  color: white;
  padding: 1rem;
  width: fit-content;
  border-radius: 7px;
  cursor: pointer;
}
</style>

<template>
  <div class="season-list">
    <ul class="seasons-group">
      <li v-for="season in getNumSeasons" :key="season">
        <button class="season-buttons" @click="() => (currentSeason = season)">
          S{{ season }}
        </button>
      </li>
    </ul>
    <h1 class="season-title">Season {{ currentSeason }}</h1>
    <EpisodesList :seasonEpisodes="getSeasonEpisodes(currentSeason)" />
  </div>
</template>

<script>
import EpisodesList from "./EpisodesList";
import { mapGetters } from "vuex";

export default {
  name: "SeasonsList",
  data() {
    return {
      currentSeason: 1
    };
  },
  components: {
    EpisodesList
  },
  computed: {
    ...mapGetters([
      "getShowSeasons",
      "getShowEpisodes",
      "getNumSeasons",
      "getSeasonEpisodes"
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.season-list {
  width: 100%;
}
.season-title {
  background: $primary;
  color: $light;
  text-align: center;
}

.seasons-group {
  list-style: none;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  background: $primary;

  li {
    margin: 0 0;
    color: $light;
    width: 100%;
  }
}
.season-buttons {
  background: inherit;
  width: 100%;
  padding: 1.5rem;
  border: none;
  color: inherit;
  cursor: pointer;
}
</style>

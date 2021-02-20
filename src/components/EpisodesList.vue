<template>
  <div class="episodes-container">
    <ul class="episodes-list">
      <li v-for="episode in seasonEpisodes" :key="episode.id">
        <router-link
          :to="{
            name: 'Details',
            params: { se: episode.season, ep: episode.number }
          }"
        >
          {{ episode.number }} - {{ episode.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EpisodesList",
  props: {
    seasonEpisodes: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.episodes-container {
  width: 100%;
}

.episodes-list {
  list-style: none;
  background: #dadada;

  li {
    padding: 0.5rem 1.5rem;

    &:nth-child(odd) {
      background: #fafafa;
    }
  }
}
</style>

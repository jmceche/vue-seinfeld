import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showData: null,
    singleEpisode: null,
    pageNotFound: false
  },
  mutations: {
    GET_SHOW_FULL_DATA: (state, payload) => (state.showData = payload),
    GET_SINGLE_EPISODE: (state, payload) => (state.singleEpisode = payload),
    SHOW_404: state => (state.pageNotFound = true)
  },
  actions: {
    getShowData: async context => {
      const res = await fetch(
        "https://api.tvmaze.com/shows/530?embed[]=episodes&embed[]=seasons"
      );
      const data = await res.json();

      context.commit("GET_SHOW_FULL_DATA", data);
    },

    getSingleEpisode: async (context, { season, episode }) => {
      try {
        const res = await fetch(
          `http://api.tvmaze.com/shows/530/episodebynumber?season=${season}&number=${episode}`
        );
        const data = await res.json();
        if (data.status === 404) {
          context.commit("SHOW_404");
        } else {
          context.commit("GET_SINGLE_EPISODE", data);
        }
      } catch (error) {
        context.commit("SHOW_404");
      }
    }
  },
  getters: {
    getShowSeasons: state => {
      return state.showData._embedded.seasons;
    },
    getShowEpisodes: state => {
      return state.showData._embedded.episodes;
    },
    getNumSeasons: state => {
      return state.showData._embedded.seasons.length;
    },
    getSeasonEpisodes: state => numSeason => {
      return state.showData._embedded.episodes.filter(
        season => season.season === numSeason
      );
    }
  }
});

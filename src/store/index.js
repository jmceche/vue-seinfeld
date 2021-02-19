import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showData: [],
    seasonData: [],
    episodesData: []
  },
  mutations: {
    GET_SHOW_FULL_DATA: (state, payload) => (state.showData = payload),
    GET_SEASON_DATA: (state, payload) => (state.seasonData = payload),
    GET_EPISODES_DATA: (state, payload) => (state.episodesData = payload)
  },
  actions: {
    getShowData: async context => {
      const res = await fetch(
        "https://api.tvmaze.com/shows/530?embed[]=episodes&embed[]=seasons"
      );
      const data = await res.json();

      context.commit("GET_SHOW_FULL_DATA", data);
      context.commit("GET_SEASON_DATA", data._embedded.seasons);
      context.commit("GET_EPISODES_DATA", data._embedded.episodes);
    }
  }
});

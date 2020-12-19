import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { public_key } from "@/marvel.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comics: [],
    comic: {},
    characters: [],
    character: {},
    feature: {},
  },
  getters: {
    feature: (state) => state.feature,
  },

  // GET ALL
  mutations: {
    getMarvel: (state, payload) => {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/${payload}?apikey=${public_key}`,
        )

        .then((res) => {
          const results = res.data.data.results;
          let counter = 0;
          console.log(results);

          if (payload === "comics") {
            state.comics = [];
            results.forEach((item) => {
              var url = results[counter].thumbnail.path;
              var ext = results[counter].thumbnail.extension;
              results[counter].image = `${url}/portrait_incredible.${ext}`;
              state.comics.push(item);
              counter++;
            });
          } else if (payload === "characters") {
            state.characters = [];
            results.forEach((item) => {
              var url = results[counter].thumbnail.path;
              var ext = results[counter].thumbnail.extension;
              results[counter].image = `${url}/portrait_incredible.${ext}`;
              state.characters.push(item);
              counter++;
            });
          }
        })
        .catch((err) => console.log(err));
    },

    // GET SINGLE COMIC
    getComic(state, comicId) {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${public_key}`,
        )
        .then((res) => {
          var issue = res.data.data.results[0];
          var url = issue.thumbnail.path;
          var ext = issue.thumbnail.extension;
          issue.image = `${url}/portrait_incredible.${ext}`;
          state.comic = issue;
        })
        .catch((err) => console.log(err));
    },

    // GET SINGLE CHARACTER
    getCharacter(state, characterId) {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`,
        )
        .then((res) => {
          state.character = res.data.data.results[0];
        })
        .catch((err) => console.log(err));
    },

    // GET FEATURE
    feature: function(state, name) {
      let feat = state.character.stories.items.find(
        (item) => item.name === name,
      );
      axios
        .get(`${feat.resourceURI}?apikey=${public_key}`)
        .then((res) => {
          state.feature = res.data.data.results[0];
          console.log(state.feature);
        })
        .catch((err) => console.log(err));
    },
  },

  actions: {
    getMarvel: ({ commit }, payload) => {
      commit("getMarvel", payload);
    },
    getComic: ({ commit }, id) => {
      commit("getComic", id);
    },
    getCharacter: ({ commit }, characterId) => {
      commit("getCharacter", characterId);
    },
    feature: ({ commit }, name) => {
      commit("feature", name);
    },
  },

  modules: {},
});

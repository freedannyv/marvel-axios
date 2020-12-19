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
    character: [],
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
          console.log(state.comic);
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
          var characterDetails = res.data.data.results[0];
          var url = characterDetails.thumbnail.path;
          var ext = characterDetails.thumbnail.extension;
          characterDetails.image = `${url}/portrait_incredible.${ext}`;
          characterDetails.features = characterDetails.stories.items;
          characterDetails.featuresUrl = characterDetails.stories.collectionURI;
          characterDetails.available = characterDetails.stories.available;
          state.character = characterDetails;
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
  },
  modules: {},

  methods: {
    createImage(url, size, ext) {
      return `${url}/${size}.${ext}`;
    },
  },
});

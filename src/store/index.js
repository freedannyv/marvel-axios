import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { public_key } from "@/marvel.js";
import { hash } from "@/marvel.js";
import { time_stamp } from "@/marvel.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comics: [],
    comic: {},
    characters: [],
    character: {},
    feature: {},
    cart: [],
  },
  // GETTERS
  getters: {
    feature: (state) => state.feature,
    cart: (state) => state.cart,
  },

  // ACTIONS
  actions: {
    getMarvel: ({ commit }, payload) => {
      axios
        .get(`/${payload}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`)
        .then((res) => {
          if (payload === "comics") {
            commit("getComics", res.data.data.results);
            return;
          }

          if (payload === "characters") {
            commit("getCharacters", res.data.data.results);
            return;
          }
        })
        .catch((err) => console.log(err));
    },
    getComic: ({ commit }, payload) => {
      axios
        .get(
          `/comics/${payload}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`,
        )
        .then((res) => {
          commit("getComic", res.data.data.results[0]);
        })
        .catch((err) => console.log(err));
    },
    getCharacter: ({ commit }, payload) => {
      axios
        .get(
          `/characters/${payload}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`,
        )
        .then((res) => {
          commit("getCharacter", res.data.data.results[0]);
        })
        .catch((err) => console.log(err));
    },

    getFeature: ({ commit }, payload) => {
      const comicId = payload.split("/").pop();
      axios
        .get(
          `/stories/${comicId}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`,
        )
        .then((res) => {
          commit("getFeature", res.data.data.results[0]);
        })
        .catch((err) => console.log(err));
    },

    addToCart: ({ commit }, payload) => {
      commit("addToCart", payload);
    },

    rmvItem: ({ commit }, payload) => {
      commit("rmvItem", payload);
    },
  },

  mutations: {
    // GET FEATURE
    getFeature: function(state, payload) {
      state.feature = payload;
      console.log(state.feature);
    },
    // GET COMICS
    getComics: function(state, comics) {
      state.comics = [];
      comics.forEach((comic) => {
        state.comics.push(comic);
      });
      console.log(state.comics);
    },

    // GET SINGLE COMIC
    getComic(state, payload) {
      state.comic = payload;
      console.log(state.comic);
    },

    // GET CHARACTERS
    getCharacters: function(state, characters) {
      state.characters = [];
      characters.forEach((character) => {
        var url = character.thumbnail.path;
        var ext = character.thumbnail.extension;
        character.image = `${url}/portrait_incredible.${ext}`;
        state.characters.push(character);
      });
    },

    // GET SINGLE CHARACTER
    getCharacter: (state, payload) => {
      state.character = payload;
      console.log(state.character);
    },

    // ADD ITEM TO CART
    addToCart: (state, payload) => {
      if (state.feature.id === payload) {
        state.cart.push(state.feature);
      }
    },

    // REMOVE ITEM FROM CART
    rmvItem: (state, payload) => {
      state.cart.splice(payload, 1);
    },
  },

  modules: {},
});

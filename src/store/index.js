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
        .get(
          `/${payload}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`,
          // `/${payload}?apikey=${public_key}`,
        )
        .then((res) => {
          if (payload === "comics") {
            commit("getComics", res.data.data.results);
          }

          if (payload === "characters") {
            commit("getCharacters", res.data.data.results);
          }
        })
        .catch((err) => console.log(err));
    },
    getComic: ({ commit }, payload) => {
      axios
        .get(`/${payload}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`)
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

    getFeature: ({ commit }, url) => {
      axios
        .get(`${url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`)
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
        var url = comic.thumbnail.path;
        var ext = comic.thumbnail.extension;
        comic.image = `${url}/portrait_incredible.${ext}`;
        state.comics.push(comic);
      });
    },

    // GET SINGLE COMIC
    getComic(state, payload) {
      var url = payload.thumbnail.path;
      var ext = payload.thumbnail.extension;
      payload.image = `${url}/portrait_incredible.${ext}`;
      state.comic = payload;
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
      var url = payload.thumbnail.path;
      var ext = payload.thumbnail.extension;
      payload.image = `${url}/portrait_incredible.${ext}`;
      payload.features = payload.stories.items;
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

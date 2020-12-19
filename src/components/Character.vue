<template>
  <div class="text-center">
    <button
      @click="back"
      class="mt-4 px-2 bg-gray-100 border focus:outline-none hover:bg-red-600 hover:text-white"
    >
      Go Back
    </button>
    <p class="p-4 font-bold">
      {{ character.name }}
    </p>
    <img :src="character.image" class="mx-auto" alt="" />
    <p class="border-b border-red-600 p-4">
      <span class="font-bold">Appearances:</span>
      {{ character.available }}
    </p>

    <!-- DESCRIPTION -->
    <div v-if="character.description" class="border p-2 mt-4">
      <div class="bg-gray-200 border">
        <p class="p-4 font-bold">Description</p>
      </div>
      <p class="p-2">
        {{ character.description }}
      </p>
    </div>

    <!-- FEATURES -->
    <div class="border p-2 mt-4">
      <div class="bg-gray-200 border">
        <p class="p-4 font-bold">Features</p>
      </div>

      <div v-for="s in character.features" :key="s.id" class="p-2 block">
        <router-link
          :to="{
            name: 'feature',
            params: { url: 'test' },
          }"
        >
          {{ s.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { public_key } from "@/marvel.js";
export default {
  data() {
    return {
      public_key,
    };
  },
  mounted() {
    this.$store.dispatch("getCharacter", this.$route.params.id);
  },
  methods: {
    back() {
      return this.$router.go(-1);
    },
  },
  computed: {
    ...mapState({
      character: (state) => state.character,
    }),
  },
};
</script>

<style></style>

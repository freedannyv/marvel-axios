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
    <div v-if="character.description">
      <Heading>
        Description
        <template v-slot:content>
          {{ character.description }}
        </template>
      </Heading>
    </div>

    <!-- FEATURES -->
    <Heading>
      Features
      <template v-slot:content>
        <div
          v-for="feature in character.features"
          :key="feature.name"
          class="p-2 block"
        >
          <router-link
            :to="{
              name: 'feature',
              params: { name: feature.name, url: feature.resourceURI },
            }"
          >
            {{ feature.name }}
          </router-link>
        </div>
      </template>
    </Heading>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { public_key } from "@/marvel.js";
import Heading from "@/utilities/Heading.vue";
export default {
  components: { Heading },
  data() {
    return {
      public_key,
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
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

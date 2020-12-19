<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Characters</p>
    <hr />

    <div class="grid grid-cols-3 xl:grid-cols-4 gap-1 relative p-4">
      <router-link
        :to="{ name: 'character', params: { id: c.id } }"
        v-for="c in character"
        :key="c.id"
        class="text-white hover:text-red-600 transition relative"
      >
        <img :src="c.image" class="hover:bg-black" />
        <div class="flex justify-center items-center">
          <p class="font-bold text-sm shadow-lg text-center absolute top-0">
            {{ c.name }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  mounted() {
    this.getMarvel("characters");
  },
  methods: {
    ...mapActions(["getMarvel"]),
  },
  computed: {
    ...mapState({ character: (state) => state.characters }),
  },
};
</script>

<style></style>

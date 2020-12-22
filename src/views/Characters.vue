<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Characters</p>
    <hr />

    <div class="grid grid-cols-3 xl:grid-cols-4 gap-1 relative mt-4">
      <div
        v-for="c in character"
        :key="c.id"
        class="text-white transition h-full w-full flex items-center justify-center bg-transparent"
      >
        <router-link
          :to="{ name: 'character', params: { id: c.id } }"
          class="flex items-center justify-center relative hover:text-red-600"
        >
          <img
            :src="c.image"
            class="rounded-lg border border-black shadow-md hover:border-red-600"
          />
          <p class="font-bold text-lg shadow-lg text-center absolute">
            {{ c.name }}
          </p>
        </router-link>
      </div>
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

<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Characters</p>
    <hr />
    <div class="p-4">
      <div class="grid grid-cols-2 gap-2 relative">
        <router-link
          :to="{ name: 'character', params: { id: c.id } }"
          v-for="c in character"
          :key="c.id"
          class="flex items-center justify-center"
        >
          <img :src="c.image" alt="" />
          <p
            class="absolute font-bold text-xl text-white shadow-lg text-center"
          >
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

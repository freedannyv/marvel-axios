<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Comics</p>
    <hr />
    <router-link
      :to="{ name: 'comic', params: { id: c.id } }"
      v-for="c in comics"
      :key="c.id"
      class="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-600 hover:text-white"
    >
      <img :src="c.image" />
      {{ c.title }}
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  mounted() {
    this.getMarvel("comics");
  },
  methods: {
    ...mapActions(["getMarvel"]),
  },
  computed: {
    ...mapState({
      comics: (state) => state.comics,
    }),
  },
};
</script>

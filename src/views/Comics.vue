<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Comics</p>
    <hr />
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      <div v-for="c in comics" :key="c.id">
        <router-link
          :to="{ name: 'comic', params: { id: c.id } }"
          class="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-100 hover:text-red-600 transition"
        >
          <img :src="c.image" />
          {{ c.title }}
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

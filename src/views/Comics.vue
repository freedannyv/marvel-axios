<template>
  <div>
    <p class="text-center text-xl font-bold p-4">All Available Comics</p>
    <hr />
    <div class="grid grid-cols-2 md:grid-cols-4">
      <div v-for="comic in comics" :key="comic.id">
        <router-link
          :to="{ name: 'comic', params: { id: comic.id } }"
          class="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-100 hover:text-red-600 transition"
        >
          <img
            :src="
              `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
            "
          />
          {{ comic.title }}
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

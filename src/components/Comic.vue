<template>
  <div class="text-center">
    <button
      @click="back"
      class="mt-4 px-2 bg-gray-100 border focus:outline-none hover:bg-red-600 hover:text-white"
    >
      Go Back
    </button>
    <p class="p-4 font-bold">
      {{ comic.title }}
    </p>
    <img :src="comic.image" class="mx-auto" alt="" />
    <p class="border-b border-red-600 p-4">
      <span class="font-bold">Type:</span> {{ comic.format }}
    </p>

    <div class="border p-2 mt-4">
      <div class="bg-gray-200 border">
        <p class="p-4 font-bold">Description</p>
      </div>
      <p class="p-2">{{ comic.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getComic", this.$route.params.id);
  },
  methods: {
    back() {
      return this.$router.go(-1);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        false;
      }
    }
  },
  computed: {
    ...mapState({
      comic: (state) => state.comic,
    }),
  },
};
</script>

<style></style>

<template>
  <div>
    <p>
      {{ feature.title }}
    </p>
    <br />
    <p class="font-semibold">Featured in this story</p>
    <ul class="">
      <li v-for="member in feature.characters.items" :key="member.id">
        {{ member.name }}
      </li>
    </ul>
    <br />
    <div v-if="feature.description">
      <p class="font-semibold">Description</p>
      <p>
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: this.$route.params.name,
    };
  },
  mounted() {
    this.$store.dispatch("feature", this.name);
  },
  computed: {
    ...mapGetters(["feature"]),
  },
};
</script>

<style></style>

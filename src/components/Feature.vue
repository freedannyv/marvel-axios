<template>
  <div>
    <p>
      {{ feature.title }}
      {{ feature.characters.items }}
      {{ feature.description }}
    </p>
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

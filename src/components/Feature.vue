<template>
  <div class=" w-full text-center px-4">
    <GoBack />
    <button
      @click="back"
      class="mt-4 px-2 bg-gray-100 border focus:outline-none hover:bg-red-600 hover:text-white"
    >
      Go Back
    </button>
    <AddBtn @clicked="addToCart()" />

    <p class="p-4 font-bold">
      {{ feature.title }}
    </p>
    <hr />

    <Heading>
      This story features:
      <template v-slot:content>
        <ul class="mb-4 grid grid-cols-3 gap-2">
          <li
            v-for="member in feature.characters.items"
            :key="member.id"
            class="bg-gray-100 p-1"
          >
            {{ member.name }}
          </li>
        </ul>
      </template>
    </Heading>
    <hr />

    <div v-if="feature.description">
      <Heading>
        Story Details:
        <template v-slot:content>
          {{ feature.description }}
        </template>
      </Heading>
    </div>

    <div v-if="feature.creators.available">
      <Heading>
        Created By:
        <template v-slot:content>
          <div v-if="feature.creators.items" class="flex flex-col">
            <button v-for="creator in feature.creators.items" :key="creator.id">
              <BaseBadge :mode="creator.role">
                <p class="text-sm">
                  {{ creator.name + " | " + creator.role.toUpperCase() }}
                </p>
              </BaseBadge>
            </button>
          </div>
        </template>
      </Heading>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoBack from "@/components/GoBack.vue";
import BaseBadge from "@/components/BaseBadge.vue";
import Heading from "@/utilities/Heading.vue";
import AddBtn from "@/utilities/AddBtn.vue";

export default {
  components: { GoBack, BaseBadge, Heading, AddBtn },

  mounted() {
    this.$store.dispatch("getFeature", this.$route.params.url);
  },
  methods: {
    back() {
      return this.$router.go(-1);
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.feature.id);
    },
  },
  computed: {
    ...mapGetters(["feature"]),
  },
};
</script>

<style></style>

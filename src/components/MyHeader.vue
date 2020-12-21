<template>
  <header
    class=" bg-black w-full grid grid-cols-3 items-center h-32  border-b-4 border-red-600 gap-1"
  >
    <div id="empty" class=""></div>
    <div id="logo">
      <p class="text-center text-white">
        <span class="font-bold text-white bg-red-700 px-1 text-3xl"
          >MARVEL</span
        >
        <br />Superheroes
      </p>
    </div>

    <!-- Shopping Cart -->

    <div class="flex items-center justify-center">
      <router-link :to="{ name: 'cart' }" id="cart" class="">
        <div class="relative flex items-center justify-center">
          <i class="fas fa-shopping-cart fa-2x text-white"></i>
          <p class="absolute top-0 -mr-2 text-red-600 text-base font-semibold">
            {{ cart.length }}
          </p>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cart"]),
    ...mapActions([]),
  },
};
</script>

<style></style>

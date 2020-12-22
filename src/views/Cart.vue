<template>
  <div class=" w-3/4 mx-auto">
    <p
      v-if="cart.length == 0"
      class="p-6 bg-black text-red-600 text-center border-2 border-red-600 mt-4"
    >
      Your cart is empty, yo... Add some stuff to it!
    </p>
    <p v-else class="my-4">Shopping Cart</p>
    <hr />
    <ul>
      <li
        v-for="(c, index) in cart"
        :key="index"
        class="flex mt-2 items-center justify-between bg-gray-100 p-2 rounded-lg shadow-md"
      >
        <p>{{ index + 1 }}. {{ c.title }}</p>
        <div
          class="bg-red-600 rounded-full h-4 w-4 flex items-center justify-center ml-4 cursor-pointer"
          @click="rmvItem(index)"
        >
          <i class="fas fa-times"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["rmvItem"]),
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<style></style>

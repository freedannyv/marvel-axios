<template>
  <div class="">
    <p v-if="cart.length > 0">Your Shopping Cart</p>
    <p>
      Items:
      {{
        cart.length > 0
          ? cart.length
          : "Your cart is empty. Quickly! Add stuff to it!"
      }}
    </p>
    <ul>
      <li
        v-for="(c, index) in cart"
        :key="index"
        class="flex mt-2 items-center"
      >
        <p>{{ index + 1 }}. {{ c.title }}</p>
        <div
          class="bg-red-600 rounded-full h-4 w-4 flex items-center justify-center"
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

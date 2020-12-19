<template>
  <div class="flex h-screen w-full items-center justify-center bg-black">
    <transition name="grow">
      <p class="text-3xl text-white font-bold bg-red-600 px-2">MARVEL</p>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      return this.$router.push({ name: "comics" });
    }, 3000);
  },
};
</script>

<style></style>

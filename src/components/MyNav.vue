<template>
  <div class="bg-gray-200 p-4 flex justify-around">
    <router-link :to="{ name: 'comics', params: { type: 'comics' } }"
      >Comics</router-link
    >
    <router-link :to="{ name: 'characters', params: { type: 'characters' } }"
      >Characters</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-active {
  @apply border-red-600 border-b-2;
}
</style>

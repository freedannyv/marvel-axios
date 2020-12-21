<template>
  <div>
    <div class="bg-gray-200 border mt-4">
      <p class="p-4 font-bold">
        <slot>Title Here</slot>
      </p>
    </div>
    <p class="p-2">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

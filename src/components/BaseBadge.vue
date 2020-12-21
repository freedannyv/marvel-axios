<template>
  <div class="mb-1">
    <div class="border p-2 rounded-md flex items-center" :class="mode">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style>
.editor {
  @apply bg-black text-red-600;
}
.writer {
  @apply bg-red-100;
}
.letterer {
  @apply bg-green-100;
}
.inker {
  @apply bg-yellow-100;
}
.penciller {
  @apply bg-pink-100;
}
.colorist {
  @apply bg-blue-100;
}
</style>

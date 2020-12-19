<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
// import MyHeader from "@/components/MyHeader.vue";
// import MyNav from "@/components/MyNav.vue";
export default {
  // components: { MyHeader, MyNav },
};
</script>

<style></style>

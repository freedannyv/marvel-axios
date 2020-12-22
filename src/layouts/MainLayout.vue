<template>
  <div>
    <MyHeader />
    <MyNav />
    <div class="min-h-screen mx-auto md:w-3/4 px-4">
      <slot></slot>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/Footer.vue";
import MyNav from "@/components/MyNav.vue";
export default {
  components: { MyHeader, MyNav, MyFooter },
};
</script>

<style></style>

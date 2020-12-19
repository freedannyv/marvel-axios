<template>
  <div>
    <MyHeader />
    <MyNav />
    <div class="min-h-screen">
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

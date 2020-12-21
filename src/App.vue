<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </component>
  </div>
</template>

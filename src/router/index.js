import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "splash",
    component: () => import("@/views/Splash.vue"),
  },
  {
    path: "/comics",
    name: "comics",
    component: () => import("../views/Comics.vue"),
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
  {
    path: "/comic/:id",
    name: "comic",
    component: () =>
      import(/* webpackChunkName: "comic" */ "@/components/Comic.vue"),
    props: true,
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
  {
    path: "/characters",
    name: "characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "@/views/Characters.vue"),
    props: true,
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
  {
    path: "/characters/:id",
    name: "character",
    component: () =>
      import(/* webpackChunkName: "character" */ "@/components/Character.vue"),
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
  {
    path: "/feature/:name",
    name: "feature",
    component: () =>
      import(/* webpackChunkName: "character" */ "@/components/Feature.vue"),
    props: true,
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

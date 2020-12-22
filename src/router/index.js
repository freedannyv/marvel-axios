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
    path: "/characters/:id/:name",
    name: "feature",
    component: () =>
      import(/* webpackChunkName: "character" */ "@/components/Feature.vue"),
    props: true,
    meta: {
      layout: () => import("@/layouts/MainLayout.vue"),
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "character" */ "@/views/Cart.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // will go to last position on page if user presses ‘back’
    } else {
      if (to.hash) {
        return { selector: to.hash }; // router will scroll to the hash selector eg. #feature
      }
      return { x: 0, y: 0 };
    }
  },
});

export default router;

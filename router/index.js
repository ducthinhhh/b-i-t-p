import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
    import( "../views/home.vue"),
  },{
    path: "/bmv",
    name: "bmv",
    component: () =>
    import( "../views/bmv.vue"),
  },{
    path: "/porsche",
    name: "porsche",
    component: () =>
    import( "../views/porsche.vue"),
  },{
    path: "/giaPorsche",
    name: "giaPorsche",
    component: () =>
    import( "../views/giaPorsche.vue"),
  },{
    path: "/giaBmv",
    name: "giaBmv",
    component: () =>
    import( "../views/giaBmv.vue"),
  },{
    path: "/giaLambo",
    name: "giaLambo",
    component: () =>
    import( "../views/giaLambo.vue"),
  },{
    path: "/lambo",
    name: "lambo",
    component: () =>
    import( "../views/lambo.vue"),
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

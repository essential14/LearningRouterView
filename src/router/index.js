import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "productsDetail",
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../views/ProductsDetailView.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*", //정규식(위에 정해진 경로가 아닌 다른 경로)
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

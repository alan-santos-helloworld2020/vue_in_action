import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/clientes",
    name: "Clientes",
    component: () =>
      import("../views/Clientes.vue"),
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: () =>
      import("../views/Cadastro.vue"),
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () =>
      import("../views/Sobre.vue"),
  },
];

const router = createRouter({
  history:createWebHashHistory(),
  routes,
});

export default router;

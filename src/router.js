import { createWebHashHistory, createRouter } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import UsersComponent from "./components/UsersComponent.vue";
const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/users", name: "Users", component: UsersComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

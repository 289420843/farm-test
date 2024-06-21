import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "router";

const router = new createRouter({
  history: createWebHistory(),
  routes: routes,
});
createApp(App).use(router).mount("#app");

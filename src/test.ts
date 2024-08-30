import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
createApp(App).use(router).mount("#app");

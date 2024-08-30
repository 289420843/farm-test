export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("views/home.vue"),
    children: [
      {
        path: "page1",
        name: "page1",
        component: () => import("views/page1.vue"),
      },
      {
        path: "page2",
        name: "page2",
        component: () => import("views/page2.vue"),
      },
    ],
  },
];

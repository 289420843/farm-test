export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("views/home.vue"),
  },
  {
    path: "/finance",
    children: [
      {
        path: "submitAccounts",
        name: "test",
        component: () => import("views/finance/submitAccounts/index.vue"),
      },
    ],
  },
];

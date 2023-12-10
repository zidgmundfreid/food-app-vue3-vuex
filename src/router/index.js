import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByingredients from "../views/MealsByingredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredients/:ingredient?",
        name: "byIngredients",
        component: MealsByingredients,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },

  {
    path: "/auth",
    name: "auth",
    component: AuthLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import Blog from "./components/blog.vue";
import Shop from "./components/shop.vue";
import Author from "./components/author.vue";
import HomePage from "./components/HomePage.vue";
import Dashboard from "@/components/dashboard.vue";
import ContactPage from "./components/Contact-page.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/shop", component: Shop },
  { path: "/blog", component: Blog },
  { path: "/author", component: Author },
  { path: "/contact", component: ContactPage },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

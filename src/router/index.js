import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Activitys from "../views/Activitys.vue";
import Contact from "../views/Contact.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: About,
  },
  {
    path: "/activitys",
    name: "Activitys",
    component: Activitys,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
const router = new VueRouter({
  routes,
});
export default router;

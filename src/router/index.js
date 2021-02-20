import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/season/:se/episode/:ep",
    name: "Details",
    component: Details,
    props: true
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: PageNotFound
  },
  {
    path: "*",
    redirect: "/not-found"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

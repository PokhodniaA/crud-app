import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EditPage from "@/views/EditPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/edit",
    name: "EditPage",
    component: EditPage,
    props: true,
    beforeEnter(to, { name }, next) {
      (name == 'Home') ? next() : next('/');
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

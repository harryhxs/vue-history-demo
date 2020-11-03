/*
 * @Author: harry
 * @Date: 2020-11-03 03:50:21
 * @LastEditTime: 2020-11-03 04:12:24
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo8\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

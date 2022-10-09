import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import mode2 from "../views/mode2.vue"
import cal from '../views/cal.vue'
import Login from '../views/login.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: { name: "Login" }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: "index" },
        href: '/login'
    },
    {
        path: "/rule",
        name: "rule",
        component: mode2,
        redirect: {name:"Generate"},
        meta: { title: "mode2" },
        children: [
          {
            path: "generate",
            name: "Generate",
            meta: { title: "Generate" },
            component: () =>
              import("../components/Generate.vue"),
          },
          {
            path: "encrypt",
            name: "Encrypt",
            meta: { title: "En-Crypt" },
            component: () =>
              import("../components/Encrypt.vue"),
          },
          {
            path: "decrypt",
            name: "Decrypt",
            meta: { title: "De-Crypt" },
            component: () =>
              import("../components/Decrypt.vue"),
          },
          {
            path: "secret",
            name: "Secret",
            meta: { title: "Se-Create" },
            component: () =>
              import("../components/Secret.vue"),
          },
        ]
      },
    
    {
        path: '/cal',
        name: 'cal',
        component: cal,
        meta: { title: "mode1" },
        href: "/cal",
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

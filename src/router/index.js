import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import auth from '../middleware/auth';
import nonAuth from '../middleware/nonAuth';
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [{
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: true,
    meta: {
      middleware: nonAuth
    }
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    props: true,
    meta: {
      middleware: auth
    }
  },
  {
    path: "/guru",
    name: "Guru",
    component: () => import("../views/Guru.vue"),
    props: true,
    meta: {
      middleware: nonAuth
    }
  },
  {
    path: "/jadwal-pelajaran",
    name: "Jadwal",
    component: () => import("../views/JadwalPelajaran.vue"),
    props: true,
    meta: {
      middleware: nonAuth
    }
  },
  {
    path: "/mata-pelajaran",
    name: "Matapelajaran",
    component: () => import("../views/Matapelajaran.vue"),
    props: true,
    meta: {
      middleware: nonAuth
    }
  },
  {
    path: "/jam-pelajaran",
    name: "Jampelajaran",
    component: () => import("../views/Jampelajaran.vue"),
    props: true,
    meta: {
      middleware: nonAuth
    }
  },
  {
    path: "/kelas",
    name: "Kelas",
    component: () => import("../views/Kelas.vue"),
    props: true,
    meta: {
      middleware: nonAuth
    }
  }
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//Menciptakan fungsi ' nextMiddleware () ' yang tidak hanya
//menjalankan default ' Next () ' callback tetapi juga memicu
//fungsi middleware berikutnya.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // Jika tidak ada middleware berikutnya,
  // panggilan balik default ' Next () ' dikembalikan.
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    // Jalankan awal pertama Vue router ' Next () ' callback.
    context.next(...parameters);
    // Kemudian jalankan middleware berikutnya dengan yang baru
    //' nextMiddleware () ' callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({
      ...context,
      next: nextMiddleware
    })
  }
}
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({
      ...context,
      next: nextMiddleware
    });
  }
  return next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
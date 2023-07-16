import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../helpers/firebaseConfig";
import Inicio from "../views/Inicio.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import EstudianteListar from "../views/EstudianteListar.vue";
// import EstudianteNew from "../views/EstudianteNew.vue";
import EstudianteForm from "../views/EstudianteForm.vue";
import EstudianteView from "../views/EstudianteView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/students",
    name: "students",
    component: EstudianteListar,
    meta: { requiresAuth: true },
  },
  {
    path: "/form-student/:id?",
    name: "form-student",
    component: EstudianteForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/viewE/:id",
    name: "viewE",
    component: EstudianteView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Agregar un guardia de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next("/login"); // Redirige a la página de inicio de sesión si no hay un usuario autenticado y la ruta requiere autenticación
  } else {
    next(); // Continúa navegando a la ruta deseada
  }
});

export default router;

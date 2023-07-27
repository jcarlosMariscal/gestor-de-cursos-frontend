import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../helpers/firebaseConfig";
import Inicio from "../views/Inicio.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import EstudianteListar from "../views/EstudianteListar.vue";
// import EstudianteNew from "../views/EstudianteNew.vue";
import EstudianteForm from "../views/EstudianteForm.vue";
import EstudianteView from "../views/EstudianteView.vue";
import CursoListar from "@/views/CursoListar.vue";
import CursoForm from "../views/CursoForm.vue";
import CursoView from "../views/CursoView.vue";
import CursoEstudianteForm from "../views/CursoEstudianteForm.vue";

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
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
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
    path: "/view-student/:id",
    name: "view-student",
    component: EstudianteView,
    meta: { requiresAuth: true },
  },
  {
    path: "/courses",
    name: "courses",
    component: CursoListar,
    meta: { requiresAuth: true },
  },
  {
    path: "/form-course/:id?",
    name: "form-course",
    component: CursoForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/view-course/:id",
    name: "view-course",
    component: CursoView,
    meta: { requiresAuth: true },
  },
  {
    path: "/select-courses/:id",
    name: "select-courses",
    component: CursoEstudianteForm,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Agregar un guardia de navegación para proteger rutas
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  try {
    const currentUser = await new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        resolve(user);
      }, reject);
    });

    if (requiresAuth && !currentUser) {
      next("/login");
    } else {
      next(); // Continúa navegando a la ruta deseada
    }
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
    next("/login"); // En caso de error, redirige a la página de inicio de sesión
  }
});

export default router;

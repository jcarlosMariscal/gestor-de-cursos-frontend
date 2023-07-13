import { createRouter, createWebHistory } from "vue-router";
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
  },
  {
    path: "/form-student/:id?",
    name: "form-student",
    component: EstudianteForm,
  },
  {
    path: "/viewE/:id",
    name: "viewE",
    component: EstudianteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

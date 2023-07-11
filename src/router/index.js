import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import EstudianteListar from "../views/EstudianteListar.vue";
import EstudianteNew from "../views/EstudianteNew.vue";
import EstudianteEdit from "../views/EstudianteEdit.vue";
import EstudianteView from "../views/EstudianteView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/listar-estudiantes",
    name: "listar-estudiantes",
    component: EstudianteListar,
  },
  {
    path: "/createE",
    name: "create",
    component: EstudianteNew,
  },
  {
    path: "/editE/:id",
    name: "editE",
    component: EstudianteEdit,
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

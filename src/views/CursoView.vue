<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div class="card-header bg-dark text-white text-center">
          Detalle del curso
        </div>
        <div class="card-body">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{ path: '/courses' }" class="btn btn-info"
              ><i class="fa-solid fa-arrow-left"></i> Regresar a la
              lista</router-link
            >
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <label v-text="nombre" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <label v-text="horas" class="form-control"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mostrarAlerta, enviarSolicitud } from "../helpers/funciones";
import { useRoute } from "vue-router";
import axios from "axios";


export default {
  name: "HomeView",
  data() {
    return {
      id: 0,
      nombre: "",
      horas: "",
      url: "http://academicobackend.test/api/v1/cursos",
      cargando: false,
      darkmode: false,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getCurso();
        const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
  },
  methods: {
    getCurso() {
      axios.get(this.url).then(res => {
        this.nombre = res.data.data.nombre;
        this.horas = res.data.data.horas;
})
    },
  },
};
</script>

<style scoped></style>

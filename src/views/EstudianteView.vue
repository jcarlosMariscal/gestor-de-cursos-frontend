<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div class="card-header bg-dark text-white text-center">
          Detalle del estudiante
        </div>
        <div class="card-body">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{ path: '/students' }" class="btn btn-info"
              ><i class="fa-solid fa-arrow-left"></i> Regresar a la
              lista</router-link
            >
          </div>
          <div class="d-grid col-6 mx-auto mb-3">
            <img
              alt=""
              v-if="foto"
              style="height: 18rem"
              :src="foto"
              id="fotoimg"
              class="img-thumbnail"
            />
            <img
              alt=""
              v-else
              id="fotoimg"
              style="height: 18rem"
              src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__user_person_profile-256.png"
              class="img-thumbnail"
            />
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
            <label v-text="apellido" class="form-control"></label>
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
      apellido: "",
      foto: "",
      url: "http://academicobackend.test/api/v1/estudiantes",
      cargando: false,
      darkmode: false,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getEstudiante();
        const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
  },
  methods: {
    getEstudiante() {
      axios.get(this.url).then(res => {
        this.nombre = res.data.data.nombre;
        this.apellido = res.data.data.apellido;
        this.foto = res.data.data.foto;
})
    },
  },
};
</script>

<style scoped></style>
../helpers/funciones

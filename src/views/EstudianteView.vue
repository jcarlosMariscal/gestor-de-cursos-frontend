<template>
  <div class="row mt-3 mb-3">
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
          <div class="d-grid col-6 mx-auto mb-3 d-flex justify-content-center">
            <img
              alt=""
              v-if="foto"
              style="height: 10rem; width: 10rem"
              :src="foto"
              id="fotoimg"
              class="img-thumbnail"
            />
            <img
              alt=""
              v-else
              id="fotoimg"
              style="height: 10rem"
              src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__user_person_profile-256.png"
              class="img-thumbnail"
            />
          </div>
          <div class="row">
            <hr />
            <h6 class="text-center">Información Personal</h6>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-user"></i
                ></span>
                <label v-text="nombre" class="form-control"></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-user"></i
                ></span>
                <label v-text="apellido" class="form-control"></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-phone"></i
                ></span>
                <label v-text="telefono" class="form-control"></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-envelope"></i
                ></span>
                <label v-text="correo" class="form-control"></label>
              </div>
            </div>
            <hr />
            <h6 class="text-center">Información Generacional</h6>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-users"></i
                ></span>
                <label
                  v-text="generacionData.nombre"
                  class="form-control"
                ></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-file-lines"></i
                ></span>
                <label
                  v-text="generacionData.descripcion"
                  class="form-control"
                ></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-calendar-check"></i
                ></span>
                <label
                  v-text="generacionData.fecha_inicio"
                  class="form-control"
                ></label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="input-group mb-3">
                <span class="input-group-text"
                  ><i class="fa-solid fa-calendar-xmark"></i
                ></span>
                <label
                  v-text="generacionData.fecha_final"
                  class="form-control"
                ></label>
              </div>
            </div>
            <hr />
            <h6 class="text-center" v-if="cursos.length > 0">
              Cursos/Materias
            </h6>
            <div class="d-grid col-6 mx-auto mb-3" v-else>
              <router-link class="btn btn-success" :to="redirectTo"
                >Añadir cursos</router-link
              >
            </div>
            <div class="col-lg-6 col-md-12" v-for="cur in cursos" :key="cur.id">
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  :style="{ background: cur.color }"
                  ><i class="fa-solid text-white" :class="cur.icono"></i
                ></span>
                <label v-text="cur.nombre" class="form-control"></label>
              </div>
            </div>
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
      telefono: "",
      correo: "",
      generacionData: {},
      cursos: [],
      redirectTo: "",
      url: "http://academicobackend.test/api/v1/estudiantes",
      url2: "http://academicobackend.test/api/v1/generaciones",
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
        console.log(res);
        const id = res.data.data.id;
        this.redirectTo = "/select-courses/" + id;
        this.nombre = res.data.data.nombre;
        this.apellido = res.data.data.apellido;
        this.foto = res.data.data.foto;
        this.telefono = res.data.data.telefono;
        this.correo = res.data.data.email;
        const generacion_id = res.data.data.generacion_id;
        axios.get(`${this.url2}/${generacion_id}`).then(res => this.generacionData = res.data.data);
        axios.get(`${this.url}/cursos`).then(res => this.cursos = res.data.data);
      })
    },
  },
};
</script>

<style scoped></style>

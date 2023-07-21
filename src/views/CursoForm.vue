<template>
  <div class="row mt-3 mb-5">
    <div class="col-md-6 offset-md-3">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div class="card-header bg-dark text-white text-center">
          {{ formEdit ? "Editar Curso" : "Registrar Curso" }}
        </div>
        <div class="card-body">
          <form @submit="guardar">
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                class="form-control"
                v-model="nombre"
                id="nombre"
                placeholder="Ingrese su nombre"
                required
                maxlength="50"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="number"
                class="form-control"
                v-model="horas"
                id="horas"
                placeholder="Ingrese las horas"
                required
                min="1"
              />
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-warning">
                <i
                  class="fa-solid"
                  :class="{
                    'fa-refresh': formEdit,
                    'fa-floppy-disk': !formEdit,
                  }"
                ></i>
                {{ formEdit ? "Guardar Cambios" : "Registrar" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mostrarAlerta, enviarSolicitud } from "../helpers/funciones";
import { useRoute, useRouter} from "vue-router";
import axios from "axios";


export default {
  name: "HomeView",
  data() {
    return {
      id: false,
      nombre: "",
      horas: "",
      url: "http://academicobackend.test/api/v1/cursos",
      cargando: false,
      formEdit: false,
      darkmode: false,
      router: null,
    };
  },
  mounted() {
    const route = useRoute();
    this.router = useRouter();
    this.id = route.params.id;
    if (this.id) this.formEdit = true;
    if (this.formEdit) {
      this.url += '/' + this.id;
      this.getCurso();

    }
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
    guardar(e) {
      e.preventDefault();

      if (this.nombre.trim() == "") {
        mostrarAlerta("Ingrese un nombre", "warning", "nombre")
      }else if (!this.horas || this.horas <= 0) {
        mostrarAlerta("El mínimo de horas para un curso deber ser 1", "warning", "horas")
      } else {
        let parametros = { nombre: this.nombre.trim(), horas: this.horas}
        if (this.formEdit) {
          enviarSolicitud('PUT', parametros, this.url, 'Curso actualizado')
        } else {
          enviarSolicitud('POST',parametros, this.url, 'Curso registrado')
        }
        setTimeout(() => this.router.push("/courses"), 200);
      }
    },
  },
};
</script>

<style scoped></style>

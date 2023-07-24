<template>
  <div class="row mt-3 mb-5">
    <div class="col-md-6 offset-md-3">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div
          class="card-header bg-dark text-white text-center bg-content2"
          :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
        >
          {{ formEdit ? "Editar Estudiante" : "Registrar estudiante" }}
        </div>
        <div class="card-body">
          <form @submit="guardar">
            <div
              class="d-grid col-6 mx-auto mb-3 d-flex justify-content-center"
            >
              <img
                alt=""
                v-if="foto"
                style="height: 10rem"
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
              <div class="col-lg-6 col-md-12">
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
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-user"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-phone"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="telefono"
                    id="telefono"
                    placeholder="Ingrese su telefono"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-envelope"></i
                  ></span>
                  <input
                    type="email"
                    class="form-control"
                    v-model="correo"
                    id="correo"
                    placeholder="Ingrese su correo"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-hand-pointer"></i
                  ></span>
                  <select
                    class="form-control"
                    v-model="select_generacion"
                    required
                  >
                    <option value="">Seleccione una generación</option>
                    <option
                      :value="gen.id"
                      v-for="gen in generaciones"
                      :key="gen.id"
                    >
                      {{ gen.nombre }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-image"></i
                  ></span>
                  <input
                    type="file"
                    class="form-control"
                    accept="image/png, image/jpg, image/gift"
                    @change="previsualizarFoto"
                  />
                </div>
              </div>
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
import { mostrarAlerta, enviarSolicitud, redirectCustomSelect } from "../helpers/funciones";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";


export default {
  name: "HomeView",
  data() {
    return {
      id: false,
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      foto: "",
      select_generacion: "",
      url: "http://academicobackend.test/api/v1/estudiantes",
      cargando: false,
      formEdit: false,
      darkmode: false,
      router: null,
      generaciones: []
    };
  },
  mounted() {
    const route = useRoute();
    this.router = useRouter();
    this.id = route.params.id;
    if (this.id) this.formEdit = true;
    if (this.formEdit) {
      this.url += '/' + this.id;
      this.getEstudiante();

    }
    this.getGeneraciones();
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
        this.correo = res.data.data.email;
        this.telefono = res.data.data.telefono;
        this.select_generacion = res.data.data.generacion_id;
})
    },
    getGeneraciones() {
      axios.get("http://academicobackend.test/api/v1/generaciones").then(res => {
        this.generaciones = res.data;
        console.log(res);
      })
    },
    guardar(e) {
      e.preventDefault();
      let miFoto = document.getElementById("fotoimg");
      this.foto = miFoto.src;

      if (this.nombre.trim() == "") {
        mostrarAlerta("Ingrese un nombre", "warning", "nombre")
      }else if (this.apellido.trim() == "") {
        mostrarAlerta("Ingrese un apellido", "warning", "apellido")
      } else {
        let parametros = { nombre: this.nombre.trim(), apellido: this.apellido.trim(), foto: this.foto.trim(), telefono: this.telefono, email: this.correo, generacion_id: this.select_generacion }
        console.log(parametros);
        if (this.formEdit) {
          enviarSolicitud('PUT', parametros, this.url, 'Estudiante actualizado');
          setTimeout(() => this.router.push("/students"), 200);
        } else {
          enviarSolicitud('POST', parametros, this.url, 'Estudiante registrado', false).then((res) => {
            redirectCustomSelect(
          "Estudiante registrado",
              `¿Desea asignar cursos a este estudiante?`, "/students", `/select-courses/${res.data.id}`);
          });
        }
      }
    },
    previsualizarFoto(e) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload =  () => {
        let miFoto = document.getElementById("fotoimg");
        miFoto.src = reader.result;
        this.foto = miFoto.src;
      };
    },
  },
};
</script>

<style scoped></style>
../helpers/funciones

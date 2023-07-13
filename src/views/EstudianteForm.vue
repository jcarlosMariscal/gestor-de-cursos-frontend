<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          {{ formEdit ? "Editar Estudiante" : "Registrar estudiante" }}
        </div>
        <div class="card-body">
          <form @submit="guardar">
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
                type="text"
                class="form-control"
                v-model="apellido"
                id="apellido"
                placeholder="Ingrese su apellido"
                required
                maxlength="50"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa-solid fa-gift"></i
              ></span>
              <input
                type="file"
                class="form-control"
                accept="image/png, image/jpg, image/gift"
                @change="previsualizarFoto"
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
import { mostrarAlerta, enviarSolicitud } from "../funciones";
import { useRoute } from "vue-router";
import axios from "axios";


export default {
  name: "HomeView",
  data() {
    return {
      id: false,
      nombre: "",
      apellido: "",
      foto: "",
      url: "http://academicobackend.test/api/v1/estudiantes",
      cargando: false,
      formEdit: false,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    if (this.id) this.formEdit = true;
    if (this.formEdit) {
      this.url += '/' + this.id;
      this.getEstudiante();

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
    guardar(e) {
      e.preventDefault();
      let miFoto = document.getElementById("fotoimg");
      this.foto = miFoto.src;

      if (this.nombre.trim() == "") {
        mostrarAlerta("Ingrese un nombre", "warning", "nombre")
      }else if (this.apellido.trim() == "") {
        mostrarAlerta("Ingrese un apellido", "warning", "apellido")
      } else {
        let parametros = { nombre: this.nombre.trim(), apellido: this.apellido.trim(), foto: this.foto.trim() }
        if (this.formEdit) {
          enviarSolicitud('PUT',parametros, this.url, 'Estudiante actualizado')
        } else {
enviarSolicitud('POST',parametros, this.url, 'Estudiante registrado')
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

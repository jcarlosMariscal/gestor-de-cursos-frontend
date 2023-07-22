<template>
  <div class="row mt-4">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table
          class="table-bordered table table-hover bg-content"
          :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>FOTO</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>REGISTRO</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="6" class="text-center">
                <span class="loader" :class="{ 'mode-dark': darkmode }"></span>
                <p>Cargando datos ...</p>
              </td>
            </tr>
            <tr v-else v-for="(est, i) in estudiantes" :key="est.id">
              <td v-text="i + 1"></td>
              <td v-text="est.id"></td>
              <td class="text-center">
                <img
                  alt=""
                  v-if="est.foto"
                  style="width: 3rem !important"
                  :src="est.foto"
                  class="img-thumbnail"
                />
                <img
                  alt=""
                  v-else
                  style="height: 3rem !important"
                  src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__user_person_profile-256.png"
                  class="img-thumbnail"
                />
              </td>
              <td v-text="est.nombre"></td>
              <td v-text="est.apellido"></td>
              <td
                v-text="new Date(est.created_at).toLocaleDateString('en-US')"
              ></td>
              <td>
                <router-link
                  :to="{ path: 'view-student/' + est.id }"
                  class="btn btn-primary"
                  ><i class="fa-solid fa-eye"></i
                ></router-link>
                &nbsp;
                <router-link
                  :to="{ path: 'form-student/' + est.id }"
                  class="btn btn-success"
                  ><i class="fa-solid fa-edit"></i
                ></router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  @click="eliminar(est.id, est.nombre)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { confirmar } from "../helpers/funciones";

export default {
  name: "HomeView",
  data() {
    return { estudiantes: null, cargando: false, darkmode: false };
  },
  mounted() {
    this.getEstudiantes();
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
  },
  methods: {
    getEstudiantes() {
      this.cargando = true;
      axios
        .get("http://academicobackend.test/api/v1/estudiantes")
        .then((res) => {
          console.log(res);
          this.estudiantes = res.data;
          this.cargando = false;
        });
    },
    eliminar(id, nombre) {
      confirmar(
        "http://academicobackend.test/api/v1/estudiantes/",
        id,
        "Eliminar registro",
        `Realmente desea eliminar a ${nombre} ?`
      );
      this.cargando = false;
    },
  },
};
</script>
<style scoped>
.loader {
  margin-top: 2rem;
  width: 62px;
  height: 62px;
  border: 5px solid #1a7e91;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader.mode-dark {
  border: 5px solid #fff;
  border-bottom-color: transparent;
}
</style>

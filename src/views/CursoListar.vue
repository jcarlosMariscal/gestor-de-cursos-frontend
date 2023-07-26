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
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>ICONO</th>
              <th>HORAS</th>
              <th>FECHA</th>
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
            <tr v-else v-for="(cur, i) in cursos" :key="cur.id">
              <td v-text="i + 1"></td>
              <td v-text="cur.id"></td>
              <td v-text="cur.nombre"></td>
              <td v-text="cur.descripcion"></td>
              <td>
                <div
                  class="d-flex align-items-center justify-content-center"
                  style="
                    width: 3rem !important;
                    height: 3rem !important;
                    border-radius: 50%;
                  "
                  :style="{ background: cur.color + '!important' }"
                >
                  <i
                    class="fa-solid text-white"
                    :class="cur.icono"
                    style="font-size: 1.5rem"
                  ></i>
                </div>
              </td>
              <td v-text="cur.horas"></td>
              <td
                v-text="new Date(cur.created_at).toLocaleDateString('en-US')"
              ></td>
              <td>
                <router-link
                  :to="{ path: 'view-course/' + cur.id }"
                  class="btn btn-primary"
                  ><i class="fa-solid fa-eye"></i
                ></router-link>
                &nbsp;
                <router-link
                  :to="{ path: 'form-course/' + cur.id }"
                  class="btn btn-success"
                  ><i class="fa-solid fa-edit"></i
                ></router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  @click="eliminar(cur.id, cur.nombre)"
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
  name: "CursoListar",
  data() {
    return { cursos: null, cargando: false, darkmode: false };
  },
  mounted() {
    this.getCursos();
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
  },
  methods: {
    getCursos() {
      this.cargando = true;
      axios.get("http://academicobackend.test/api/v1/cursos").then((res) => {
        console.log(res);
        this.cursos = res.data;
        this.cargando = false;
      });
    },
    eliminar(id, nombre) {
      confirmar(
        "http://academicobackend.test/api/v1/cursos/",
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
../helpers/funciones

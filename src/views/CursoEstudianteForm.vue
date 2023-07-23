<template>
  <div class="row mt-3 mb-5">
    <div class="col-md-10 offset-md-1">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div class="card-header bg-dark text-white text-center">
          Selecciona los cursos
        </div>
        <div class="card-body">
          <div v-if="cargando">
            <div colspan="6" class="text-center">
              <span class="loader" :class="{ 'mode-dark': darkmode }"></span>
              <p>Cargando cursos ...</p>
            </div>
          </div>
          <section v-else>
            <div class="tile" v-for="(cur, i) in cursos" :key="cur.id">
              <input type="checkbox" name="sports" :id="'course' + cur.id" />
              <label :for="'course' + cur.id">
                <i class="fas fa-search"></i>
                <h6>{{ cur.nombre }}</h6>
              </label>
            </div>
            <!-- <div class="tile">
              <input type="checkbox" name="sports" id="course2" />
              <label for="course2">
                <i class="fas fa-shuttle-space"></i>
                <h6>Astro Física</h6>
              </label>
            </div>
            <div class="tile">
              <input type="checkbox" name="sports" id="course3" />
              <label for="course3">
                <i class="fas fa-atom"></i>
                <h6>Físico Nuclear</h6>
              </label>
            </div>
            <div class="tile">
              <input type="checkbox" name="sports" id="course4" />
              <label for="course4">
                <i class="fas fa-book-atlas"></i>
                <h6>Geofísica</h6>
              </label>
            </div>
            <div class="tile">
              <input type="checkbox" name="sports" id="course5" />
              <label for="course5">
                <i class="fas fa-ear-listen"></i>
                <h6>Acústica</h6>
              </label>
            </div>
            <div class="tile">
              <input type="checkbox" name="sports" id="course6" />
              <label for="course6">
                <i class="fas fa-dna"></i>
                <h6>Biología</h6>
              </label>
            </div>
            <div class="tile">
              <input type="checkbox" name="sports" id="course7" />
              <label for="course7">
                <i class="fas fa-calculator"></i>
                <h6>Matemáticas</h6>
              </label>
            </div> -->
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mostrarAlerta, enviarSolicitud } from "../helpers/funciones";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";


export default {
  name: "CursoEstudianteForm",
  data() {
    return {
      id: false,
      url: "http://academicobackend.test/api/v1/cursos",
      cargando: false,
      formEdit: false,
      darkmode: false,
      router: null,
      cursos: []
    };
  },
  mounted() {
    const route = useRoute();
    this.router = useRouter();
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
    this.getCursos();
  },
  methods: {
    getCursos() {
      this.cargando = true;
      axios
        .get("http://academicobackend.test/api/v1/cursos")
        .then((res) => {
          console.log(res);
          this.cursos = res.data;
          this.cargando = false;
        });
    },
    guardar(e) {
      e.preventDefault();
      let miFoto = document.getElementById("fotoimg");
      this.foto = miFoto.src;
    },
  },
};
</script>

<style scoped>
section {
  /* width: 100vmin; */
  /* height: 100vh; */
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
  /* left: 50%; */
  /* top: 50%; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}
.tile {
  height: 140px;
  width: 140px;
  position: relative;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid transparent;
  outline: none;
  box-shadow: 15px 15px 25px rgba(2, 28, 53, 0.05);
}
input[type="checkbox"]:after {
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  content: "\f111";
  font-size: 22px;
  top: 10px;
  left: 10px;
  color: #e2e6f3;
}
input[type="checkbox"]:hover {
  transform: scale(1.08);
}
input[type="checkbox"]:checked {
  /* border: 3px solid green; */
  background-color: rgba(19, 155, 91, 0.9);
}
input[type="checkbox"]:checked + label i,
input[type="checkbox"]:checked + label h6 {
  color: white !important;
}
input[type="checkbox"]:checked:after {
  font-weight: 900;
  content: "\f058";
  color: #478bfb;
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
label .fas {
  font-size: 60px;
  color: #2c2c51;
}
input[type="checkbox"]:checked + label .fas {
  animation: grow 0.5s;
}
@keyframes grow {
  50% {
    font-size: 80px;
  }
}
label h6 {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #7b7b93;
}
</style>

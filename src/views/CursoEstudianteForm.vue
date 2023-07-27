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
            <div class="tile" v-for="(cur, index) in cursos" :key="cur.id">
              <input
                type="checkbox"
                name="sports"
                :id="'course' + cur.id"
                :checked="cur.selected"
                @click="seleccionar(index)"
                :style="{
                  background: cur.selected ? cur.color + '!important' : 'white',
                }"
              />
              <label :for="'course' + cur.id">
                <i class="fas" :class="cur.icono"></i>
                <h6>{{ cur.nombre }}</h6>
              </label>
            </div>
          </section>
          <div class="text-center">
            <div class="d-grid col-6 mx-auto mb-3">
              <button
                type="button"
                class="btn btn-success"
                @click.prevent="guardar"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mostrarAlerta, enviarSolicitud, alertaForm } from "../helpers/funciones";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";


export default {
  name: "CursoEstudianteForm",
  data() {
    return {
      id: false,
      id_student: 0,
      url: "http://academicobackend.test/api/v1/estudiantes",
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
    this.id_student = route.params.id;
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }
    this.getCursos();
  },
  methods: {
    formattedDate () {
  const today = new Date();
  const year = today.getFullYear().toString().padStart(4, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
},
    getCursos() {
      this.cargando = true;
      axios
        .get("http://academicobackend.test/api/v1/cursos")
        .then((res) => {
          console.log(res);
          this.cursos = res.data.map((curso) => {
    return { ...curso, selected: false };
  });
          this.cargando = false;
        });
    },
    guardar(e) {
      e.preventDefault();
      let miFoto = document.getElementById("fotoimg");
      this.foto = miFoto.src;
    },
    seleccionar(index) {
      const select = this.cursos[index];
      select.selected = !select.selected;
      // console.log(selected)
    },
    guardar() {
      console.log(this.cursos);
      const data = this.cursos
  .filter((el) => el.selected) // Filtra solo los elementos con selected=true
  .map((el) => el.id); // Crea un nuevo arreglo solo con las propiedades 'id' de los elementos seleccionados

      // console.log(data);
      if (data.length <= 0) {
         mostrarAlerta("Seleccione al menos un curso", "warning")
      } else {
        data.forEach(el => {
          let parametros = {
            id: el,
            fecha_inscripcion: this.formattedDate(),
            calificacion: 0,
            nota: "Estudiante registrado al curso."
          }
          enviarSolicitud('POST', parametros, `${this.url}/${this.id_student}/relacionar-curso`, 'Estudiante registrado', false);
        });
        alertaForm("Cursos asignados correctamente", "success")
        this.router.push("/students");
      }
    }
  },
};
</script>

<style scoped>
section {
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
  /* transform: scale(1.08); */
  animation: move 0.6s infinite;
}
@keyframes move {
  50% {
    transform: translateY(2.5%);
  }
}
input[type="checkbox"]:checked + label i,
input[type="checkbox"]:checked + label h6 {
  color: white !important;
}
input[type="checkbox"]:checked:after {
  font-weight: 900;
  content: "\f058";
  color: white;
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

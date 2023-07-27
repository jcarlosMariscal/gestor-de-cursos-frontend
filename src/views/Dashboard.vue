<template>
  <div class="row mt-3">
    <div class="col-md-10 offset-md-1">
      <div class="dashboard">
        <main class="content-wrap">
          <div class="content">
            <section class="info-boxes">
              <div
                class="info-box bg-content"
                style="border: none !important"
                :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
              >
                <div class="box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z"
                    />
                    <path
                      d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z"
                    />
                  </svg>
                </div>

                <div class="box-content">
                  <span
                    class="big theme-text"
                    :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
                    >Generaciones</span
                  >
                  <div class="box-actions">
                    <!-- <button><i class="fas fa-eye"></i></button> -->

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGen"
                    >
                      <i class="fas fa-plus" title="Agregar generación"></i>
                    </button>
                    <!-- <button>
                      <i class="fas fa-download"></i>
                    </button> -->
                  </div>
                </div>
              </div>

              <div
                class="info-box bg-content d-flex flex-column align-items-center justify-content-center en-desarrollo"
                style="border: none !important"
                :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
              >
                <i class="fas fa-cog fa-custom" style="font-size: 3.2rem"></i>
                <p>En desarrollo...</p>
              </div>
            </section>
          </div>
        </main>
        <section class="graphics p-3">
          <canvas ref="myChart" class="bg-content p-3"></canvas>
        </section>
        <div class="row graphics2 mb-5">
          <div class="col-12">
            <canvas ref="myChart2" class="bg-content p-3"></canvas>
          </div>
        </div>
        <div class="row graphics3">
          <!-- <div class="col-12">
            <canvas
              ref="myChart2"
              class="bg-content p-3"
              style="width: 100%"
            ></canvas>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalGen"
    tabindex="-1"
    aria-labelledby="modalGenLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalGenLabel">
            Agregar nueva Generación
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="closeGen"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="guardarGeneracion">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-user"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="nombre"
                    id="nombre"
                    placeholder="Ingrese un nombre"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-user"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="descripcion"
                    id="descripcion"
                    placeholder="Ingrese una descripcion"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3" title="Fecha de inicio">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-calendar-check"></i
                  ></span>
                  <label for=""></label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="fecha_inicio"
                    id="fecha_inicio"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3" title="Fecha de finalización">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-calendar-xmark"></i
                  ></span>
                  <input
                    type="date"
                    class="form-control"
                    v-model="fecha_final"
                    id="fecha_final"
                  />
                </div>
              </div>
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i>
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { enviarSolicitud, mostrarAlerta } from "@/helpers/funciones";
import { onMounted, ref } from "vue";
// import { defineProps } from "vue";
import Chart from "chart.js/auto";
import axios from "axios";

const formattedDate = (future) => {
  const today = new Date();
  today.setDate(today.getDate() + future);
  const year = today.getFullYear().toString().padStart(4, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
let loaded = ref(false);

const myChart = ref(null);
const myChart2 = ref(null);
let nombre = ref("");
let descripcion = ref("");
let fecha_inicio = ref(formattedDate(0));
let fecha_final = ref(formattedDate(30));
let darkmode = ref(false);
const url = "http://academicobackend.test/api/v1/generaciones";

const convertDate = (fecha) => {
  const part = fecha.toString().split("/");
  const fechaDB = `${part[2]}-${part[1]}-${part[0]}`;
  return fechaDB;
};
const convertirARGBA = (color, opacidad) => {
  // Extrayendo los componentes del color
  color = color.toString();
  const rgb = color.match(/\d+/g);
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  // Construyendo la notación rgba con el valor de opacidad
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacidad})`;
  return rgba;
};
onMounted(async () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    darkmode.value = false;
  } else {
    darkmode.value = true;
  }
  await firstGraphic();
  await secondGraphic();
});
const firstGraphic = async () => {
  loaded.value = false;
  let res = await axios.get(
    "http://academicobackend.test/api/v1/graficas/cursos"
  );
  let data = await res.data.data;
  console.log(data);
  const chartData = data.map((item) => item.cantidad_estudiantes);
  const chartColor = data.map((item) => item.color);
  const chartColorRGBA = data.map((item) => convertirARGBA(item.color, 0.6));
  const chartLabels = data.map((item) => item.nombre);
  console.log(res);
  const ctx = myChart.value.getContext("2d");
  new Chart(ctx, {
    type: "bar", // Tipo de gráfico (puedes cambiarlo a 'line', 'pie', etc.)
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "Estudiantes registrados en los cursos",
          data: chartData,
          backgroundColor: chartColorRGBA,
          borderColor: chartColor,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};
function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const secondGraphic = async () => {
  loaded.value = false;
  let res = await axios.get(
    "http://academicobackend.test/api/v1/graficas/generacion"
  );
  let data = await res.data.data;
  console.log(data);
  // let randomColor = generarColorAleatorio();
  const chartData = data.map((item) => item.numero_estudiantes);
  const chartLabels = data.map((item) => item.nombre_generacion);
  const chartColor = data.map((item) => generarColorAleatorio());
  // console.log(chartColor);
  const chartColorRGBA = chartColor.map((item) => convertirARGBA(item, 0.6));
  console.log(res);
  const ctx = myChart2.value.getContext("2d");
  new Chart(ctx, {
    type: "doughnut", // Tipo de gráfico (puedes cambiarlo a 'line', 'pie', etc.)
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "Estudiantes registrados en los cursos",
          data: chartData,
          backgroundColor: chartColorRGBA,
          borderColor: chartColor,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};
const guardarGeneracion = () => {
  if (nombre.value.trim() == "") {
    mostrarAlerta("Ingrese un nombre", "warning", "nombre");
  } else if (descripcion.value.trim() == "") {
    mostrarAlerta("Ingrese una descripcion", "warning", "apellido");
  } else {
    console.log(fecha_inicio);
    let parametros = {
      nombre: nombre.value.trim(),
      descripcion: descripcion.value.trim(),
      fecha_inicio: fecha_inicio.value,
      fecha_final: fecha_inicio.value,
    };
    console.log(parametros);
    enviarSolicitud("POST", parametros, url, "Generación agregado");
    let closeGen = document.getElementById("closeGen"); // relatedTarget
    closeGen.click();
  }
};
</script>

<style scoped>
.dashboard {
  display: grid;
  width: 100%;
  height: 100%;
  grid-gap: 0;
  grid-template-columns: 300px auto;
  grid-template-rows: 80px auto;
  grid-template-areas: "content graphics" "content graphics" "graphics2 graphics2";
}
.content-wrap {
  grid-area: content;
  /* padding: 3em; */
  /* overflow: auto; */
  height: auto;
}

.content-wrap .info-boxes {
  padding: 3em 0 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2em;
}
.content-wrap .info-boxes .info-box {
  background: #fff;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1em;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}
.content-wrap .info-boxes .info-box .box-icon svg {
  display: block;
  width: 40px;
  height: 40px;
}
.content-wrap .info-boxes .info-box .box-icon svg path,
.content-wrap .info-boxes .info-box .box-icon svg circle {
  fill: #99a0b0;
}
.content-wrap .info-boxes .info-box .box-content {
  padding-left: 1.25em;
  white-space: nowrap;
}
.content-wrap .info-boxes .info-box .box-content .big {
  display: block;
  font-size: 1.2em;
  line-height: 150%;
  color: #1b253d;
}
.content-wrap .info-boxes .info-box.active svg circle,
.content-wrap .info-boxes .info-box.active svg path {
  fill: #4b84fe;
}
.content-wrap .person-boxes {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2em;
}
.content-wrap .person-boxes .person-box {
  background: #fff;
  height: 320px;
  text-align: center;
  padding: 3em;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}
.content-wrap .person-boxes .person-box:nth-child(2n) .box-avatar .no-name {
  background: #4b84fe;
}
.content-wrap .person-boxes .person-box:nth-child(5n) .box-avatar .no-name {
  background: #ffbb09;
}
.content-wrap .person-boxes .person-box .box-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0px auto;
  overflow: hidden;
}
.content-wrap .person-boxes .person-box .box-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-wrap .person-boxes .person-box .box-avatar .no-name {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  background: #fa5b67;
}
.content-wrap .person-boxes .person-box .box-bio {
  white-space: no-wrap;
}
.content-wrap .person-boxes .person-box .box-bio .bio-name {
  margin: 2em 0 0.75em;
  color: #1b253d;
  font-size: 1em;
  font-weight: 700;
  line-height: 100%;
}
.content-wrap .person-boxes .person-box .box-bio .bio-position {
  margin: 0;
  font-size: 0.875em;
  line-height: 100%;
}
.box-actions {
  margin-top: 1.25em;
  padding-top: 1.25em;
  width: 100%;
  border-top: 1px solid #ede8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box-actions button {
  border: 0;
  background: none;
  width: 32px;
  height: 32px;
  background: #1b253d;
  border-radius: 50%;
  opacity: 0.3;
  margin: 0;
  padding: 0;
}
.box-actions button i {
  position: relative;
  top: 2px;
}
.box-actions button i {
  color: #b6bbc6;
  transition: fill 0.15s ease;
}
.box-actions button:hover {
  /* color: #2b3a60; */
  transition: all 0.5s ease-in-out;
  opacity: 0.8;
}
.graphics {
  grid-area: graphics;
  width: 100%;
}
.graphics2 {
  grid-area: graphics2;
}
.graphics3 {
  grid-area: graphics3;
}
.en-desarrollo .fa-custom {
  opacity: 0.4;
  animation: turn 3s infinite linear;
}
.en-desarrollo p {
  opacity: 0.4;
}
@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.graphics2 canvas {
  width: 50%;
}
@media screen and (max-width: 991px) {
  .dashboard {
    /* display: grid; */
    /* width: 100%; */
    /* height: 100%; */
    /* grid-gap: 0; */
    /* grid-template-columns: 300px auto; */
    /* grid-template-rows: 80px auto; */
    grid-template-areas: "content content" "graphics graphics" "graphics2 graphics2";
  }
  .graphics {
    margin-top: 25vh;
  }
  .graphics canvas {
    width: 100%;
    height: 250px;
  }
  .graphics2 canvas {
    width: 100% !important;
    height: 300px;
  }
  @media screen and (max-width: 632px) {
    .graphics {
      margin-top: 50vh;
    }
  }
}
</style>

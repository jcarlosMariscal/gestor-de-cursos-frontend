<template>
  <div class="row mt-3">
    <div class="col-md-10 offset-md-1">
      <div class="dashboard">
        <main class="content-wrap">
          <header class="content-head">
            <h1>Societe Generale</h1>

            <div class="action">
              <button>Save search</button>
            </div>
          </header>

          <div class="content">
            <section class="info-boxes">
              <div class="info-box">
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
                  <span class="big">3 Generaciones</span>
                  <div class="box-actions">
                    <button><i class="fas fa-eye"></i></button>

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGen"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                    <button>
                      <i class="fas fa-download"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="info-box">
                <div class="box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"
                    />
                  </svg>
                </div>

                <div class="box-content">
                  <span class="big">12 Alumnos Activos</span>
                  Related articles
                </div>
              </div>
            </section>

            <section class="person-boxes">
              <div class="person-box">
                <div class="box-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1495791085242-4abf2dcc3be3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30e718c0d1804c6365c73fc48419505d&auto=format&fit=crop&w=140&q=80"
                    alt="Frederic Levy, Chief Executive Officer"
                  />
                </div>

                <div class="box-bio">
                  <h2 class="bio-name">Frederic Levy</h2>
                  <p class="bio-position">Chief Executive Officer</p>
                </div>

                <div class="box-actions">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.855 14.365l-1.817 6.36a1.001 1.001 0 0 0 1.517 1.106L12 18.202l5.445 3.63a1 1 0 0 0 1.517-1.106l-1.817-6.36 4.48-3.584a1.001 1.001 0 0 0-.461-1.767l-5.497-.916-2.772-5.545c-.34-.678-1.449-.678-1.789 0L8.333 8.098l-5.497.916a1 1 0 0 0-.461 1.767l4.48 3.584zm2.309-4.379c.315-.053.587-.253.73-.539L12 5.236l2.105 4.211c.144.286.415.486.73.539l3.79.632-3.251 2.601a1.003 1.003 0 0 0-.337 1.056l1.253 4.385-3.736-2.491a1 1 0 0 0-1.109-.001l-3.736 2.491 1.253-4.385a1.002 1.002 0 0 0-.337-1.056l-3.251-2.601 3.79-.631z"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"
                      />
                      <path
                        d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 3C6.486 3 2 6.364 2 10.5c0 2.742 1.982 5.354 5 6.678V21a.999.999 0 0 0 1.707.707l3.714-3.714C17.74 17.827 22 14.529 22 10.5 22 6.364 17.514 3 12 3zm0 13a.996.996 0 0 0-.707.293L9 18.586V16.5a1 1 0 0 0-.663-.941C5.743 14.629 4 12.596 4 10.5 4 7.468 7.589 5 12 5s8 2.468 8 5.5-3.589 5.5-8 5.5z"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 8L17 8 17 11 14 11 14 13 17 13 17 16 19 16 19 13 22 13 22 11 19 11zM3 20h10c.553 0 1-.447 1-1v-.5c0-2.54-1.212-4.651-3.077-5.729C11.593 12.063 12 11.1 12 10c0-2.28-1.72-4-4-4s-4 1.72-4 4c0 1.1.407 2.063 1.077 2.771C3.212 13.849 2 15.96 2 18.5V19C2 19.553 2.448 20 3 20zM6 10c0-1.178.822-2 2-2s2 .822 2 2-.822 2-2 2S6 11.178 6 10zM8 14c2.43 0 3.788 1.938 3.977 4H4.023C4.212 15.938 5.57 14 8 14z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
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
import { ref } from "vue";

const formattedDate = (future) => {
  const today = new Date();
  today.setDate(today.getDate() + future);
  const year = today.getFullYear().toString().padStart(4, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

let nombre = ref("");
let descripcion = ref("");
let fecha_inicio = ref(formattedDate(0));
let fecha_final = ref(formattedDate(30));
const url = "http://academicobackend.test/api/v1/generaciones";

const convertDate = (fecha) => {
  const part = fecha.toString().split("/");
  const fechaDB = `${part[2]}-${part[1]}-${part[0]}`;
  return fechaDB;
};
// convertDate();
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
  grid-template-areas: "search search" "content content";
}
.content-wrap {
  grid-area: content;
  /* padding: 3em; */
  overflow: auto;
}
.content-wrap .content-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-wrap .content-head h1 {
  font-size: 1.375em;
  line-height: 100%;
  color: #1b253d;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.content-wrap .content-head .action button {
  border: 0;
  background: #4b84fe;
  color: #fff;
  width: auto;
  height: 3.5em;
  padding: 0 2.25em;
  border-radius: 3.5em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.15s ease;
}
.content-wrap .content-head .action button:hover {
  background-color: #1861fe;
}
.content-wrap .content-head .action button:hover:active {
  background-color: #0149e2;
  transition: none;
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
  padding: 0 3em;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}
.content-wrap .info-boxes .info-box .box-icon svg {
  display: block;
  width: 48px;
  height: 48px;
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
  font-size: 1.5em;
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
.box-actions button:hover i {
  color: #2b3a60;
}
</style>

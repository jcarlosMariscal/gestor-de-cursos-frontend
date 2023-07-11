<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary mode-light"
    id="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GESTIÓN ACADÉMIA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estudiantes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/listar-estudiantes" class="dropdown-item"
                >Listar Estudiantes</router-link
              >
              <router-link to="/createE" class="dropdown-item"
                >Registrar nuevo</router-link
              >
            </ul>
          </li>
        </ul>
      </div>
      <!-- :class="{ darkmode: darkmode }" -->
      <div>
        <input
          type="checkbox"
          id="toggle_checkbox"
          v-model="darkmode"
          @click="changeMode"
        />

        <!-- <label for="toggle_checkbox" class="checkbox-content">
          <div id="star">
            <i class="fa-solid fa-sun"></i>
          </div>
          <div id="moon"></div>
        </label> -->
        <!-- <label for="toggle_checkbox2" class="checkbox-content">
          <div id="sun">
            <i class="fa-solid fa-sun"></i>
          </div>
          <div id="moon">
            <i class="fa-solid fa-moon"></i>
          </div>
        </label> -->
        <div class="container-custom">
          <input
            id="checkbox"
            type="checkbox"
            v-model="darkmode"
            @click="changeMode"
          />
          <label for="checkbox"></label>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted, ref } from "vue";
let darkmode = ref(false);
// console.log(darkmode.value);
const toggle = () => {
  const theme = localStorage.getItem("theme");
  const navbar = document.getElementById("navbar");
  const body = document.getElementById("body");
  const table = document.getElementById("mytable");
  if (table) console.log(table);
  const elements = document.querySelectorAll(".element");
  console.log(theme);

  if (theme === "light") {
    darkmode.value = false;
    navbar.classList.add("mode-light");
    body.classList.add("mode-light");
    navbar.classList.remove("mode-dark");
    body.classList.remove("mode-dark");
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    table && table.classList.add("mode-light");
    table && table.classList.remove("table-dark");
    table && table.classList.remove("mode-dark");
  } else {
    darkmode.value = true;
    navbar.classList.add("mode-dark");
    body.classList.add("mode-dark");
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    table && table.classList.remove("mode-light");
    table && table.classList.add("table-dark");
    table && table.classList.add("mode-dark");
  }
};
onMounted(() => toggle());
const changeMode = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  toggle();
};
</script>
<style scoped>
.container-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #09213b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: mover 2s infinite;
}

input[type="checkbox"] {
  display: none;
}

input + label {
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--blue);
  border-radius: 50%;
  background: var(--darkblue);
  transition: 0.1s all;
  cursor: pointer;
  z-index: 999 !important;
}

input + label:hover {
  transform: scale(0.95);
}

input + label:after {
  transition: all 1s ease-in-out;
  font-family: "Font Awesome 5 Free"; /* Asegúrate de utilizar el nombre correcto de la fuente de Font Awesome */
  content: "\f185";
  display: inline-block;
  font-weight: 900; /* Establece un peso de fuente adecuado para el icono lleno */
  font-size: 1.3em; /* Ajusta el tamaño del icono según tus necesidades */
  line-height: 1; /* Ajusta la altura de línea según tus necesidades */
  color: white; /* Ajusta el color del icono según tus necesidades */
  -webkit-text-stroke-width: 0; /* Desactiva el trazo de texto para que el icono esté lleno */
}

input:checked + label {
  background: var(--blue);
  transform: scale(1.1);
}

input:checked + label:hover {
  background: var(--blue);
  transform: scale(1.05);
}

input:checked + label:after {
  transition: all 1s ease-in-out;
  /* content: "🌙"; */
  font-family: "Font Awesome 5 Free"; /* Asegúrate de utilizar el nombre correcto de la fuente de Font Awesome */
  content: "\f186";
  display: inline-block;
  font-weight: 900; /* Establece un peso de fuente adecuado para el icono lleno */
  font-size: 1.3em; /* Ajusta el tamaño del icono según tus necesidades */
  line-height: 1; /* Ajusta la altura de línea según tus necesidades */
  color: white; /* Ajusta el color del icono según tus necesidades */
  -webkit-text-stroke-width: 0; /* Desactiva el trazo de texto para que el icono esté lleno */
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  /* 75% {
    transform: translateY(-5px);
  } */
  100% {
    transform: translateY(0);
  }
}
</style>

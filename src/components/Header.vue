<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary mode-light"
    id="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GESTIÓN ACADÉMIA</a>
      <div>
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
          <svg viewBox="0 0 100 80" width="35" height="35" fill="#000">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </div>
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
              <router-link to="/students" class="dropdown-item"
                >Listar Estudiantes</router-link
              >
              <router-link to="/form-student" class="dropdown-item"
                >Registrar nuevo</router-link
              >
            </ul>
          </li>
          <li class="nav-item">
            <div>
              <input
                type="checkbox"
                id="toggle_checkbox"
                v-model="darkmode"
                @click="changeMode"
              />
              <div class="container-custom">
                <input
                  id="checkbox"
                  type="checkbox"
                  v-model="darkmode"
                  @click="changeMode"
                />
                <label for="checkbox"
                  ><i
                    class="bx"
                    :class="{ 'bx-sun': !darkmode, 'bx-moon': darkmode }"
                  ></i
                ></label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- :class="{ darkmode: darkmode }" -->
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
  /* color: #09213b; */
  width: 40px;
  height: 40px;
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
label i {
  font-size: 28px !important;
  color: #1a7e91;
}
label .bx-moon {
  color: white;
}
</style>

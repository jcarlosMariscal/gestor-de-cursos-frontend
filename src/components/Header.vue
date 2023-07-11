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

        <label for="toggle_checkbox" class="checkbox-content">
          <div id="star">
            <!-- <div class="star" id="star-1">★</div>
            <div class="star" id="star-2">★</div> -->
            <i class="fa-solid fa-sun"></i>
          </div>
          <div id="moon"></div>
        </label>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
let darkmode = ref(false);
const changeMode = () => {
  const navbar = document.getElementById("navbar");
  const body = document.getElementById("body");
  const table = document.getElementById("my_table");
  const elements = document.querySelectorAll(".element");
  if (navbar.classList.contains("mode-light")) {
    navbar.classList.remove("mode-light");
    navbar.classList.add("mode-dark");
    body.classList.remove("mode-light");
    body.classList.add("mode-dark");
    if (table) {
      table.classList.remove("mode-light");
      table.classList.add("mode-dark");
    }
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
  } else {
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    navbar.classList.remove("mode-dark");
    navbar.classList.add("mode-light");
    body.classList.remove("mode-dark");
    body.classList.add("mode-light");
    if (table) {
      table.classList.remove("mode-dark");
      table.classList.add("mode-light");
    }
  }
  console.log(body);
  // modeText = mode.value ? "dark" : "light";
  // console.log(mode.value);
  console.log(darkmode.value);
};
</script>
<style scoped>
.checkbox-content {
  background-color: aqua;
  margin-right: 0.5rem !important;
}
#toggle_checkbox {
  display: none;
}

label {
  display: block;
  position: absolute;
  /* top: 50%; */
  right: 0;
  /* left: 0; */
  width: 69.6px;
  height: 33.6px;
  margin: 0 auto;
  background-color: #77b5fe;
  border-radius: 56px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.3s ease background-color;
  overflow: hidden;
}

#star {
  /* background: red; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: initial;
  padding-left: 0.3rem;
}
#star i {
  font-size: 1.5rem;
  color: #fafd0f;
  transform: scale(1);
  border-radius: 50%;
  transform: translateY(0%);
  transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform,
    0.3s ease color;
  z-index: 1;
  /* transition: all 0.5s ease-in-out; */
}

#star-1 {
  position: relative;
}

#star-2 {
  position: absolute;
  transform: rotateZ(36deg);
}

.star {
  top: -0;
  left: -4.2px; /* -7px reducido en un 40% */
  font-size: 32.4px; /* 54px reducido en un 40% */
  line-height: 16.8px; /* 28px reducido en un 40% */
  color: #fafd0f;
  transition: 0.3s ease color;
}

#moon {
  position: absolute;
  bottom: -31.2px; /* -52px reducido en un 40% */
  right: 4.8px; /* 8px reducido en un 40% */
  width: 24px; /* 40px reducido en un 40% */
  height: 24px; /* 40px reducido en un 40% */
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease bottom;
}

#moon:before {
  content: "";
  position: absolute;
  top: -7.2px; /* -12px reducido en un 40% */
  left: -10.2px; /* -17px reducido en un 40% */
  width: 24px; /* 40px reducido en un 40% */
  height: 24px; /* 40px reducido en un 40% */
  /* background-color: #03a9f4; */
  border-radius: 50%;
  transition: 0.3s ease background-color;
}

#toggle_checkbox:checked + label {
  background-color: #000;
}

#toggle_checkbox:checked + label #star {
  top: 3px;
  left: 64px;
  /* transform: scale(0.3); */
  /* background-color: yellow; */
  transform: translateY(100%);
  transition: all 0.5s ease-in-out;
}
#toggle_checkbox:checked + label #moon {
  bottom: 8px;
}

#toggle_checkbox:checked + label #moon:before {
  background-color: #000;
}
</style>

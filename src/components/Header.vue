<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary"
    id="navbar"
    style="position: sticky; top: 0"
  >
    <!-- <a class="navbar-brand" href="#">GESTIÓN ACADÉMIA</a> -->
    <!-- Container wrapper -->
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" @click="menuHamburger">
        <i class="bx bx-menu" id="menu-toggle"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse collapse-custom"
        :class="{ show: navbarMobile }"
        id="navbarSupportedContent"
      >
        <div
          class="content-custom"
          :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
        >
          <!-- Navbar brand -->
          <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              v-if="darkmode"
              src="../assets/img/logo-acade.png"
              height="25"
              alt="MDB Logo"
              loading="lazy"
            />
            <img
              v-else
              src="../assets/img/logo-acade-light.png"
              height="25"
              alt="MDB Logo"
              loading="lazy"
            />
          </router-link>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link"
                >Dashboard</router-link
              >
            </li>
            <!-- <li class="nav-item">
            <button @click="cerrar">Logout</button>
          </li> -->
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cursos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/courses" class="dropdown-item"
                  >Listar Cursos</router-link
                >
                <router-link to="/form-course" class="dropdown-item"
                  >Registrar nuevo</router-link
                >
              </ul>
            </li>
          </ul>
          <!-- Left links -->
        </div>
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->
        <!-- <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a> -->
        <div class="checkbox-theme">
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
        <!-- Avatar -->
        <div class="dropdown dropdown-custom" v-if="isLoggedIn">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-avatar-custom"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" href="#">Mi perfil</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Configuración</a>
            </li>
            <li>
              <a class="dropdown-item" @click.prevent="cerrar">Cerrar sesión</a>
            </li>
          </ul>
        </div>
        <div v-if="!isLoggedIn">
          <router-link to="/login" class="btn-custom nav-link"
            >Iniciar sesión</router-link
          >
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
  <!-- <svg viewBox="0 0 100 80" width="35" height="35" fill="#000">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg> -->
</template>
<script setup>
import { onMounted, ref } from "vue";
import { auth } from "../helpers/firebaseConfig";
import { useRouter } from "vue-router";
import { GoogleAuthProvider } from "firebase/auth";
import { alertaForm } from "../helpers/funciones";

const router = useRouter();
const isLoggedIn = ref(true);
const navbarMobile = ref(false);
let darkmode = ref(false);
// console.log(darkmode.value);
const toggle = () => {
  const theme = localStorage.getItem("theme");
  const navbar = document.getElementById("navbar");
  const body = document.getElementById("body");
  // const table = document.getElementById("mytable");
  // if (table) console.log(table);
  const elements = document.querySelectorAll(".element");
  const bg = document.querySelectorAll(".bg-content");
  const bg2 = document.querySelectorAll(".bg-content2");
  const bg3 = document.querySelectorAll(".bg-content3");
  const theme_text = document.querySelectorAll(".theme-text");
  console.log(theme);

  if (theme === "light") {
    darkmode.value = false;
    body.classList.add("mode-light");
    navbar.classList.add("mode-light");
    navbar.classList.remove("mode-dark");
    body.classList.remove("mode-dark");
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg2.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg3.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    theme_text.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
  } else {
    darkmode.value = true;
    navbar.classList.add("mode-dark");
    body.classList.add("mode-dark");
    elements.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg2.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    bg3.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
    theme_text.forEach((el) => {
      el.classList.toggle("mode-dark");
    });
  }
};
onMounted(() => {
  if (!auth.currentUser) isLoggedIn.value = false;
  toggle();
});
const changeMode = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  toggle();
};
const menuHamburger = () => {
  navbarMobile.value = !navbarMobile.value;
  const menu = document.getElementById("menu-toggle");
  if (menu.classList.contains("bx-menu")) {
    menu.classList.remove("bx-menu");
    menu.classList.add("bx-x");
  } else {
    menu.classList.add("bx-menu");
    menu.classList.remove("bx-x");
  }
  if (navbarMobile.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
const cerrar = async () => {
  try {
    await auth.signOut();
    // El usuario cerró sesión en Firebase, ahora verifica si también inició sesión con Google
    const provider = new GoogleAuthProvider();
    if (
      auth.currentUser &&
      auth.currentUser.providerData.some(
        (data) => data.providerId === provider.providerId
      )
    ) {
      // Si el usuario inició sesión con Google, cierra la sesión específica de Google
      await auth.currentUser.unlink(provider.providerId);
    }
    // Redireccionar a la página de inicio de sesión u otra vista
    alertaForm("Sesión cerrada", "success", 3000);
    router.push("/");
  } catch (error) {
    console.error(error);
    alertaForm(
      "Ha ocurrido un error al intentar cerrar sesión.",
      "error",
      3000
    );
  }
};
</script>
<style scoped>
.checkbox-theme {
  margin-right: -1.5rem;
}
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
  font-size: 24px !important;
  color: #1a7e91;
}
label .bx-moon {
  color: white;
}

.content-custom {
  display: flex;
}

@media screen and (min-width: 991px) {
}
.dropdown-custom {
  position: relative;
}
.dropdown-avatar-custom {
  position: absolute !important;
  top: 60px !important; /* Ajusta la posición vertical según el tamaño del navbar */
  left: -125px !important;
  /* width: 20%; */
}

@media screen and (max-width: 991px) {
  .container-fluid {
    position: relative;
  }
  .collapse-custom {
    background-color: rgba(0, 0, 0, 0.3) !important;
    display: block !important;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 53px);
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
  }
  .content-custom {
    width: 40vw;
    height: 100%;
    flex-direction: column;
  }
  .content-custom.mode-light {
    background-color: rgba(215, 235, 239, 0.8) !important;
  }
  .content-custom.mode-dark {
    /* color: rgb(3, 11, 70); */
    background-color: rgba(2, 22, 36, 0.8) !important;
  }
  .collapse-custom.show {
    z-index: 999;
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
  .collapse-custom::after {
    width: 100px !important;
    height: 100px !important;
    background: green !important;
  }
  .navbar-nav {
    /* background: aqua !important; */
    display: block !important;
  }
}
@media screen and (max-width: 450px) {
  .collapse-custom {
    width: 100vw;
  }
}
</style>

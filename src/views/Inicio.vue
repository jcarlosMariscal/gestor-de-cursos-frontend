<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center custom-bg-transparent">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            class="home-title theme-text mode-light"
            :class="{ 'mode-dark': darkmode }"
          >
            ¡Descubre nuestra plataforma educativa!
          </h1>
          <h5 class="theme-text mode-light" :class="{ 'mode-dark': darkmode }">
            Administre las materias que imparte y asigne calificaciones a sus
            estudiantes de manera sencilla.
          </h5>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link
              to="/register"
              class="btn-custom btn-get-started scrollto"
              >Probar Demo</router-link
            >
          </div>
        </div>
        <div
          class="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <!-- file:///C:/Users/jr349/Downloads/Arsha/Arsha/assets/vendor/bootstrap/ -->
          <img
            src="../assets/img/hero-img.png"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= Clients Section ======= -->
    <section
      id="clients"
      class="clients section-bg bg-content3"
      :class="{ 'mode-dark': darkmode }"
    >
      <div class="container">
        <div class="row" data-aos="zoom-in">
          <div
            class="col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
              class="img-fluid"
              width="100%"
              alt=""
            />
          </div>

          <div
            class="col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://blog.amio.io/content/images/2018/06/vue.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://www.nicepng.com/png/full/142-1423886_html5-css3-js-html-css-javascript.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Cliens Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 class="theme-text mode-light" :class="{ 'mode-dark': darkmode }">
            Sobre el proyecto
          </h2>
        </div>

        <div class="row content">
          <div class="col-lg-6 theme-text" :class="{ 'mode-dark': darkmode }">
            <p>
              El proyecto fue desarrollado con vue para el frontend y el backend
              con laravel. Se integró Firebase para la parte de registro e
              inicio de sesión con email/password y Google. Algunas
              funcionalidades interesantes que tiene son:
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i> Inicio de sesión con
                email/password y Google.
              </li>
              <li>
                <i class="ri-check-double-line"></i> CRUD para administrar
                Estudiantes, Materias y Calificaciones.
              </li>
              <li>
                <i class="ri-check-double-line"></i> Implementación del tema
                light y dark.
              </li>
            </ul>
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 theme-text"
            :class="{ 'mode-dark': darkmode }"
          >
            <p>
              El proyecto fue desarrollado con el objetivo de poner en práctica
              los conocimientos y habilidades de Vue, así como también la parte
              de JavaScript. Además de iniciar con un framework de PHP (laravel)
              en la parte del backend del proyecto.
            </p>
            <a href="/register" class="btn-custom btn-learn-more"
              >Registrarse</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->
  </main>
  <!-- End Hero -->
</template>

<script setup>
import { onMounted, ref } from "vue";

const darkmode = ref(false);
onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    darkmode.value = false;
  } else {
    darkmode.value = true;
  }
});
</script>

<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/style.css";

.home-title {
  all: unset !important;
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
  font-size: 2.5rem !important;
  /* color: #154255 !important; */
}
.theme-text.mode-light {
  color: #1a7e91 !important;
}
.theme-text.mode-dark {
  color: #dbe1d8 !important;
}
.custom-bg-transparent {
  background: transparent !important;
}
</style>

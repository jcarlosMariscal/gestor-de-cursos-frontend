<template>
  <Header />
  <div class="container-fluid">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* GRADIENT BACKGROUND */
body {
  min-height: 100vh;
}
body.mode-light {
  background-color: #f2f8ef;
  background-image: linear-gradient(
    40deg,
    #fafdf7 0%,
    #d7ebef 50%,
    #ffffff 100%
  );
  background-repeat: no-repeat;
}
.navbar {
  z-index: 999;
}
.navbar.mode-light,
.footer.mode-light {
  background-color: rgba(215, 235, 239, 0.95) !important;
  box-shadow: rgba(26, 125, 145, 0.16) 0px 2px 5px,
    rgba(26, 125, 145, 0.23) 0px 2px 5px;
}
.navbar.mode-light .navbar-brand,
.navbar.mode-light .nav-link {
  font-weight: 500;
  color: #1a7e91;
}
.navbar.mode-light .dropdown-toggle.show {
  font-weight: 500;
  color: #1a7e91;
}
.navbar.mode-light .navbar-toggler i {
  font-weight: 500;
  color: #1a7e91 !important;
}
.bg-content {
  background-color: rgba(215, 235, 239, 0.8) !important;
  box-shadow: rgba(26, 125, 145, 0.16) 0px 2px 5px,
    rgba(26, 125, 145, 0.23) 0px 2px 5px;
}

.table.mode-light > :not(caption) > * > * {
  background-color: rgba(248, 248, 248, 0.6) !important;
}

/* ----------- Modo oscuro ---------- */
/* GRADIENT BACKGROUND */
body.mode-dark {
  background-color: #1a0d26;
  background-image: linear-gradient(
    40deg,
    #0d3a4e 0%,
    #1a0d26 50%,
    #240442 100%
  );
}
.navbar.mode-dark,
.footer.mode-dark {
  background-color: rgba(26, 13, 38, 0.96) !important;
  box-shadow: rgba(43, 5, 53, 0.16) 0px 2px 3px,
    rgba(82, 9, 100, 0.23) 0px 2px 3px;
}
.navbar.mode-dark .navbar-brand,
.navbar.mode-dark .nav-link {
  font-weight: 500;
  color: #dbe1d8;
}
.navbar.mode-dark .dropdown-toggle.show {
  font-weight: 500;
  color: #dbe1d8;
}
.navbar.mode-dark .navbar-toggler i {
  font-weight: 500;
  color: #dbe1d8 !important;
}

.table.mode-dark > :not(caption) > * > * {
  background-color: rgba(28, 14, 42, 0.2) !important;
  color: #1c0e2a;
}
.table.mode-dark {
  background-color: rgba(16, 78, 90, 1) !important;
  border: 1px solid #5a5b5f !important; /* Cambia #fff al color que desees */
}

.bg-content.mode-dark {
  background-color: rgba(28, 14, 42, 0.5) !important;
  box-shadow: rgba(43, 5, 53, 0.16) 0px 2px 3px,
    rgba(82, 9, 100, 0.23) 0px 2px 3px;
  color: #fff !important;
}

.text-bg-light {
  color: #030b46 !important;
  /* background: transparent; */
}

.theme-text.mode-light {
  color: #1a7e91 !important;
}
.theme-text.mode-dark {
  color: #dbe1d8 !important;
}

.btn-custom {
  text-decoration: none;
}
</style>

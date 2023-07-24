<template>
  <Header />
  <div class="container-fluid">
    <router-view />
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
</script>

<style>
/* GRADIENT BACKGROUND */
body {
  min-height: 100vh;
}
body.mode-light {
  background-color: #d5e4ec;
  background-image: linear-gradient(
    40deg,
    #f4f7f8 0%,
    #f1f5f7 50%,
    #f1f4f7 100%
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
  color: #021624;
}
.navbar.mode-light .dropdown-toggle.show {
  font-weight: 500;
  color: #021624;
}
.navbar.mode-light .navbar-toggler i {
  font-weight: 500;
  color: #021624 !important;
}
.bg-content {
  background-color: #dfeef5 !important;
}
.bg-content2 {
  background-color: #d4e9f3 !important;
}
.bg-content3 {
  background-color: #cce7f3 !important;
}

.table.mode-light > :not(caption) > * > * {
  background-color: rgba(248, 248, 248, 0.6) !important;
}

/* ----------- Modo oscuro ---------- */
/* GRADIENT BACKGROUND */
body.mode-dark {
  background-color: #0d2026;
  background-image: linear-gradient(
    40deg,
    #052235 0%,
    #021624 50%,
    #051929 100%
  );
}
.navbar.mode-dark,
.footer.mode-dark {
  /* color: rgb(2, 22, 36); */
  background-color: rgba(2, 22, 36, 0.96) !important;
  box-shadow: rgba(9, 79, 126, 0.16) 0px 2px 3px,
    rgba(20, 72, 107, 0.23) 0px 2px 3px;
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
  background-color: #052235 !important;
  color: #fff !important;
}
.bg-content.mode-dark thead tr th {
  color: #fff !important;
}
.bg-content2.mode-dark {
  background-color: #021624 !important;
  color: #fff !important;
}
.bg-content3.mode-dark {
  background-color: #0c3753 !important;
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

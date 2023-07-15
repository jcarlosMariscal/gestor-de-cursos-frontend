<template>
  <Header />
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
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

.navbar.mode-light {
  background-color: #d7ebef !important;
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
  background-color: #030b46;
  background-image: linear-gradient(
    40deg,
    #260346 0%,
    #114a4d 50%,
    #2f093e 100%
  );
}
.navbar.mode-dark {
  background-color: rgba(16, 78, 90, 0.8) !important;
  box-shadow: rgba(255, 255, 255, 0.16) 0px 2px 3px,
    rgba(255, 255, 255, 0.23) 0px 2px 3px;
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
  background-color: rgba(9, 32, 60, 0.2) !important;
  color: #dbe1d8;
}
.table.mode-dark {
  background-color: rgba(16, 78, 90, 1) !important;
  border: 1px solid #5a5b5f !important; /* Cambia #fff al color que desees */
}

.bg-content.mode-dark {
  background-color: rgba(16, 78, 90, 0.3) !important;
  box-shadow: rgba(255, 255, 255, 0.16) 0px 2px 5px,
    rgba(255, 255, 255, 0.23) 0px 2px 5px;
  color: #fff !important;
}

.text-bg-light {
  color: #030b46 !important;
  /* background: transparent; */
}
</style>

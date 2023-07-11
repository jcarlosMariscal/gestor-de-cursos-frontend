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
body.mode-light {
  background-color: #dbe1d8;
  background-image: linear-gradient(
    0deg,
    #dbe1d8 0%,
    #d7ebef 50%,
    #b4e7f1 100%
  );

  /* background: linear-gradient(-45deg, #f5eeec, #f0e6ea, #ddf4f8, #ced6d5);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh; */
}
/* GRADIENT BACKGROUND */
body.mode-dark {
  background: linear-gradient(-45deg, #102a5a, #102a5a);
  background-size: 400% 400%;
  /* animation: gradient 6s ease infinite; */
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body.mode-light {
  background-color: #dbe1d8;
}
.navbar.mode-light {
  /* #1a7e91 */
  background-color: #d7ebef !important;
  /* color:  !important; */
  box-shadow: rgba(26, 125, 145, 0.16) 0px 2px 5px,
    rgba(26, 125, 145, 0.23) 0px 2px 5px;
}
.navbar.mode-light .navbar-brand,
.navbar.mode-light .nav-link {
  font-weight: 500;
  /* color: rgb(26, 125, 145); */
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
.navbar.mode-dark {
  background-color: rgb(16, 78, 90) !important;
  /* background: rgb(255, 255, 255); */
  box-shadow: rgba(255, 255, 255, 0.16) 0px 2px 5px,
    rgba(255, 255, 255, 0.23) 0px 2px 5px;
}
body.mode-dark {
  background-color: #030b46;
  background-image: linear-gradient(
    0deg,
    #030b46 0%,
    #0b4029 49%,
    #091d3e 100%
  );
}
.navbar.mode-dark .navbar-brand,
.navbar.mode-dark .nav-link {
  font-weight: 500;
  /* color: rgb(26, 125, 145); */
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

/* .table > :not(caption) > * > * { */
.table.mode-light > :not(caption) > * > * {
  /* background-color: transparent; */
  background-color: rgba(248, 248, 248, 0.6) !important;
}
.table.mode-dark > :not(caption) > * > * {
  /* color: rgb(9, 32, 60); */
  background-color: rgba(9, 32, 60, 0.2) !important;
  /* background-color: transparent; */
  color: #dbe1d8;
}
.table.mode-dark {
  border: 1px solid #5a5b5f !important; /* Cambia #fff al color que desees */
}
/* .table.mode-dark > thead > tr > td {
  border-bottom-color: #fff !important;
  background-color: aqua !important;
  font-size: 80px !important;
} */
</style>

<template>
  <!-- ======= Footer ======= -->
  <footer
    id="footer"
    class="bg-content footer"
    :class="{ 'mode-dark': darkmode, 'mode-light': !darkmode }"
  >
    <div class="container footer-bottom clearfix">
      <div class="copyright theme-text" :class="{ 'mode-light': !darkmode }">
        &copy; Copyright <strong><span>JCarlos Mariscal</span></strong
        >. All Rights Reserved
      </div>
      <div
        class="credits social theme-text"
        :class="{ 'mode-light': !darkmode }"
      >
        <a
          class="social-linkedin theme-text"
          :class="{ 'mode-dark': darkmode, 'mode-light': !darkmode }"
          href="https://www.linkedin.com/in/jcarlosmariscal/"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="bx bxl-linkedin-square"></i
        ></a>
        <a
          class="social-github theme-text"
          :class="{ 'mode-dark': darkmode, 'mode-light': !darkmode }"
          href="https://github.com/jcarlosMariscal"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="bx bxl-github"></i
        ></a>
        <a
          class="social-instagram theme-text"
          :class="{ 'mode-dark': darkmode, 'mode-light': !darkmode }"
          href="https://www.instagram.com/karlrm_16/"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="bx bxl-instagram-alt"></i
        ></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
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
.social a {
  font-size: 2.2rem;
}
.theme-text.mode-dark {
  color: white !important;
}
.theme-text.mode-light {
  color: rgba(16, 78, 90, 0.96);
}

.social .social-linkedin:hover {
  color: #0a66c2 !important;
}
.social .social-github:hover {
  color: #171515 !important;
}
.social .social-instagram:hover {
  color: #e6683c !important;
}
</style>

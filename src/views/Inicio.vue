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
          <h1 :class="{ 'text-bg-light': !darkmode }">
            Better Solutions For Your Business
          </h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="/login" class="btn-get-started scrollto"
              >Iniciar sesión</router-link
            >
            <router-link to="/register" class="btn-get-started scrollto"
              >Registrar</router-link
            >
            <!-- <a href="#about" class="btn-get-started scrollto">Iniciar sesión</a> -->
            <!-- <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              class="glightbox btn-watch-video"
              ><i class="bi bi-play-circle"></i><span>Watch Video</span></a
            > -->
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
    <section id="clients" class="clients section-bg">
      <div class="container">
        <div class="row" data-aos="zoom-in">
          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-1.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-2.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-3.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-4.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-5.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="../assets/img/clients/client-6.png"
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
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
              <li>
                <i class="ri-check-double-line"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->
    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
          >
            <div class="content">
              <h3>
                Eum ipsam laborum deleniti
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#accordion-list-1"
                    ><span>01</span> Non consectetur a erat nam at lectus urna
                    duis? <i class="bx bx-chevron-down icon-show"></i
                    ><i class="bx bx-chevron-up icon-close"></i
                  ></a>
                  <div
                    id="accordion-list-1"
                    class="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    class="collapsed"
                    ><span>02</span> Feugiat scelerisque varius morbi enim nunc?
                    <i class="bx bx-chevron-down icon-show"></i
                    ><i class="bx bx-chevron-up icon-close"></i
                  ></a>
                  <div
                    id="accordion-list-2"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    class="collapsed"
                    ><span>03</span> Dolor sit amet consectetur adipiscing elit?
                    <i class="bx bx-chevron-down icon-show"></i
                    ><i class="bx bx-chevron-up icon-close"></i
                  ></a>
                  <div
                    id="accordion-list-3"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="col-lg-5 align-items-stretch order-1 order-lg-2 img custom-bg-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            &nbsp;
          </div>
          <!-- <img src="../img/why-us.png" alt="" /> -->
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->
    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Team</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img
                  src="../assets/img/team/team-1.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Explicabo voluptatem mollitia et repellat qui dolorum quasi
                </p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img
                  src="../assets/img/team/team-2.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>
                  Aut maiores voluptates amet et quis praesentium qui senda para
                </p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img
                  src="../assets/img/team/team-3.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>
                  Quisquam facilis cum velit laborum corrupti fuga rerum quia
                </p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img
                  src="../assets/img/team/team-4.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>
                  Dolorum tempora officiis odit laborum officiis et et accusamus
                </p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Team Section -->
  </main>

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Arsha</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
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

.custom-bg-transparent {
  background: transparent !important;
}
</style>

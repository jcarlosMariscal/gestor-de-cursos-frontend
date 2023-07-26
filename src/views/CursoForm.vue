<template>
  <div class="row mt-3 mb-5">
    <div class="col-md-6 offset-md-3">
      <div
        class="card bg-content"
        :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
      >
        <div class="card-header bg-dark text-white text-center">
          {{ formEdit ? "Editar Curso" : "Registrar Curso" }}
        </div>
        <div class="card-body">
          <form @submit="guardar">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-text-width"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    required
                    maxlength="50"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-file-lines"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="descripcion"
                    id="descripcion"
                    placeholder="Ingrese una descripcion"
                    required
                    min="1"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-clock"></i
                  ></span>
                  <input
                    type="number"
                    class="form-control"
                    v-model="horas"
                    id="horas"
                    placeholder="Ingrese las horas aprobatorias"
                    required
                    min="1"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span class="input-group-text"
                    ><i class="fa-solid" :class="iconSelected"></i
                  ></span>
                  <!-- <input
                    type="number"
                    class="form-control"
                    v-model="horas"
                    id="horas"
                    placeholder="Ingrese las horas aprobatorias"
                    required
                    min="1"
                  /> -->
                  <div id="app-cover" class="form-control">
                    <div id="select-box">
                      <input type="checkbox" id="options-view-button" />
                      <div id="select-button" class="brd">
                        <!-- <div id="selected-value"> -->
                        <span>{{
                          iconSelect.charAt(0).toUpperCase() +
                          iconSelect.slice(1)
                        }}</span>
                        <!-- </div> -->
                        <div id="chevrons">
                          <i class="fas fa-chevron-up"></i>
                          <i class="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      <div id="options">
                        <div
                          class="option"
                          v-for="(icon, index) in icons"
                          :key="index"
                        >
                          <input
                            class="s-c top"
                            type="radio"
                            name="platform"
                            :value="icon.icon"
                            @click.prevent="selectIcon(icon)"
                          />
                          <i class="fa-solid" :class="icon.icon"></i>
                          <span class="label">{{ icon.text }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    :style="{ background: pureColor }"
                    ><i class="fa-solid fa-palette text-white"></i
                  ></span>
                  <!-- <div class="form-control" id="coloris"></div> -->
                  <div class="form-control d-flex justify-content-between">
                    <label for="">Elige un color: &nbsp;</label>
                    <color-picker
                      v-model:pureColor="pureColor"
                      v-model:gradientColor="gradientColor"
                      v-model:shape="shape"
                      v-model:pickerType="pickerType"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-warning">
                <i
                  class="fa-solid"
                  :class="{
                    'fa-refresh': formEdit,
                    'fa-floppy-disk': !formEdit,
                  }"
                ></i>
                {{ formEdit ? "Guardar Cambios" : "Registrar" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { ColorPicker } from "vue3-colorpicker";
import { mostrarAlerta, enviarSolicitud } from "../helpers/funciones";
import { useRoute, useRouter} from "vue-router";
import axios from "axios";
import "vue3-colorpicker/style.css";


export default {
  name: "HomeView",
  data() {
    return {
      id: false,
      nombre: "",
      descripcion: "",
      horas: "",
      url: "http://academicobackend.test/api/v1/cursos",
      cargando: false,
      formEdit: false,
      darkmode: false,
      router: null,
      pureColor: "purple",
      gradientColor: "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
      shape: "circle",
      pickerType: "chrome",
      icons: [
        {text: "Person Shelter", icon: "fa-person-shelter"},
        {text: "File Code", icon: "fa-file-code"},
        {text: "Utensils", icon: "fa-utensils"},
        {text: "Headset", icon: "fa-headset"},
        {text: "Laptop code", icon: "fa-laptop-code"},
        {text: "Database", icon: "fa-database"},
        {text: "Server", icon: "fa-server"},
        {text: "Laguage", icon: "fa-language"},
        {text: "Vials", icon: "fa-vials"},
        {text: "Timeline", icon: "fa-timeline"},
        {text: "Math", icon: "fa-calculator"},
        {text: "Car", icon: "fa-car"},
        {text: "Plane", icon: "fa-plane"},
        {text: "Person Chaklboard", icon: "fa-person-chalkboard"},
        {text: "Security", icon: "fa-lock"},
        { text: "Building Shield", icon: "fa-building-shield" },
      ],
      iconSelected: "fa-icons",
      iconSelect: "Selecciona un icono",
    };
  },
  components: {ColorPicker},
  mounted() {
    const route = useRoute();
    this.router = useRouter();
    this.id = route.params.id;
    if (this.id) this.formEdit = true;
    if (this.formEdit) {
      this.url += '/' + this.id;
      this.getCurso();

    }
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      this.darkmode = false;
    } else {
      this.darkmode = true;
    }

  },
  methods: {
    selectIcon(icon) {
      this.iconSelected = icon.icon;
      this.iconSelect = icon.text;
      const btn = document.getElementById("options-view-button")
      btn.click();
    },
    getCurso() {
      axios.get(this.url).then(res => {
        console.log(res);
        this.nombre = res.data.data.nombre;
        this.descripcion = res.data.data.descripcion;
        this.iconSelected = res.data.data.icono;
        this.iconSelect = res.data.data.icono.replace("fa-","").replace(/-/g, " ");
        this.pureColor = res.data.data.color;
        this.horas = res.data.data.horas;
})
    },
    guardar(e) {
      e.preventDefault();

      if (this.nombre.trim() == "") {
        mostrarAlerta("Ingrese un nombre", "warning", "nombre")
      }else if (!this.horas || this.horas <= 0) {
        mostrarAlerta("El mínimo de horas para un curso deber ser 1", "warning", "horas")
      } else {
        let parametros = { nombre: this.nombre.trim(), descripcion: this.descripcion.trim(), icono: this.iconSelected, color: this.pureColor, horas: this.horas}
        if (this.formEdit) {
          enviarSolicitud('PUT', parametros, this.url, 'Curso actualizado')
        } else {
          enviarSolicitud('POST',parametros, this.url, 'Curso registrado')
        }
        setTimeout(() => this.router.push("/courses"), 200);
      }
    },
  },
};
</script>

<style scoped>
#options-view-button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

#selected-value {
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
}

.option i {
  width: 16px;
  height: 16px;
}

.option,
.label {
  color: #2d3667;
  font-size: 16px;
}

#chevrons {
  position: absolute;
  top: 0;
  right: 3px;
  bottom: 0;
  width: 12px;
  padding: 9px 14px;
}

#chevrons i {
  transition: all 0.3s ease-in-out;
  display: block;
  height: 50%;
  color: #d1dede;
  font-size: 12px;
  text-align: right;
}

#options-view-button:checked + #select-button #chevrons i {
  transition: all 0.3s ease-in-out;
  color: #2d3667;
}

#options {
  position: absolute;
  z-index: 500;
  top: 42px;
  right: 0;
  left: 0;
  width: 230px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  max-height: 290px;
  overflow-y: auto;
}

#options-view-button:checked ~ #options {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

.option {
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
}

.option i {
  position: absolute;
  left: 14px;
  padding: 0;
  display: none;
}

#options-view-button:checked ~ #options .option i {
  display: block;
  padding: 12px 0;
}

.label {
  display: none;
  padding: 0;
  margin-left: 27px;
}

#options-view-button:checked ~ #options .label {
  display: block;
  padding: 12px 14px;
}

.s-c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
}

.s-c.top {
  top: 0;
}

.s-c.bottom {
  bottom: 0;
}

input[type="radio"] {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.s-c:hover ~ i {
  color: #fff;
  opacity: 0;
}

.s-c:hover {
  height: 100%;
  z-index: 1;
}

.s-c.bottom:hover + i {
  bottom: -25px;
  animation: moveup 0.3s ease 0.1s forwards;
}

.s-c.top:hover ~ i {
  top: -25px;
  animation: movedown 0.3s ease 0.1s forwards;
}

@keyframes moveup {
  0% {
    bottom: -25px;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes movedown {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.label {
  transition: 0.3s ease all;
}

.option input[type="radio"]:checked ~ i {
  top: 0;
  bottom: auto;
  opacity: 1;
  animation: unset;
}

.option input[type="radio"]:checked ~ i,
.option input[type="radio"]:checked ~ .label {
  color: #fff;
}

.option input[type="radio"]:checked ~ .label:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.option input[type="radio"]:checked ~ .label:before {
  background-color: #021624;
  border-radius: 4px 4px 0 0;
}

#option-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  transition: 0.3s ease all;
  z-index: 1;
  display: none;
}

#options-view-button:checked ~ #options #option-bg {
  display: block;
}

.option:hover .label,
.option:hover {
  background-color: #021624;
  color: #fff;
}

/* .option:hover ~ #option-bg {
  top: 0;
  background-color: aqua;
  color: white;
  border-radius: 4px 4px 0 0;
} */
</style>

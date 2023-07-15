<template>
  <section class="container forms">
    <!-- Signup Form -->
    <div
      class="form signup bg-content"
      :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
    >
      <div class="form-content">
        <header>Registrarse</header>
        <form action="#">
          <div class="field input-field">
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              class="input"
              v-model="email"
            />
          </div>
          <div class="field input-field">
            <input
              type="password"
              placeholder="Escriba su contraseña"
              class="password"
              v-model="password"
            />
            <i class="bx bx-hide eye-icon" @click="eyeIcon"></i>
          </div>
          <div class="field input-field">
            <input
              type="password"
              placeholder="Confirm password"
              class="password"
              v-model="password2"
              @input="validatePassword"
            />
            <i class="bx bx-hide eye-icon" @click="eyeIcon"></i>
          </div>
          <div class="field button-field err-form" v-if="errForm">
            <p>{{ errMsg }}</p>
          </div>
          <div class="field button-field success-pw" v-if="successpw">
            <p>{{ successpwMsg }}</p>
          </div>
          <div class="field button-field">
            <button @click="registerUser">Registrarse</button>
          </div>
        </form>
        <div class="form-link">
          <span
            >¿Ya tienes una cuenta?
            <router-link to="/login" class="link login-link"
              >Inicia sesión</router-link
            >
          </span>
        </div>
      </div>
      <div class="text-center">Or</div>
      <div class="media-options">
        <a href="#" class="field facebook">
          <!-- <i class="bx bxl-facebook facebook-icon"></i> -->
          <i class="bx bxl-google facebook-icon"></i>
          <span>Iniciar sesión con Google</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { auth } from "../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const password2 = ref("");
const errForm = ref(false);
const successpw = ref(false);
const errMsg = ref("");
const successpwMsg = ref("");
const darkmode = ref(false);
const router = useRouter(); // get a reference to our vue router

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    darkmode.value = false;
  } else {
    darkmode.value = true;
  }
});

const eyeIcon = (e) => {
  console.log(e);
  const passwordInput = e.target.previousElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    e.target.classList.replace("bx-hide", "bx-show");
    return;
  }
  passwordInput.type = "password";
  e.target.classList.replace("bx-show", "bx-hide");
};
const validatePassword = () => {
  // console.log();
  if (password.value !== password2.value) {
    successpw.value = true;
    successpwMsg.value = "La contraseña no coincide";
    return;
  }
  successpw.value = false;
  successpwMsg.value = "La contraseña coincide";
};

const registerUser = (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    errForm.value = true;
    errMsg.value =
      "Por favor, ingresa un correo electrónico y una contraseña válidos";
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((response) => {
      // Usuario registrado exitosamente
      console.log(response);
    })
    .catch((error) => {
      // Manejar errores de registro
      console.error(
        "Error al registrar el usuario:",
        error.code,
        error.message
      );
      // Mostrar un mensaje de error específico al usuario según el tipo de error
      if (error.code === "auth/weak-password") {
        errForm.value = true;
        errMsg.value =
          "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
      } else if (error.code === "auth/invalid-email") {
        errForm.value = true;
        errMsg.value = "El correo electrónico proporcionado no es válido.";
      } else {
        errForm.value = true;
        errMsg.value = "Ha ocurrido un error durante el registro.";
      }
    });
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #4070f4; */
  column-gap: 30px;
}
.form {
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #fff;
}
.forms.show-signup .form.signup {
  opacity: 1;
  pointer-events: auto;
}
.forms.show-signup .form.login {
  opacity: 0;
  pointer-events: none;
}
header {
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  text-align: center;
}
form {
  margin-top: 30px;
}
.form .field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}
.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}
.field input {
  outline: none;
  padding: 0 15px;
  border: 1px solid#CACACA;
}
.field input:focus {
  border-bottom-width: 2px;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.field button {
  color: #fff;
  background-color: #0171d3;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover {
  background-color: #016dcb;
}
.form-link {
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a {
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a {
  color: #0171d3;
  text-decoration: none;
}
.form-content a:hover {
  text-decoration: underline;
}
.line {
  position: relative;
  height: 1px;
  width: 100%;
  margin: 36px 0;
  background-color: #d4d4d4;
}
/* .line::before {
  content: "Or";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: #8b8b8b;
  padding: 0 15px;
} */
.media-options a {
  display: flex;
  align-items: center;
  justify-content: center;
}
a.facebook {
  color: #fff;
  background-color: #4267b2;
}
a.facebook .facebook-icon {
  height: 28px;
  width: 28px;
  color: #0171d3;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.facebook-icon,
img.google-img {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
}
img.google-img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}
a.google {
  border: 1px solid #cacaca;
}
a.google span {
  font-weight: 500;
  opacity: 0.6;
  color: #232836;
}
@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
.err-form {
  color: red;
}
.success-pw {
  color: red;
}
</style>
../helpers/firebaseConfig

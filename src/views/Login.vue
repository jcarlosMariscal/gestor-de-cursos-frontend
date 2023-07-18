<template>
  <section class="container forms">
    <!-- Signup Form -->
    <div
      class="form signup bg-content"
      :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
    >
      <div class="form-content">
        <header
          class="theme-text"
          :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
        >
          Iniciar sesión
        </header>
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
          <div class="alert alert-danger err-form" v-if="errForm" role="alert">
            {{ errMsg }}
          </div>
          <div class="form-link">
            <a href="#" class="forgot-pass">¿Olvídaste tu contraseña?</a>
          </div>
          <div class="field button-field">
            <button @click="loginUser">Iniciar sesión</button>
          </div>
        </form>
        <div class="form-link">
          <span
            class="theme-text"
            :class="{ 'mode-light': !darkmode, 'mode-dark': darkmode }"
            >¿Aún no tienes una cuenta?
            <router-link to="/register" class="link signup-link"
              >Regístrate</router-link
            >
          </span>
        </div>
      </div>
      <div class="line-custom theme-text">O</div>
      <div class="media-options">
        <a href="#" class="field facebook" @click.prevent="withGoogle">
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
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { alertaForm } from "../helpers/funciones";

const email = ref("");
const password = ref("");
const errForm = ref(false);
const errMsg = ref("");
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

const loginUser = (e) => {
  e.preventDefault();
  if (!email.value || !password.value) {
    errForm.value = true;
    errMsg.value =
      "Por favor, ingresa un correo electrónico y una contraseña válidos";
    return;
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((response) => {
      router.push("/students"); // redirect to the feed
      alertaForm("Sesión iniciada", "success", 3000);
    })
    .catch((error) => {
      console.log(error);
      const errorMessages = {
        "auth/user-not-found": "No se encontró ninguna cuenta con el correo.",
        "auth/invalid-email":
          "El correo electrónico proporcionado no es válido.",
        "auth/wrong-password": "Contraseña incorrecta",
      };
      errMsg.value =
        errorMessages[error.code] ||
        "Verifique que su correo y contraseña sean correctos.";
      errForm.value = true;
    });
};
const withGoogle = async () => {
  const provider = new GoogleAuthProvider();
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    router.push("/students");
    alertaForm("Sesión iniciada con Google", "success", 3000);
  } catch (error) {
    console.log(error);
    alertaForm(
      "Ha ocurrido un error al intentar iniciar sesión.",
      "error",
      3000
    );
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.customData.email;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }
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
.line-custom {
  text-align: center;
  padding: 0.1rem 0;
  border-bottom: 1px solid #d4d4d4;
}
.line {
  position: relative;
  height: 1px;
  width: 100%;
  margin: 36px 0;
  background-color: #d4d4d4 !important;
  z-index: 1;
}
/* .line::before {
  content: "Or";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  color: #d4d4d4;
  padding: 0 15px;
  z-index: 2;
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
  font-size: 14px;
  margin-top: 5px;
}
.success-pw {
  font-size: 14px;
  margin-top: 5px;
}
</style>

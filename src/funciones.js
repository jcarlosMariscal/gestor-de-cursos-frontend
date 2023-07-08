import Swal from "sweetalert2";
import axios from "axios";

export function mostrarAlerta(title, icon, foco = "") {
  if (foco != "") {
    document.getElementById(foco).focus();
  }
  Swal.fire({
    title,
    icon,
    customClass: { confirmButton: "btn btn-primary", popup: "animated zoonIn" },
    buttonsStyling: false,
  });
}
export function confirmar(urlConSlash, id, title, text) {
  let url = urlConSlash + id;
  const swalWithBootstrapButton = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-danger me-3",
      cancelButton: "btn btn-secondary",
    },
  });
  swalWithBootstrapButton
    .fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `<i class="fa-solid fa-check"></i> Sí, eliminar.`,
      cancelButtonText: `<i class="fa-solid fa-ban"></i> Cancelar.`,
    })
    .then((res) => {
      if (res.isConfirmed) {
        enviarSolicitud("DELETE", { id }, url, "Eliminado con éxito.");
      } else {
        mostrarAlerta("Operación cancelada", "info");
      }
    });
}

export function enviarSolicitud(method, parametros, url, mensaje) {
  axios({ method, url, data: parametros })
    .then((res) => {
      let state = res.status;
      if (state == 200) {
        mostrarAlerta(mensaje, "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        mostrarAlerta("No se pudo recuperar la respuesta", "error");
      }
    })
    .catch((err) => mostrarAlerta("Servidor no disponible", "error"));
}

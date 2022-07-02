let abrirVentana = document.getElementById("enviar"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  cerrarVentana = document.getElementById("aceptar");

abrirVentana.addEventListener(`click`, function () {
  overlay.classList.add("active");
  popup.classList.add("active");
});

cerrarVentana.addEventListener(`click`, function () {
  overlay.classList.remove("active");
  popup.classList.remove("active");
});

function enviardatos() {
  let nombreusuario = document.getElementById("nombre").value,
    emailusuario = document.getElementById("email").value,
    mensajeusuario = document.getElementById("mensaje").value;
  /*alert (nombreusuario);*/
  document.getElementById("mensaje-usuario").innerHTML =
    nombreusuario +
    ", por favor, revise su correo:  " +
    emailusuario +
    " para confirmar su registro, gracias por su comentario: " +
    mensajeusuario;
}

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");

  let sectionSelecciona1 = document.getElementById("seleccionar-1");
  sectionSelecciona1.style.display = "none";
  sectionSeleccionarMascota.style.display = "none";

  let sectionSeleccion = document.getElementById("section-seleccion")
  sectionSeleccion.style.display = "none"
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "block";

  let seccionbotonseleccionar = document.getElementById("boton-mascota")
  seccionbotonseleccionar.style.display = "none"
  
  let inputBulbasaur = document.getElementById("Bulbasaur");
  let inputPiplup = document.getElementById("Piplup");
  let inputfennekin = document.getElementById("fennekin");
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  if (inputBulbasaur.checked) {
    spanMascotaJugador.innerHTML = "Bulbasaur";
  } else if (inputPiplup.checked) {
    spanMascotaJugador.innerHTML = "Piplup";
  } else if (inputfennekin.checked) {
    spanMascotaJugador.innerHTML = "fennekin";
  } else {
    alert("Selecciona una mascota");
  }
  
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let sectionMensajes = document.getElementById("mensajes");
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Bulbasaur";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Piplup";
  } else {
    spanMascotaEnemigo.innerHTML = "fennekin";
  }
  sectionMensajes.style.display = 'block';
  popupfuego();
  popupagua();
  popuptierra();
}
function ataqueFuego() {
  
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
  
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate();
}
function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, perdiste :(");
  }
}
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", las mascota del enemigo atacó con " +
    ataqueEnemigo + "- " + resultado;
  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;
  sectionMensajes.appendChild(parrafo);
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}
function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function popupfuego() {
  
  const btnAbrirModal = document.querySelector("#boton-fuego");
  const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
  const modal = document.querySelector("#Modal");

btnAbrirModal.addEventListener("click", () =>{
  modal.showModal();
})
btnCerrarModal.addEventListener("click", () =>{
  modal.close();
})
}

function popupagua() {
  
  const btnAbriragua = document.querySelector("#boton-agua");
  const btnCerrarModalAgua = document.querySelector("#btn-cerrar-modal-agua");
  const modalagua = document.querySelector("#Modalagua");

btnAbriragua.addEventListener("click", () =>{
  modalagua.showModal();
})
btnCerrarModalAgua.addEventListener("click", () =>{
  modalagua.close();
})
}

function popuptierra() {
  
  const btnAbrirtierra = document.querySelector("#boton-tierra");
  const btnCerrarModaltierra = document.querySelector("#btn-cerrar-modal-tierra");
  const modaltierra = document.querySelector("#Modaltierra");

btnAbrirtierra.addEventListener("click", () =>{
  modaltierra.showModal();
})
btnCerrarModaltierra.addEventListener("click", () =>{
  modaltierra.close();
})
}



window.addEventListener("load", iniciarJuego);

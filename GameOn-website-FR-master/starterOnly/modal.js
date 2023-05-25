function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cerrar = document.querySelector(".close");
const nombre = document.querySelector("#first");
const apellido = document.querySelector("#last");
const email = document.querySelector("#email");
const nacimiento = document.querySelector("#birthdate");
const quantidad = document.querySelector("#quantity");
const localizar = document.querySelector("#city");
const terminos = document.querySelector("#checkbox1");
const regexMain = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const form = document.querySelector("#formulario");
// erreurs
const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorEmail = document.querySelector("#errorEmail");
const errorNacimiento = document.querySelector("#errorNacimiento");
const errorQuantidad = document.querySelector("#errorQuantidad");
const errorLocalizar = document.querySelector("#errorLocalizar")
const errorTerminos = document.querySelector("#errorTerminos")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fermer la modale
function closeModal() {
  modalbg.style.display = "none";
}
cerrar.addEventListener("click", closeModal);




//validation prénom


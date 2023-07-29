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
const close = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const city = document.querySelector("#location");
const terms = document.querySelector("#checkbox1");
const regexNames = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexMail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
const regexNumbers = /^[0-9][0-9]?$|^99$/;
const form = document.querySelector("#form");
const validMessage = document.querySelector("#valide");
const btnFermer = document.querySelector(".close_btn");

// erreurs
const errorFirstName = document.querySelector("#first_error");
const errorLastName = document.querySelector("#last_error");
const errorEmail = document.querySelector("#email_error");
const errorBirthdate = document.querySelector("#birthdate_error");
const errorQuantity = document.querySelector("#quantity_error");
const errorCity = document.querySelector("#city_error");
const errorTerms = document.querySelector("#checkbox_error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal 

btnFermer.addEventListener("click", closeModalValide);
function closeModalValide() {
  modalbg.style.display = "none";
  /* Modal formValide */
  valide.style.display = "none";
}



//validation prénom

function firstNameChecker() {

  if ((firstName.value.length < 2) || (firstName.value === '')
    || (!firstName.value.match(regexNames))) {
    errorFirstName.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ de prénom";
    errorFirstName.style.display = "block";

    firstName.style.border = "solid red 2px";

    return false;

  }
  else {
    errorFirstName.style.display = "none";
    firstName.style.border = "none";
    form.style.display = "block";

    return true;
  }
}

//validation nom

function lastNameChecker() {

  if ((lastName.value.length < 2) || (lastName.value === '')
    || (!lastName.value.match(regexNames))) {
    errorLastName.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    errorLastName.style.display = "block";

    lastName.style.border = "solid red 2px";

    return false;

  }
  else {
    errorLastName.style.display = "none";
    lastName.style.border = "none";
    form.style.display = "block";

    return true;
  }
}

//validation email

function emailChecker() {
  if ((email.value.length < 2)
  ) {
    errorEmail.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ de mail";
    errorEmail.style.display = "block";

    email.style.border = "solid red 2px";

    return false;


  } else if (!email.value.match(regexMail)) {
    errorEmail.innerHTML =
      "Veuillez rentrez un format de mail valide";
    errorEmail.style.display = "block";
    email.style.border = "solid red 2px";
    return false;
  }

  else {
    errorEmail.style.display = "none";
    email.style.border = "none";
    form.style.display = "block";

    return true;
  }
}

//validation date de naissance

function birthdateChecker() {

  if (!birthdate.value) {
    errorBirthdate.innerHTML = "Veuillez renseigner votre date d'anniversaire";
    errorBirthdate.style.display = "block";
    birthdate.style.border = "solid red 2px";
    return false;
  } else {
    errorBirthdate.style.display = "none";
    birthdate.style.border = "none";
    return true;
  }
}

//validation quantité de tournois 

function quantityChecker() {



  if ((quantity.value.length == 0)) {
    errorQuantity.innerHTML =
      "Veuillez renseigner votre nombre de participation";
    errorQuantity.style.display = "block";
    quantity.style.border = "solid red 2px";
    return false;
  }
  else if (parseInt(quantity.value) < 0 || parseInt(quantity.value) > 99) {
    errorQuantity.innerHTML =
      "Doit être compris entre 0 et 99";
    errorQuantity.style.display = "block";
    quantity.style.border = "solid red 2px";
    return false;
  }
  else {
    errorQuantity.style.display = "none";
    quantity.style.border = "none";
    return true;
  }
}



// validation ville

function cityChecker() {
  let isChecked = false;
  const cityRadios = document.getElementsByName('location');
  for (let cityRadio of cityRadios) {
    if (cityRadio.checked) {
      isChecked = true;
      break;
    }
  }
  if (
    !isChecked
  ) {
    document.getElementById("city_error").innerHTML = 'Vous devez choisir une option.';
    return false;

  } else {
    document.getElementById("city_error").innerHTML = '';
    return true;
  }
}




//validation de charte d'utilisation

function termsChecker() {
  if (terms.checked == false) {
    errorTerms.innerHTML = "Merci d'accepter les conditions d'utilisations";
    errorTerms.style.display = "block";
    return false;
  } else {
    errorTerms.style.display = "none";
    return true;
  }
};

//envoie de formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (

    firstNameChecker() &&
    lastNameChecker() &&
    emailChecker() &&
    birthdateChecker() &&
    quantityChecker() &&
    cityChecker()

  ) {

    validMessage.style.display = "block";
  }
});
/* function editNav() {
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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
 */



/* burger nav toggle */


/* ------------------------------------- */
/* sign-up modal */
/* ------------------------------------- */

/* Definition of concerned dom elements --- */

var signUpmodal=document.getElementById("signUp-modal");

/* signup btn to open modal */
const openModalSignUpbtn=document.getElementById("signupBtn");
/* cancel btn to close modal */
var cancelModalBtn=document.getElementById("cancelModalBtn");
/* go btn to send form data */
var sendFormDataBtn=document.getElementById("goBtn");



/* Affiliated functions------------ */

/* open modal on signup btn click */
openModalSignUpbtn.onclick = function() {
  signUpmodal.style.display = "block";
}

/* close modal on cancel btn click */
cancelModalBtn.onclick = function() {

  /*  + check if fields = pristine, if not, ask for confirmation */
  signUpmodal.style.display = "none";
}




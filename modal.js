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


/* ------------------------------------- */
/* burger nav toggle */
/* ------------------------------------- */


/* ------------------------------------- */
/* sign-up modal */
/* ------------------------------------- */

/* Definition of concerned dom elements --- */

var signUpmodal= document.getElementById("signUp-modal");

/* signup btn to open modal */
const openModalSignUpbtn= document.getElementById("signupBtn");
/* cancel btn to close modal */
var cancelModalBtn= document.getElementById("cancelModalBtn");
/* go btn to send form data */
var sendFormDataBtn= document.getElementById("goBtn");



/* Affiliated functions------------ */

/* open modal on signup btn click */
/* modal's attribute "display" changes from "none" to "block"  */
/* and the "animation" attribute is used to change opacity as a transition */
openModalSignUpbtn.onclick = function() {
  signUpmodal.setAttribute("style", "display:block; animation: fade-in 0.6s;");
}

/* close modal on cancel btn click */
// cancelModalBtn.onclick = function() {
  /*  + check if fields = pristine, if not, ask for confirmation */
  /* signUpmodal.setAttribute("style", "display:none ;animation: fade-out 6s;"); */
// }

cancelModalBtn.addEventListener('click', function(event){
    event.stopPropagation(); /* for cancel btn 's parent also contains click  */
    signUpmodal.setAttribute("style", "animation: fade-out 0.6s;")

})


/* retrieve checked value from locations radio input */
/* function getRadioValue() {
  var checkedValue; 
  var radioInputs = document.getElementsByClassName('locations');
  for (var i=0; i < radioInputs[i];i++) {
    if (radioInputs[i].checked) {
      checkedValue = radioInputs[i].value;
      break;
    }
  }
  console.log('checkedvalue==', checkedValue);
  return checkedValue;
}  */



/* trigger form sending with 'go' btn  */
sendFormDataBtn.addEventListener('click', function(event){ 

    /* retrieve input values from form */
  var inputs = document.getElementById('signUp-form').elements;
  var newUser = new Array();

  /* make object out of each of input value */
  for (var i=0 ; i < inputs.length; i++ ) {
    console.log('input[i].value==',inputs[i].value );
    var newInputObject = new Object();
    newInputObject.fieldName = inputs[i].name;
    newInputObject.value = inputs[i].value;
    
    /* push new field object to user array  */
    newUser.push(newInputObject);
  }
  var location = document.querySelector('input[name="location"]:checked').value;
  console.log('LOCATION==',location);

  // var lorem1 = document.querySelector('input[name="lorem1"]:checked')
  
  console.log('newUser==', newUser);
});








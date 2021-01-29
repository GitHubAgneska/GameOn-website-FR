


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
var openModalSignUpbtn= document.getElementById("signupBtn");
/* cancel btn to close modal */
var cancelModalBtn= document.getElementById("cancelModalBtn");
/* form */
var signUpForm = document.forms[0];
/* go btn to send form data */
var sendFormDataBtn= document.getElementById("goBtn");



/* Affiliated functions ------------ */

/* On modal page load/reload : RESET FORM */
window.onload = function() {
  signUpForm.reset();
}

/* OPEN MODAL on signup btn click */
/* modal's attribute "display" changes from "none" to "block"  */
/* and the "animation" attribute is used to change opacity as a transition */
openModalSignUpbtn.onclick = function() {
  signUpmodal.setAttribute("style", "display:block; animation: fade-in 0.6s;");
}

/* CLOSE MODAL on cancel btn click */
// cancelModalBtn.onclick = function() {
  /*  + check if fields = pristine, if not, ask for confirmation */
  /* signUpmodal.setAttribute("style", "display:none ;animation: fade-out 6s;"); */
// }

cancelModalBtn.addEventListener('click', function(event){
    event.stopPropagation(); /* for cancel btn 's parent also contains click  */
    signUpmodal.setAttribute("style", "animation: fade-out 0.6s;")

})




/* PROCESS FORM DATA ------------  */

/* Definition of concerned dom elements --- */



/* FORM INPUTS VALIDATION  --- */ 
/* happens when user hits submit ('go' btn )*/
function validateFormInputs() {

  /* name + lastname must be at leat 2 characters  */
  const firstName = document.getElementById('firstName');
  /* describe tests condition  */
  const firstNameTest = firstName.value.length >= 2;
  /* if test fails, display field error message, making first '.requirements' class element visible */
  if ( firstNameTest ) { console.log('firstNameTest OK!');
    } else { 
      var requirement = document.getElementsByClassName('requirements')[0];
      requirement.style.visibility = 'visible';
      firstName.style.border = '2px solid red';
      console.log('firstNameTest failed!');
    }

  const lastName = document.getElementById('lastName');
  const lastNameTest = lastName.value.length >= 2;
  if ( lastNameTest ) { console.log('lastNameTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[1];
      requirement.style.visibility = 'visible';
      lastName.style.border = '2px solid red';
      console.log('lastNameTest failed!');
    }

  /* email address must be valid */
  const email = document.getElementById('email');
  const emailCorrectFormat = "[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*";
  const emailTest = (email.value).match(emailCorrectFormat);
  if ( emailTest ) { console.log('emailTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[2];
      requirement.style.visibility = 'visible';
      email.style.border = '2px solid red';
      console.log('emailTest failed!');
    }

  /* birthdate must be valid */
  const birthdate = document.getElementById('birthdate');
  const birthdateCorrectFormat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  const birtdateTest = birthdate.value.match(birthdateCorrectFormat);
  if ( birtdateTest ) { console.log('birthdateTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[3];
      requirement.style.visibility = 'visible';
      birthdate.style.border = '2px solid red';
      console.log('birthdateTest failed!');
    }

  /* tournaments must be a number */
  const tournaments = document.getElementById('tournaments');
  const tournamentsTest = typeof(tournaments.value) === Number;
  if ( tournamentsTest ) { console.log('tournamentsTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[4];
      requirement.style.visibility = 'visible';
      tournaments.style.border = '2px solid red';
      console.log('tournamentsTest failed!');
    }

  /* one radio btn must be selected */
  const locations = Array.from(document.querySelectorAll('input[type="radio"]'));
  var locationChecked = document.querySelector('input[name="location"]:checked');
  const locationTest = locations.includes(locationChecked);
  if ( locationTest ) { console.log('locationTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[5];
      requirement.style.visibility = 'visible';
      console.log('locationTest failed!');
    }

  /* user agrement checkbox must be checked  + second one unchecked */
  const checkbox = document.getElementById('lorem1');
  // const checkbox1B = document.querySelector('input[type="checkbox"]:checked');
  const userAgreementTest = checkbox.value !== null;
  if ( userAgreementTest ) { console.log('userAgreementTest OK!'); 
  } else { 
      var requirement = document.getElementsByClassName('requirements')[6];
      requirement.style.visibility = 'visible';
      console.log('userAgreementTest failed!');
    }

}


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

  event.preventDefault();
  event.stopPropagation();

  validateFormInputs();

    /* retrieve input values from form */
  var inputs = document.getElementById('signUp-form').elements;
  var newUser = new Array();

  /* make object out of each of input value */
  for ( var i = 0 ; i < inputs.length; i++ ) {
    console.log('input[i].value==',inputs[i].value );
    var newInputObject = new Object();

    /* each field name becomes object key */
    newInputObject.fieldName = inputs[i].name;

    /* each text input value becomes object value */
    if ( inputs[i].type == 'text' || inputs[i].type == 'date') { 
      newInputObject.value = inputs[i].value;

    /* radio input value for location is the only one that is checked */
    } else if ( inputs[i].type == 'radio' && inputs[i].checked ) {
      var locationChecked = document.querySelector('input[name="location"]:checked');
      newInputObject.value = locationChecked.value;

    /* checkbox input value is true or false */
    } else if (inputs[i].type == 'checkbox' ) {
      newInputObject.value = document.querySelector('input[type="checkbox"]:checked').value;
    }
    /* push each new field object to user array  */
    /* if value is not empty  ( because of multiple radio input fields ... )*/
    if (newInputObject.value) {
      newUser.push(newInputObject);
    }
  }
  console.log('newUser==', newUser);
  return newUser;
});









/* ------------------------------------- */
/* burger nav toggle */
/* ------------------------------------- */

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
/* SIGNUP MODAL */
/* ------------------------------------- */
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

/* dom elements: INPUTS */
var inputs = document.getElementById('signUp-form').elements;
var inputsTouched = false;


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



/* CHECKING IF FIELDS HAVE BEEN TOUCHED */
document.addEventListener('input', function(event) {
  event.stopPropagation();
  inputsTouched = true;
  console.log('Some fields have been touched!');
})

cancelModalBtn.addEventListener('click', function(event){
    event.stopPropagation();
    /* before closing, check if fields = touched */
    if (inputsTouched) { /* if touched, ask for confirmation  */
      confirm('are you sure you want to close modal?');
      /* if user hits 'cancel' */
      if(!confirm) { return;}
      else {/* if user hits 'OK' */
        /* close modal + reset form */
        signUpmodal.setAttribute("style", "animation: fade-out 0.6s;");
        signUpForm.reset();
      }
    }
})



/* PROCESS FORM DATA : RETRIEVE / VALIDATE / SUBMIT ----- */
/* ------------------------------------------------------ */


/* 2) VALIDATION  of input values from form --- */ 
function validateFormInputs() {

  /* disable html5 validation */
  /* document.forms.register.noValidate = true; */
  
  /* store fields validity state in object */
  var valid = {};
  /*  store form state */
  var isFormValid = false;
  
  /* DEFINITION OF EACH FIELD'S CUSTOM VALIDATION */
  /* ------------------------------------------------------ */
  /* locate concerned dom element */
  const firstName = document.getElementById('firstName');
  /* describe its validation condition  */
  const firstNameValid = firstName.value.length >= 2;
  /* what happens if not valid */
  if ( !firstNameValid ) { 
    /* mark fiels as not valid */
    firstName.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('firstName');
  } else { 
    /* if field valid : set field in valid object to true */
    valid.firstName = true;
    /* if requirements message visible, hide it */
    removeRequirementsMessage('firstName');
  }
  
  /* locate concerned dom element */
  const lastName = document.getElementById('lastName');
  /* describe its validation condition  */
  const lastNameValid = lastName.value.length >= 2;
  /* what happens if not valid */
  if ( !lastNameValid ) { 
    /* mark fiels as not valid */
    lastName.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('lastName');
  } else { 
    /* if field valid : set field in valid object to true */
    valid.lastName = true;
    /* if requirements message visible, hide it */
    removeRequirementsMessage('lastName');
  }

  /* locate concerned dom element */
  const email = document.getElementById('email');
  /* describe its validation condition  */
  const emailCorrectFormat = "[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*";
  const emailTest = (email.value).match(emailCorrectFormat);
  if ( !emailTest ) {  
    /* mark fiels as not valid */
    email.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('email');
  } else { 
    /* if field valid : set field in valid object to true */
    valid.email = true;
    /* if requirements message visible, hide it */
    removeRequirementsMessage('email');
  }

  /* locate concerned dom element */
  const birthdate = document.getElementById('birthdate');
  /* describe its validation condition  */
  const birthdateCorrectFormat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  const birtdateTest = birthdate.value.match(birthdateCorrectFormat);
  if ( !birtdateTest ) { 
    /* mark fiels as not valid */
    birthdate.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('birthdate');
  } else { 
    /* if field valid : set field in valid object to true */
    valid.birthdate = true;
    /* if requirements message visible, hide it */
    removeRequirementsMessage('birthdate');
  }

  /* locate concerned dom element */
  const tournaments = document.getElementById('tournaments');
  /* describe its validation condition  */
  const tournamentsTest = typeof(tournaments.value) === Number;
  if ( !tournamentsTest ) {
      /* mark fiels as not valid */
      tournaments.isValid = false;
      /* call function to set error in field */
      setRequirementsMessage('tournaments');
    } else { 
      /* if field valid : set field in valid object to true */
      valid.tournaments = true;
      /* if requirements message visible, hide it */
      removeRequirementsMessage('tournaments');
    }

  /* locate concerned dom element */
  const locations = Array.from(document.querySelectorAll('input[type="radio"]'));
  var locationChecked = document.querySelector('input[name="location"]:checked');
  /* describe its validation condition  */
  const locationTest = locations.includes(locationChecked);
  if ( !locationTest ) { 
      /* mark fiels as not valid */
      locations.isValid = false;
      /* call function to set error in field */
      setRequirementsMessage('locations');
    } else { 
      /* if field valid : set field in valid object to true */
      valid.locations = true;
      /* if requirements message visible, hide it */
      removeRequirementsMessage('locations');
    }

    /* locate concerned dom element */
    const checkbox = document.getElementById('lorem1');// const checkbox1B = document.querySelector('input[type="checkbox"]:checked');
    /* describe its validation condition  (user agrement checkbox must be checked  + second one unchecked) */
    const userAgreementTest = checkbox.value !== null;
    if ( !userAgreementTest ) { 
       /* mark fiels as not valid */
        checkbox.isValid = false;
        /* call function to set error in field */
        setRequirementsMessage('checkbox');
      } else { 
        /* if field valid : set field in valid object to true */
        valid.checkbox = true;
        /* if requirements message visible, hide it */
        removeRequirementsMessage('checkbox');
      }

      /* CAN FORM BE SUBMITTED? :  */
      /* LOOP THROUGH 'VALID' OBJECT : if any error, set 'isFormValid' to false */
      for ( var field in valid ) { 
        if ( !valid[field] ) {
          isFormValid = false;
          break; /* stop loop as error was found */
        }
        isFormValid = true; /* no errors in validation process: form is valid */
      }

}

/* if field not valid : show its requirements for validation  */
/* ------------------------------------------------------ */
function setRequirementsMessage(id) {
  /* locate concerned dom element (id param) */
  var elementFromId = document.getElementById(id);
  /* locate corresponding '.requirement' class element ( = first immediate following id )*/
  var requirement = document.querySelector( '#'+ id  + '+ .requirements'); /* ('#id + .class') */
  
  /* set element's requirements attributes to be visible */
  requirement.style.visibility = 'visible';
  elementFromId.style.border = '2px solid red';
}

/* if field valid after correction : hide its requirements for validation  */
/* ----------------------------------------------------------------------- */
function removeRequirementsMessage(id) {
  /* locate concerned dom element (id param) */
  var elementFromId = document.getElementById(id);
  /* locate corresponding requirement element */
  var requirement = document.querySelector('#'+ id  + '+ .requirements'); /* ('#id + .class') */

  /* set element's requirements attributes to be invisible */
  requirement.style.visibility = 'invisible';
  elementFromId.style.border = 'none';
}



/* SUBMIT FORM : on click 'submit', all other functions are called */
/* ----------------------------------------------------------------*/
sendFormDataBtn.addEventListener('click', function(event){ 

  event.preventDefault();
  event.stopPropagation();

  validateFormInputs();

  // If the form did not validate, prevent it being submitted
  if (! isFormValid) { // If isFormValid is not true
    e.preventDefault(); // Prevent the form being submitted
    }

  });



  /* AFTER FORM PASSES VALIDATION, FIELDS/VALUES ARE MADE TO A 'NEW USER' ARRAY OF OBJECTS */
  /* ------------------------------------------------------------------------------------- */
  function createNewUserFromData() {
    
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



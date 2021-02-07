/* ------------------------------------- */
/* ------------------------------------- */
/* BURGER NAV TOGGLE */
/* ------------------------------------- */
/* ------------------------------------- */


/* burger btn */
var burgerBtn = document.getElementById("burger-btn");
/* header nav */
var headerNav = document.getElementById("header__nav");
/* burger not active by default */
var burgerIsActive = false;
/* click event to toggle burger */
burgerBtn.addEventListener('click', toggleBurgerNav);


function toggleBurgerNav(event) {
  event.stopPropagation();
  event.preventDefault();
  /* check if burger active */
  if (!burgerIsActive ) { // if not active
    headerNav.classList.replace("header__nav--default","header__nav--active");
    burgerIsActive = true;
  } else { // if active
    headerNav.classList.replace("header__nav--active", "header__nav--default");
    burgerIsActive = false;
  }
}




/* ------------------------------------- */
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

/* confirmation to cancel when inputs have been touched */
var confirmBox = document.getElementById('confirBox-cancelModal');
confirmBox.isVisible = false; /* default */
var confirmBoxYesBtn = document.getElementById('yes-btn');
var confirmBoxNoBtn = document.getElementById('no-btn');


/* form */
var signUpForm = document.forms[0]; // or -  document.getElementById('signUp-form');
/* go btn to send form data */
var sendFormDataBtn= document.getElementById("goBtn");

/* dom elements: INPUTS */
var inputs = document.getElementById('signUp-form').elements;
var inputsTouched = false;

/* dom elements: requirements  */
var requirementIsVisible = false;

/* confirmation message (after submit passed) */
var signedUpConfirmationMessage = document.getElementById('confirmation-message-wrapper');
/* btn 'go' form + 'close' confirmation message */
var closeConfirmationBtn = document.getElementById('goBtn');


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


/* CHECKING IF FIELDS HAVE BEEN TOUCHED (before closing modal) */
document.addEventListener('input', function(event) {
  event.stopPropagation();
  inputsTouched = true;
  console.log('Some fields have been touched!');
})





/* CLOSE MODAL ON CANCEL BTN */
cancelModalBtn.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    /* before closing, check if fields = touched */
    if (inputsTouched) { 
      /* if touched, ask for confirmation  */
      /* trigger confirmBox */
      confirmBox.style.display = 'block';
      confirmBox.isVisible = true;
      /* if user hits 'cancel' (no) */
      confirmBoxNoBtn.onclick = function() { confirmBox.style.display = 'none';confirmBox.isVisible = false;}
      /* if user hits 'OK' */
      confirmBoxYesBtn.onclick = function() {
        /* shortcut for : */
        /* close modal*/
        // signUpmodal.setAttribute("style", "animation: fade-out 0.6s;");
        /* reset form fields */
        // signUpForm.reset();
        location.reload();
      }
      /* if untouched, just close modal  */
    } else { signUpmodal.setAttribute("style", "animation: fade-out 0.6s;")};
})



/* PROCESS FORM DATA : RETRIEVE / VALIDATE / SUBMIT ----- */
/* ------------------------------------------------------ */


/* VALIDATION  of input values from form --- */ 
/* ------------------------------------------s*/

function validateFormInputs() {

  /* store fields validity state in object */
  var valid = {};
  /* store fields marked as invalid in array */
  var notValid = [];
  /*  store form state */
  var isFormValid = false;
  
  /* DEFINITION OF EACH FIELD'S CUSTOM VALIDATION */
  /* ------------------------------------------------------ */
  /* CHECK FIRSTNAME FIELD IS VALID */
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
    firstName.requirementIsVisible = true;
    /* add element to array  */
    notValid.push(firstName);

  } else { 
    /* if field valid : set field in valid object to true */
    valid.firstName = true;
  }
  
  /* CHECK LASTNAME FIELD IS VALID */
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
    /* add element to array  */
    notValid.push(lastName);
  } else { 
    /* if field valid : set field in valid object to true */
    valid.lastName = true;
  }

  /* CHECK EMAIL FIELD IS VALID */
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
    /* add element to array  */
    notValid.push(email);
  } else { 
    /* if field valid : set field in valid object to true */
    valid.email = true;
  }

  /* CHECK PHONE FIELD IS VALID */
   /* locate concerned dom element */
  const phoneNumber = document.getElementById('phone');
  /* describe its validation conditions :  */
  // string should contain only digits
  const phoneCorrectFormat = /^\d+$/;
  // & be 10 chars long
  const phoneCorrectLength = 10;
  const phoneTest = phoneNumber.value.length == 10 && phoneCorrectFormat.test(phoneNumber.value);

  if (!phoneTest ) {
    /* mark fiels as not valid */
    phone.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('phone');
    /* add element to array  */
    notValid.push(phone);
  } else {
    /* if field valid : set field in valid object to true */
    valid.phone = true;
  }


  /* CHECK DOB FIELD IS VALID */
  /* locate concerned dom element */
  const birthdate = document.getElementById('birthdate');
  /* describe its validation condition  */
  const birthdateCorrectFormat = /^\d{4}-\d{2}-\d{2}$/;
  const birthdateTest = (birthdate.value).match(birthdateCorrectFormat);
  
  if ( !birthdateTest ) { 
    /* mark fiels as not valid */
    birthdate.isValid = false;
    /* call function to set error in field */
    setRequirementsMessage('birthdate');
    /* add element to array  */
    notValid.push(birthdate);
  } else { 
    /* if field valid : set field in valid object to true */
    valid.birthdate = true;
  }

  /* CHECK TOURNAMENTS FIELD IS VALID */
  /* locate concerned dom element */
  const tournaments = document.getElementById('tournaments');
  /* describe its validation condition : DOB str should contain only digits */
  const tournamentsTest = /^\d+$/.test(tournaments.value);

  if ( !tournamentsTest ) {
      /* mark fiels as not valid */
      tournaments.isValid = false;
      /* call function to set error in field */
      setRequirementsMessage('tournaments');
      /* add element to array  */
      notValid.push(tournaments);

    } else { 
      /* if field valid : set field in valid object to true */
      valid.tournaments = true;
    }

  /* CHECK LOCATION FIELD IS VALID */
  /* locate concerned dom element */
  const locations = document.getElementById('locations');
  /* const locations = Array.from(document.querySelectorAll('input[type="radio"]')); */
  var locationChecked = document.querySelector('input[name="location"]:checked');
  /* describe its validation condition  */
  
  if ( !locationChecked ) { 
  /* if ( !locationTest ) {  */
      /* mark fiels as not valid */
      locations.isValid = false;
      /* call function to set error in field */
      setRequirementsMessage('locations');
      /* add element to array  */
      notValid.push(locations);

    } else { 
      /* if field valid : set field in valid object to true */
      valid.locations = true; 
    }

     /* CHECK USER AGREEMENT FIELD IS VALID */
    /* locate concerned dom element */
    const checkbox = document.getElementById('lorem1');
    /* & describe its validation condition  (user agreement checkbox must be checked ) */
    const userAgreementTest = document.querySelector('input[type="checkbox"]:checked');

    /* if test fails (no box checked) */
    if ( !userAgreementTest ) { 
       /* mark fiels as not valid */
        checkbox.isValid = false;
        /* call function to set error in field */
        setRequirementsMessage('checkbox');
        /* add input element to array to then add event listener */
        notValid.push(checkbox);

      } else { 
        /* if field valid : set field in valid object to true */
        valid.checkbox = true;
      }

      /* add input event on every field input marked as invalid */
      /* so when USER EDITS it again, requirement message disappears */
      /* until next submit */ 
      notValid.forEach(x => x.addEventListener('input', function() { removeRequirementsMessage(x.id) }));

      /* CAN FORM BE SUBMITTED? :  */
      /* LOOP THROUGH 'VALID' OBJECT : if any error, set 'isFormValid' to false */
      for ( var field in valid ) { 
        if ( !valid[field] ) {
          isFormValid = false;
          break; /* stop loop as error was found */
        }
        /* else no errors in validation process AND 'notValid' array is empty : form is valid */
        if (!notValid) {
          isFormValid = true; 
        }
      }
      console.log('ISVALID==', isFormValid);
      return isFormValid;
}  
/* ------------------- end of validateFormInputs() function---------------------------- */



/* if field not valid : SHOW its REQUIREMENTS for validation  */
/* ---------------------------------------------------------- */
function setRequirementsMessage(id) {
  /* locate concerned dom element (id param) */
  var elementFromId = document.getElementById(id);
  // console.log('SET elementFromId ==', elementFromId);

  /* locate corresponding '.requirement' class element 
  ( = first immediate following id ('#id + .class') or descending class attribute ('#id > .class') */
  var requirement = document.querySelector( '#'+ id  + '+ .requirements') || document.querySelector( '#'+ id  + ' > .requirements');
  // console.log('SET REQUIREMENT=', requirement);

  /* if requirements are NOT already visible  */
  if ( ! elementFromId.requirementIsVisible ) {
    /* set element's requirements attributes to be visible */
    requirement.style.visibility = 'visible';
    elementFromId.style.border = '2px solid red';

    /* last 2 fields are added padding when requirements = on  */
    if ( id == 'locations' ||  id == 'checkbox' ) { 
      elementFromId.style.padding = "2%";
      elementFromId.style.borderRadius = "5px";
    }
    /* store requirements visibility as on */
    elementFromId.requirementIsVisible = true;
    /* if requirements are already visible, don't do anything */
  } else { return ;}
}

/* if field valid after correction or being edited : HIDE its REQUIREMENTS  */
/* ------------------------------------------------------------------------ */
function removeRequirementsMessage(id) {
  /* locate concerned dom element (id param) */
  var elementFromId = document.getElementById(id);
  // console.log('RM - elementFromId ==', elementFromId);

  /* locate corresponding '.requirement' class element 
  ( = first immediate following id ('#id + .class') or descending class attribute ('#id > .class') */
  var requirement = document.querySelector('#'+ id  + '+ .requirements') || document.querySelector( '#'+ id  + ' > .requirements');
  // console.log('REQUIREMENT=', requirement);

  requirement.style.visibility = 'hidden';
  elementFromId.style.border = 'none';

  /* CHECK MESSAGE VISIBLE  */
  /* if field's requirements are visible  */
  // if ( elementFromId.requirementIsVisible ) {
    /* set element's requirements attributes to be invisible */
  //   requirementIsVisible = false;
  /* if requirements are already NOT visible  */
  // } else { return ;}
}



/* SUBMIT FORM : on click 'submit', all other functions are called */
/* ----------------------------------------------------------------*/
sendFormDataBtn.addEventListener('click', function(event){ 

  event.preventDefault();
  event.stopPropagation();

  /* validate fields on submit : validateFormInputs() returns a boolean that gets stored in local var */
  var isFormValid = validateFormInputs();

  // If the form did not validate, prevent it being submitted
  if ( !isFormValid ) { // isFormValid = false
    event.preventDefault(); // Prevent the form being submitted;
    return;
    } else { // isFormValid = true
      createNewUserFromData(); // create new user array

      /* TODO -- consider refactoring the following with 'replaceChild()' & the like methods */
      /* ------- and moving it out of this function  */
      /* hide form */
      signUpForm.style.display = 'none';
      /* display confirmation message */
      signedUpConfirmationMessage.style.display = 'flex';
      /* 'go' form btn becomes 'close' confirmation message */
      closeConfirmationBtn.value = "close";
      /* add event method to enable it to close modal */
      closeConfirmationBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        /* close modal */
        signUpmodal.setAttribute("style", "animation: fade-out 0.6s;");
        /* confirmation message returns to invisible (so won't show next time modal 's opened) */
        signedUpConfirmationMessage.style.display = 'none';
        /* form returns to visible (so will show next time modal 's opened) */
        signUpForm.style.display = 'block';
        /* reset form fields */
        signUpForm.reset();
      })
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


  /* end JS ========================================= */


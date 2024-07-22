import { userDetails } from "./userdetails.js";

const firstNameContainer = document.querySelector('.first-name-container');
const lastNameContainer = document.querySelector('.last-name-container');
const emailContainer = document.querySelector('.email-container');
const passwordContainer = document.querySelector('.password-container');

const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const submitButton = document.querySelector('.submit-btn');

const firstNameInput = document.querySelector('.first-name');
const firstNameErrorIcon = document.querySelector('.fn-er');

const LastNameInput = document.querySelector('.last-name');
const lastNameErrorIcon = document.querySelector('.ln-er');

const emailInput = document.querySelector('.email');
const emailErrorIcon = document.querySelector('.em-er');

const passwordInput = document.querySelector('.password');
const passwordErrorIcon = document.querySelector('.pw-er');

const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.close-btn');


emailInput.addEventListener('input', () => {
   const userEmail = emailInput.value.trim();

    emailContainer.classList.remove('red');
    emailErrorIcon.classList.remove('appear');
    emailError.classList.remove('visible');

   if (!validateEmail(userEmail)) {
    emailContainer.classList.add('red');
    emailErrorIcon.classList.add('appear');
    emailError.classList.add('visible');
   }

   if (!userEmail) {
    emailContainer.classList.remove('red');
    emailErrorIcon.classList.remove('appear');
    emailError.classList.remove('visible');
   }

})


function validateEmail(email) {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }

  submitButton.addEventListener('click', () => {
    const userFirstName = firstNameInput.value.trim();
    const userLastName = LastNameInput.value.trim();
    const userEmail = emailInput.value.trim();
    const userPassword = passwordInput.value.trim();

    let isTrue = true;

    if (userDetails.some(details => details.firstname === userFirstName)) {
        isTrue = false
    } 

    if (userDetails.some(details => details.lastname === userLastName)) {
        isTrue = false
    };

    if (userDetails.some(details => details.email === userEmail)) {
        isTrue = false
    };
    
    if (userDetails.some(details => details.password === userPassword)) {
        isTrue = false
  };
     
    if (!isTrue) {
      alert('You have already have a free trial!');
    }  else {

        let isValid = true;

       if (!userFirstName) {
        firstNameContainer.classList.add('red');
        firstNameError.classList.add('visible');
        firstNameErrorIcon.classList.add('appear');
        isValid = false;
       } else {
        firstNameContainer.classList.remove('red');
        firstNameError.classList.remove('visible');
        firstNameErrorIcon.classList.remove('appear');
       };

       if (!userLastName) {
        lastNameContainer.classList.add('red');
        lastNameError.classList.add('visible');
        lastNameErrorIcon.classList.add('appear');
        isValid = false;
       } else {
        lastNameContainer.classList.remove('red');
        lastNameError.classList.remove('visible');
        lastNameErrorIcon.classList.remove('appear');
       };

       if (!validateEmail(userEmail)) {
        emailContainer.classList.add('red');
        emailError.classList.add('visible');
        emailErrorIcon.classList.add('appear');
        isValid = false;
       } else {
        emailContainer.classList.remove('red');
        emailError.classList.remove('visible');
        emailErrorIcon.classList.remove('appear');
       };

       if (!userPassword) {
        passwordContainer.classList.add('red');
        passwordError.classList.add('visible');
        passwordErrorIcon.classList.add('appear');
        isValid = false;
       } else {
        passwordContainer.classList.remove('red');
        passwordError.classList.remove('visible');
        passwordErrorIcon.classList.remove('appear');
       };

                if (isValid) {
                    modal.classList.add('visible');
                    userDetails.push(
                        {
                            firstname: userFirstName,
                            lastname: userLastName,
                            password: userPassword,
                            email: userEmail
                        }
                    )
                };
        }
    });

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('visible');
}) 
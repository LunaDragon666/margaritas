const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");

// Name
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
// Email
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
// Subject
const subject = document.querySelector("#subjectName");
const subjectError = document.querySelector("#subjectNameError");
// Adress
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");


// If all inputs pass or fail while submitting the contact form
function passTheForm() {
   let error = false;

    // Name
    if (length(fullName.value, "") === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        error = true;
    }

    // Email
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        error = true;
    }

    // Subject
    if (length(subjectName.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        error = true;
    }

    // Adress
    if (length(adress.value, 24) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
        error = true;
    }

    return error;

} 

// When contact form is submitted after required input fields are filled in 
function submitForm(event) {
    event.preventDefault();
    const errors = passTheForm();

    if(!errors) {
        message.innerHTML = '<div class="message">Yes! Your request is on its way, and we’ll come back to you.</div>';
    } 

    // Retain inputted text after submit, unless we change it or refresh the page
    form.focus();
}

form.addEventListener("submit", submitForm);

function length(value, len) {
    if (value.trim().length > len) {
        return true;
    }   else {
        return false;
    }
}

// Email validation controller inside the contact form (email-input)
function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const patternMatches = reg.test(email);
    return patternMatches;
}
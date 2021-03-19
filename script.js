const form = document.querySelector("#form");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordsMatch = false;

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password1.value
    }

    // Do something with user data
    console.log(user);
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    messageContainer.style.borderColor = color;
}

function validatePasswords() {

    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.borderColor = "#008000";
        password2.style.borderColor = "#008000";
    } else {
        passwordsMatch = false;
        setMessage("Make sure passwords match.", "#ff0000");
        password1.style.borderColor = "#ff0000";
        password2.style.borderColor = "#ff0000";
        return;
    }
}

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        setMessage("Please fill out all fields.", "#ff0000");
        return;
    }
    // Check to see if passwords match
    validatePasswords();

    // If form is valid and paswords match
    if (isValid && passwordsMatch) {
        setMessage("Successfully Registered.", "#008000");
    }
}

const processFormData = (e) => {
    // Remove it when you want default behaviour of form
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
};

// Event Listener
form.addEventListener("submit", processFormData);
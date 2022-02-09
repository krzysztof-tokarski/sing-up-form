const passwordConfirmation = document.getElementById("confirmPassword")
const password = document.getElementById("password")
const form = document.getElementById("registration-form")
const errorDiv = document.getElementById("errorDiv")
const email = document.getElementById("email")

form.addEventListener('submit', validate);
password.addEventListener('click', removeStyle);
password.addEventListener('focus',removeStyle);
passwordConfirmation.addEventListener('input',removeStyle)

function validate (event) {
    if (password.value != passwordConfirmation.value) {
        event.preventDefault();
        password.classList.add("doNotMatch")
        passwordConfirmation.classList.add("doNotMatch")
        errorDiv.innerText = "*Passwords do not match"
    } else {
        password.classList.remove("doNotMatch")
        passwordConfirmation.classList.remove("doNotMatch")
    }
}

function removeStyle () {
    if (password.classList.contains("doNotMatch")) {
        password.classList.remove("doNotMatch")
        passwordConfirmation.classList.remove("doNotMatch")
        errorDiv.innerText = ''
    }
}


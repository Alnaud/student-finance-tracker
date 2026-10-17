import { ValidateUsername } from "./validators";

let form = document.getElementById("signup-form");
let userInput = document.getElementById("signup-form");
let userError = document.getElementById ("username-error");

userInput.addEventListener("input", function () {
    let message = validateUsername( userInput.value);
    userError.textContent = message;
});

form.addEventListener ("submit", function (event) {
    event.preventDefault();
    let message = validateUsername(userInput.value);
    userError.textContent = message;
});
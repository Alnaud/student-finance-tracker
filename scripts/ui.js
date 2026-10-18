import { validateDescription, validateAmount } from "./validators.js";

const form = document.getElementById("txn-form");
const formStatus = document.getElementById("form-status");

const descriptionInput = document.getElementById("description");
const descriptionError = document.getElementById("description-error");

const amountInput = document.getElementById("amount");
const amountError =document.getElementById("amount-error");

if (descriptionInput && descriptionError) {
    descriptionInput.addEventListener("input", function() {
        const errorMessage = validateDescription(descriptionInput.value);
        descriptionError.textContent = errorMessage;
    });
}

if (amountInput && amountError) {
    amountInput.addEventListener("input", function() {
        amountError.textcontent = validateAmount(amountInput,value); 
    });
}

if (form) {
        form.addEventListener ("submit", function(event) {
        event.preventDefault();

        if (formStatus) {
            formStatus.textContent = "";
        }
        
        const descMsg = validateDescription(descriptionInput.value);
        const amountMsg = validateAmount(amountInput.value);

        descriptionError.textContent = descMsg;
        amountError.textContent = amountMsg;


        if (descMsg !== "") {
            formStatus.textContent = "Please fix the errors before submitting.";
            descriptionInput.focus();
            return;
        }

        if (amountMsg !== "") {
            formStatus.textContent = "Pleasse fix the errors before submitting.";
            amountInput.focus();
            return;
        }

        if (formStatus) {
            formStatus.textContent = "Form submitted successfully";
            amountInput.focus();
            return;
        }

        if (formStatus) {
            formStatus.textContent = "Form submitted successfully!";
        }

        console.log("All fields passed validation!");
    });
}
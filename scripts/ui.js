import { validateDescription, validateAmount, validateCategory, validateDate } from "./validators.js";

const form = document.getElementById("txn-form");
const formStatus = document.getElementById("form-status");

const descriptionInput = document.getElementById("description");
const descriptionError = document.getElementById("description-error");

const amountInput = document.getElementById("amount");
const amountError =document.getElementById("amount-error");

const categoryInput = document.getElementById("category");
const categoryError = document.getElementById("category-error");

const dateInput = document.getElementById("date");
const dateError = document.getElementById("date-error");

if (descriptionInput && descriptionError) {
    descriptionInput.addEventListener("input", function() {
        const errorMessage = validateDescription(descriptionInput.value);
        descriptionError.textContent = errorMessage;
    });
}

if (amountInput && amountError) {
    amountInput.addEventListener("input", function() {
        amountError.textContent = validateAmount(amountInput.value);
    });
}

if (categoryInput && categoryError){
    categoryInput.addEventListener("input",function() {
        categoryError.textContent = validateCategory(categoryInput.value);
    });
}

if (dateInput && dateError) {
    dateInput.addEventListener('input',function() {
        dateError.textContent = validateDate(dateInput.value);
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
        const categoryMsg = validateCategory(categoryInput.value);
        const dateMsg = validateDate(dateInput.value)

        descriptionError.textContent = descMsg;
        amountError.textContent = amountMsg;
        categoryError.textContent = categoryMsg;
        dateError.textContent = dateMsg;


        if (descMsg !== "") {
            formStatus.textContent = "Please fix the errors before submitting.";
            descriptionInput.focus();
            return;
        }

        if (amountMsg !== "") {
            formStatus.textContent = "Please fix the errors before submitting.";
            amountInput.focus();
            return;
        }

        if (categoryMsg !== "") {
            formStatus.textContent = "Please fix errors before submitting.";
            categoryInput.focus();
            return;
        }

        if (dateMsg !== ""){
            formStatus.textContent = "Please fix the errors before submitting.";
            dateInput.focus();
            return;
        }

        if (formStatus) {
            formStatus.textContent = "Form submitted successfully!";
            
        }
        console.log("All fields passed validation!");
    });
}   
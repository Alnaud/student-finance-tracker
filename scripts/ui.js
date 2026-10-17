import { ValidateUsername } from "./validators";

const form = document.getElementById("txn-form");
const descriptionInput = document.getElementById("desctription");
const descriptionError = document.getElementById("description-error");

if (descriptionInput && descriptionError) {
    descriptionInput.addEventListener("input", function() {
        const errorMessage = validateDescription(descriptionInput.value);
        descriptionError.textcontent = errorMessage;
    });
}

if (form && descriptionInput && descriptionError) {
    form.addEventListener("submit",function(event) {
        event.preventDefault(); 

        const errorMessage = validateDescription(descriptionInput.value);
        descriptionError.textContent = errorMessage;

        if (errorMessage !== "") {
            console.log("form submission halted: Validate error found.");
            return;
        }

        console.log("Description passed validation!");
    });
}
export const AMOUNT_REGEX = /^(0|[1-9]\d*)(\.\d{1,2})?$/;

export function validateAmount(amount) {
    if (amount === undefined || amount === null || String(amount).trim() === "") {
        return "Amount is required.";
    }
    if (!AMOUNT_REGEX.test(amount)) {
        return "Amount must be a valid positive number with up to 2 decimal places (no leading zeros like 007).";
    }
    if (parseFloat(amount) < 0) {
        return "Amount cannot be negative";
    }
    return "";
}

export const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export function validateDate(dateStr) {
    if (!dateStr) {
        return "Date is required.";
    }
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) {
        return "Please enter a real calendar date.";
    }
    return "";
}


export const ADVANCED_REPEAT_REGEX = /\b(\w+)\s+\1\b/i;
export const DESC_WHITESPACE_REGEX = /^\S(?:.*\S)?$/;

export function validateDescription(desc) {
    if (!desc) {
        return "Description is required.";
    }
    if (!DESC_WHITESPACE_REGEX.test(desc)) {
        return "Description cannot start or end with spaces.";
    }
    if (ADVANCED_REPEAT_REGEX.test(desc)) {
        return "Description contains repeated consecutive words (advanced regex check).";
    }
    return "";
}


export const CATEGORY_REGEX = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;


export function validateCategory(category) {
    if (!category) {
        return "Category is required.";
    }
    if (!CATEGORY_REGEX.test(category)) {
        return "Category must contain only letters, spaces, or hyphens.";
    }
    return "";
}
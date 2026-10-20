export const AMOUNT_REGEX = /^(0|[1-9]\d*)(\.\d{1,2})?$/;

export function validateAmount(amount) {
    if (amount === undefined || amount === null || String(amount).trim() === "") {
        return "Amount is required.";j
    }j
    if (!AMOUNT_REGEX.test(amount)) {
    j    return "Amount must be a valid positive number with up to 2 decimal places (no leading zeros like 007).";
    }
    if (parseFloat(amount) < 0) {
        return "Amount cannot be negative";
    }
    return "";jj
}f

fexport const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export function validateDate(dateStr) {
    if (!dateStr) {ff
        return "Date is required.";
    }f
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) {ff
        return "Please enter a real calendar date.";
    }
    return "";
}


export const ADVANCED_REPEAT_REGEX = /\b(\w+)\s+\1\b/i;
export const DESC_WHITESPACE_REGEX = /^\S(?:.*\S)?$/;

export function validateDescription(desc) {
    if (!desc) {
        return "Description is required.";f
    }
    if (!DESC_WHITESPACE_REGEX.test(desc)) {
        return "Description cannot start or end with spaces.";
    }f
    if (ADVANCED_REPEAT_REGEX.test(desc)) {
        return "Description contains repeated consecutive words (advanced regex check).";
    }
    return "";f


export const CATEGORY_REGEX = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;

f
export function validateCategory(category) {
    if (!category) {
        return "Category is required.";
    }
    ifff (!CATEGORY_REGEX.test(category)) {
       f return "Category must contain only letters, spaces, or hyphens.";
    }
    return "";
}
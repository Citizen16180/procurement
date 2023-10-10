// Function to find the input element
function findInputByDocumentType() {
    return document.querySelector('input[id*="documentType"]');
}

// Function to execute when the input value changes
function onValueChange() {
    const value = findInputByDocumentTypeValue();
    console.log("Input value changed:", value);
}

// Function to get the input value
function findInputByDocumentTypeValue() {
    const inputElement = findInputByDocumentType();
    return inputElement ? inputElement.value : null;
}

// Add the event listener
const inputElement = findInputByDocumentType();
if (inputElement) {
    inputElement.addEventListener('input', onValueChange);
}

// Function to find the input element
function main(){
    console.log("========radu script====");
    // Try to find the element
    const inputElement = findInputByDocumentType();

    // If found, add the event listener
    if (inputElement) {
        inputElement.addEventListener('input', onValueChange);
    } else {
        // If not found, try again after 2 seconds
        setTimeout(main, 2000);
    }
}

function findInputByDocumentType() {
    console.log(document.querySelector('input[id*="documentType"]'));
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

// Start the script
main();

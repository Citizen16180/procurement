// Function to find the input element
function main(){
    console.log("========radu script====");
    // Try to find the element
    const inputElement = findInputByDocumentType();

    // If found, add the event listener
    if (inputElement) {
		console.log("FOUND ADDING EVENT LISTENER");
	inputElement.addEventListener('click', onValueChange);

		console.log(inputElement);
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
	console.log("onValueChange - run");
    const value = findInputByDocumentTypeValue();
    console.log("Input value changed:", value);
}

// Function to get the input value
function findInputByDocumentTypeValue() {
	console.log("findInputByDocumentTypeValue() - run")
    const inputElement = findInputByDocumentType();
	
    return inputElement ? inputElement.value : null;
}

// Start the script
main();

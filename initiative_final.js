// Function to find the input element

let valueOfDocType = "";
function main(){
    console.log("========radu script====");
    // Try to find the element
    const inputElement = findInputByDocumentType();

    // If found, add the event listener
    if (inputElement) {
		console.log("FOUND ADDING EVENT LISTENER");
		console.log(findInputByDocumentTypeValue());
		valueOfDocType = findInputByDocumentTypeValue();
		findContractByDocumentType();
		findPOByDocumentType();
        setTimeout(main, 2000);

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

// Function to get the input value
function findInputByDocumentTypeValue() {
	console.log("findInputByDocumentTypeValue() - run")
    const inputElement = findInputByDocumentType();
	
    return inputElement ? inputElement.value : null;
}


function findContractByDocumentType() {
    console.log(document.querySelector('tr[id*="contractNumber"]'));
    let contract_num =  document.querySelector('tr[id*="contractNumber"]');
	if(valueOfDocType == "Contract"){
	contract_num.style.display="block";
}else{
	contract_num.style.display="none";
}
}


function findPOByDocumentType() {
    console.log(document.querySelector('tr[id*="poNumber"]'));
    let po_num =  document.querySelector('tr[id*="poNumber"]');
	if(valueOfDocType == "PO"){
	po_num.style.display="block";
}else{
	po_num.style.display="none";
}
}


// Start the script
main();

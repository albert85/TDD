

const squareOfInterger = (integerInput) => {
    let concateElement = "";

    // check if input is an integer
    if(!Number.isInteger(integerInput)){
        return 'Not an integer';
    }

// convert the integer into array of strings
let arrayOfString = integerInput + "" ;

// Loop through each element inside the array
for (let i=0; i<arrayOfString.length; i++){

// convert each element into an integer
let elementConv = Number(arrayOfString[i]);

// square each element
let elementConvSquare = elementConv * elementConv;

// Convert them to a string and concatenate each squared element

concateElement += (elementConvSquare + "");
}

// Convert the result back to integer
return Number(concateElement);
}

// console.log(squareOfInterger(1234));
export default squareOfInterger;
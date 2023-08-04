var lastEdited = "celsius";  // initialize the lastEdited flag to any of the three input fields.

//button listeners
document.getElementById("submit").onclick = convertTemp;
document.getElementById("reset").onclick = reset;

//picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
document.getElementById("celsius").onchange = function () {
  lastEdited = "celsius";
};
document.getElementById("fahrenheit").onchange = function () {
  lastEdited = "fahrenheit";
};
document.getElementById("kelvin").onchange = function () {
  lastEdited = "kelvin";
};

function convertTemp(temp) {

  //initialize local variables
  var celsius = document.getElementById("celsius").value;
  celsius = parseFloat(celsius);

  var fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseFloat(fahrenheit);

  var kelvin = document.getElementById("kelvin").value;
  kelvin = parseFloat(kelvin);

  //temp values
  var conversionC;
  var conversionF;
  var conversionK;

  //if the celsius field changes, convert the fahrenheit and kelvin values
  if (lastEdited === "celsius") {
    conversionF = celsius * 9 / 5 + 32;
    conversionK = celsius + 273;
    //round the converted fahrenheit and kelvin values
    document.getElementById("fahrenheit").value = Math.round(conversionF);
    document.getElementById("kelvin").value = Math.round(conversionK);
  }
  //if the fahrenheit field changes, convert the celsius and kelvin values
  else if (lastEdited === "fahrenheit") {
    conversionC = (fahrenheit - 32) * 5 / 9;
    conversionK = conversionC + 273;
    //round the converted celsius and kelvin values
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("kelvin").value = Math.round(conversionK);
  }
  //if the kelvin field changes, convert the celsius and fahrenheit values
  else if (lastEdited === "kelvin") {
    conversionC = kelvin - 273;
    conversionF = conversionC * 9 / 5 + 32;
    //round the converted celsius and fahrenheit values
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("fahrenheit").value = Math.round(conversionF);
  }

  //get the current conversion temp values and store them in the input fields
  document.getElementById("celsius").innerHTML = conversionC;
  document.getElementById("fahrenheit").innerHTML = conversionF;
  document.getElementById("kelvin").innerHTML = conversionK;
}

//reset function for the reset button to reset all current values
function reset() {
  document.getElementById("celsius").value = 0;
  document.getElementById("fahrenheit").value = 0;
  document.getElementById("kelvin").value = 0;
}

// Length

let factors1 = new Array(1, 0.001, 0.000621, 3.28084, 1.09361);
let factors2 = new Array(1000, 1, 0.621, 3280.84, 1093.61);
let factors3 = new Array(1609.34, 1.60934, 1, 5280, 1760);
let factors4 = new Array(0.3048, 0.0003048, 0.000189394, 1, 0.333333);
let factors5 = new Array(0.9144, 0.0009144, 0.000568182, 3, 1);
let factors = new Array(factors1, factors2, factors3, factors4, factors5);

function convertUnit() {
  // Grab the correct conversion factor from our arrays
  fromIndex = document.lengthCon.fromUnit.selectedIndex;
  toIndex = document.lengthCon.toUnit.selectedIndex;
  factor = factors[fromIndex][toIndex];
  // Create the text that we want to write on the middle line
  fromUnitText = document.lengthCon.fromUnit.options[fromIndex].text;
  toUnitText = document.lengthCon.toUnit.options[toIndex].text;
  document.getElementById("formula").innerHTML = fromUnitText + " = " + factor + " " + toUnitText;
  // Check the input box to make sure we have a valid number
  if (isNaN(document.lengthCon.fromValue.value))
    document.getElementById("toValue").innerHTML = "Not a valid number.";
  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue").innerHTML = factor * document.lengthCon.fromValue.value;
  }
}


// let factors1 = new Array(1, 0.001, 0.000621, 3.28084, 1.09361);
// let factors2 = new Array(1000, 1, 0.621, 3280.84, 1093.61);
// let factors3 = new Array(1609.34, 1.60934, 1, 5280, 1760);
// let factors4 = new Array(0.3048, 0.0003048, 0.000189394, 1, 0.333333);
// let factors5 = new Array(0.9144, 0.0009144, 0.000568182, 3, 1);
// let factors = new Array(factors1, factors2, factors3, factors4, factors5);

// function convertUnit() {
//   // Grab the correct conversion factor from our arrays
//   fromIndex = document.lengthCon.fromUnit.selectedIndex;
//   toIndex = document.lengthCon.toUnit.selectedIndex;
//   factor = factors[fromIndex][toIndex];
//   // Create the text that we want to write on the middle line
//   fromUnitText =document.lengthCon.fromUnit.options[document.lengthCon.fromUnit.selectedIndex].text;
//   toUnitText = document.lengthCon.toUnit.options[document.lengthCon.toUnit.selectedIndex].text;
//   // console.log("Line 94:", toUnitText);
//   document.getElementById("formula").innerHTML = fromUnitText + " = " + factor + " " + toUnitText;
//   // Check the input box to make sure we have a valid number
//   if (isNaN(document.lengthCon.fromValue.value))
//     document.getElementById("toValue").innerHTML = "Not a valid number.";
//   // Output the converted number...last number on last line
//   else {
//     document.getElementById("toValue").innerHTML = factor * document.lengthCon.fromValue.value;
//   }
// }

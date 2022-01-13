// Assignment code here
// var confirmLength;
// var confirmNumerics;
// var confirmUppercase;
// var confirmLowercase;
// var confirmSpecialCharacter;

// variable values:
// numeric characters
var numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numerics)

// lowerCase characters
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(alpha)

// upperCase characters
var upperCase = alpha.map(alpha => alpha.toUpperCase());
console.log(upperCase);

// special characters 
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
console.log(specialChar)

// generatePassword function
function generatePassword() {
  console.log("you clicked the button");
  // Step 1 prompt the user for the password criteria
  length();
  if (length) {

  }

  // Step 2 validate input, ensure at least one character type is choosen. 

  // Step 3 Generate password based on inputs 

  // Step 4 display password to page.

  // return variable
  return randomPassword;
}

// pick password length btwn 8-128 characters
var length = function() {
  var confirmLength = window.prompt("How long would you like your password? Please choose a number between 8 and 128");
  confirmLength = parseInt(confirmLength);
  console.log(confirmLength);
  
  if (!confirmLength) {
    alert("Please enter a number value.");
    return length(); 
  } else if (confirmLength < 8 || confirmLength > 128) {
    alert ("Password length MUST be between 8 and 128 characters.")
    return length();
  }
};

// confirm to include or not, lowercase, uppercase, numeric, and/or special characters 
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

var copyDiv = document.createElement("div");
var copyBtn = document.createElement("button");
copyBtn.className = "btn";
copyBtn.id = "copy";
copyBtn.textContent = "COPY";

document.getElementById("buttons").appendChild(copyDiv)
copyDiv.appendChild(copyBtn)

function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  alert ("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copy);
 
var ele = document.value


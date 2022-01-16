// Assignment code here

// confirm variables:
var confirmLength=""
var confirmNumerics;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var pwdCharacters

// variable values:
// numeric characters
var numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// lowerCase characters
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// upperCase characters
var upperCase = alpha.map(alpha => alpha.toUpperCase());

// special characters 
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// generatePassword function
function generatePassword() {
  console.log("you clicked the button");
  // Step 1 prompt the user for the password criteria
  // pick length
  var confirmLength = window.prompt("How long would you like your password? Please choose a number between 8 and 128");
  confirmLength = parseInt(confirmLength);

  if (!confirmLength) {
    alert("Please enter a number value.");
    generatePassword();
  } else if (confirmLength < 8 || confirmLength > 128) {
    alert ("Password length MUST be between 8 and 128 characters.");
    generatePassword();
  } else {
    // confirm to include or not, lowercase, uppercase, numeric, and/or special characters 
    confirmLowercase = window.confirm("Would you like to include lowercase letter? For yes, Click ok. For no, click cancel.");
    confirmUppercase = window.confirm("Would you like to include Uppercase letter? For yes, Click ok. For no, click cancel.");
    confirmNumerics = window.confirm("Would you like to include numbers? For yes, Click ok. For no, click cancel.");
    confirmSpecialCharacter = window.confirm("Would you like to include special characters? For yes, Click ok. For no, click cancel.");
  };
 
  // Step 2 validate input, ensure at least one character type is choosen. 
  if (!confirmLowercase && !confirmUppercase && !confirmNumerics && !confirmSpecialCharacter) {
    characters = alert("MUST pick at least ONE character option.");
    generatePassword ();
  } 

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// copy button element 
var copyDiv = document.createElement("div");
var copyBtn = document.createElement("button");
copyBtn.className = "btn";
copyBtn.id = "copy";
copyBtn.textContent = "COPY";
// appendChild to display on page
document.getElementById("buttons").appendChild(copyDiv)
copyDiv.appendChild(copyBtn)

// copy to clipboard function
function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listerner to copy button
copyBtn.addEventListener("click", copy);
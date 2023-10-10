// Assignment Code
var generateBtn = document.querySelector("#generate");

//Different letters, numbers, and symbols to be indcluded in the passwords
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialSymbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";


//Create password length
function generatePassword(){
  var passwordLength;
  do {
    passwordLength = parseInt(prompt("How long would you like your password to be? Select between 8 and 128 characters."));
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);


var useLowercase = confirm("Include lowercase characters?");
var useUppercase = confirm("Include uppercase characters?");
var useNumber = confirm("Include numbers?");
var useSpecial = confirm("Include special symbols?");


var allChars = "";
if (useLowercase) allChars += lowercaseChars;
if (useUppercase) allChars += uppercaseChars;
if (useNumber) allChars += numbers;
if (useSpecial) allChars += specialSymbols;

var password = "";
for (var i = 0; i < passwordLength; i++){
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars[randomIndex];
}

return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

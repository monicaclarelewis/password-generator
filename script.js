// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


//Pprompt user for password options
function generatePassword() {
//Password length
  var confirmLength = (prompt("How many characters would you like your password to be? \nPlease choose a number between 8 - 64.", console.log(confirmLength)))
    if (confirmLength < 8) {
      alert("The password must be between 8-64 characters.")
      return;
    }
    if (confirmLength > 64) {
      alert("The password must be between 8-64 characters.")
      return;
    }

alert(`Your password will have ${confirmLength} characters`);
  
//What would the user like to include?
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      //If no parameters are chosen
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

//Password parameters
var passwordCharacters = []
      
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(numericCharacters)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
}

  console.log(passwordCharacters)

//Choosing random elements from each chosen parameter array 
  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

//Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//Generate button
generateBtn.addEventListener('click', writePassword);


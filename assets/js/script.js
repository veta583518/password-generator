// Assignment code here
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numeric = ['0123456789'];
var specialCharacter = [' !#$%&"()*+,-./:;<=>?@[\]^_`{|}~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Set properties to passwordText 
  var passwordText = {
    value: [],
    input: [],
  }
  
  var password= generatePassword();

  function generatePassword() {
    // Ask user how many characters they would like in password
    var inputLength = window.prompt("How many characters would you like your password to be? (between 8 - 128 characters).");
    inputLength = parseInt(inputLength) ;
    console.log(inputLength);

    // If response is outside of given parameters inform user of invalid selection and to try again
    if (inputLength < 8 || inputLength > 128) {
      window.alert ("You have made an invalid selection. Please try again!");
      return
    }
    if (isNaN(inputLength)=== true) {
      window.alert ("Your selection was not a number. Please try again!");
      return
    }
    // if (inputLength => 8 && inputLength <= 128)  {
    //   window.alert (`Your password will be ${inputLength} characters long.`);
    // }

    // Confirm prompts

    // Do you want lower-case letters included?
    var lowerConfirm = window.confirm("Select OK if you would like to have lower-case letters in your password");
    // If confirmed add to array
    if (lowerConfirm) {
      passwordText.array += lowerCase;
      console.log(passwordText.input);
    }

    // Do you want upper-case letters included?
    var upperConfirm = window.confirm("Select OK if you would like to have upper-case letters in your password?");
    // If confirmed add to array
    if(upperConfirm) {
      passwordText.input += upperCase;
      console.log(passwordText.input);
    }

    // Do you want numbers included?
    var numericConfirm = window.confirm("Select OK if you would like to have numbers in your password?");
    // If confirmed add number to the array
    if(numericConfirm) {
      passwordText.input += numeric;
      console.log(passwordText.input);
    }

    // Do you want special characters included?
    var specialConfirm = window.confirm("Select OK if you would like to use special characters in your password?");
    // If confirmed add special characters to the array
    if(specialConfirm) {
      passwordText.input += specialCharacter;
      console.log(passwordText.input);
    }

    // Validate to make sure that at least one character selection was made
    if ((lowerConfirm, upperConfirm, numericConfirm, specialConfirm) === false) {
      window.alert("You must make at least one selection for character values.");
      return
    }

    for (var i=0; i < inputLength; i++) {
    var main = passwordText.input[(Math.floor(Math.random() * passwordText.input.length))];
    passwordText.value += main
    }
  
  return passwordText.value;  
  } 

var passwordText = document.querySelector("#password");
return passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

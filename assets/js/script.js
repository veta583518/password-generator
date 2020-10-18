// Assignment code here
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numeric = ['0123456789'];
var specialCharacter = [' !#$%&"()*+,-./:;<=>?@[\]^_`{|}~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Set array and value to blank to begin
  var passwordText = {
    value: [],
    array: [],
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
    // if (passwordLength => 8 && passwordLength <= 128)  {
    //   window.alert (`Your password will be ${passwordLength} characters long.`);
    // }

    // Confirm prompts

    // Do you want lower-case letters included?
    var lowerConfirm = window.confirm("Select ok if you would like to have lower-case letters in your password");
    // If confirmed add to array
    if (lowerConfirm) {
      passwordText.array += lowerCase;
      console.log(passwordText.array);
    }

    // Do you want upper-case letters included?
    var upperConfirm = window.confirm("Select ok if you would like to have upper-case letters in your password?");
    // If confirmed add to array
    if(upperConfirm) {
      passwordText.array += upperCase;
      console.log(passwordText.array);
    }

    // Do you want numbers included?
    var numericConfirm = window.confirm("Select ok if you would like to have numbers in your password?");
    // If confirmed add number to the array
    if(numericConfirm) {
      passwordText.array += numeric;
      console.log(passwordText.array);
    }

    // Do you want special characters included?
    var specialConfirm = window.confirm("Select ok if you would like to use special characters in your password?");
    // If confirmed add special characters to the array
    if(specialConfirm) {
      passwordText.array += specialCharacter;
      console.log(passwordText.array);
    }

    for (var i=0; i < inputLength; i++) {
    var main = passwordText.array[(Math.floor(Math.random() * passwordText.array.length))];
    passwordText.value += main
    }
  
  return passwordText.value;  
  } 

var passwordText = document.querySelector("#password");
return passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

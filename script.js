// 03_password_generator
// Assignment Code

// Steps of making a password generator
// first we will need a prompt after clicking the generate password button stating How many characters would you like to use from 8 to 128?
// next we will need a confirm stating all uppercase true or false, lowercase true or false, numbers true or false, and symbols/special chars true or false!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // set password length here
  var pass = '';
  pass = prompt("How many characters would you like to use? Please enter a number between 8 and 128!"); {
    if ((pass >= 8) && (pass <= 128)) {
      alert("Your password will be " + pass + " characters long");
    } else { ((pass < 8) && (pass > 128))
      alert("Invalid value please try again!"); 
    }
  }


  var upperOutput = confirm("Would you like to use Uppercase letters?");
  var lowerOutput = confirm("Would you like to use Lowercase letters?");
  var numberOutput = confirm("Would you like to use numbers?");
  var symbolOutput = confirm("Would you like to use Special Characters?");

  while (!(upperOutput || lowerOutput || numberOutput || symbolOutput)) {
    alert("You must select at least one character type")

    upperOutput = confirm("Would you like to use Uppercase letters?");
    lowerOutput = confirm("Would you like to use Lowercase letters?");
    numberOutput = confirm("Would you like to use numbers?");
    symbolOutput = confirm("Would you like to use Special Characters?");
  }
}


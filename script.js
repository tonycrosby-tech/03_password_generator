// 03_password_generator
// Assignment Code

// Steps of making a password generator
// first we will need a prompt after clicking the generate password button stating How many characters would you like to use from 8 to 128?
// next we will need a confirm stating all uppercase true or false, lowercase true or false, numbers true or false, and symbols/special chars true or false!
// then we will need to output the user selections to the console log and then print the password in the box!
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// defining variables
var confirmPass = "";
var upperOutput;
var lowerOutput;
var numberOutput;
var symbolOutput;

//defining the arrays of the variables
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//generate password
function generatePassword() {
  // set password length and prompt for how many characters?
  confirmPass = (prompt("How many characters would you like to use? Please enter a number between 8 and 128!")); {
    // stringfromcharcode makes it so no letter or invalid char can be used as a character!
    while (confirmPass < String.fromCharCode(0,47) || confirmPass > String.fromCharCode(58,127)
     || confirmPass < 8 || confirmPass > 128) {
      // alert to try again if invalid value is entered
      alert("Password must be 8 to 128 characters! Please try again");
      confirmPass = (prompt("How many characters would you like to use? Please enter a number between 8 and 128!"));
  }
  // your password will be () long in console log
  console.log("Your password will be " + confirmPass + " characters long");

  // confirm statements for uppercase etc.
  upperOutput = confirm("Click ok to use Uppercase letters");
  lowerOutput = confirm("Click ok to use Lowercase letters");
  numberOutput = confirm("Click ok to use numbers");
  symbolOutput = confirm("Click ok to use Special Characters");
  // while loop asking the user to select a parameter
  while (!(upperOutput || lowerOutput || numberOutput || symbolOutput)) {
    alert("You must select at least one character type");
    // if none is selected loop will repeat
    upperOutput = confirm("Click ok to use Uppercase letters");
    lowerOutput = confirm("Click ok to use Lowercase letters");
    numberOutput = confirm("Click ok to use numbers");
    symbolOutput = confirm("Click ok to use Special Characters");
  }
}
    // empty array
    var allChars = [];
    // if statement saying to the computer to add special characters if it's selected
    if (symbolOutput) {
      allChars = allChars.concat(symbols)
    }
    // if statement saying to the computer to add numbers if it's selected
    if (numberOutput) {
      allChars = allChars.concat(numbers)
    }
    // if statement saying to the computer to add lowercase letters if it's selected  
    if (lowerOutput) {
      allChars = allChars.concat(lowercase)
    }
    // if statement saying to the computer to add uppercase letters if it's selected
    if (upperOutput) {
      allChars = allChars.concat(uppercase)
    }
    // console will log allChars 
    console.log(allChars);
    //empty variable
    var randomPass = "";
    // for loop for the password to be randomized 
    for (var i = 0; i < confirmPass; i++) {
      randomPass = randomPass + allChars[Math.floor(Math.random() * allChars.length)];
      console.log(randomPass);
    }
    return randomPass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
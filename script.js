// 03_password_generator
// Assignment Code

const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Character sets
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz".split('');
const NUMBERS = "0123456789".split('');
const SYMBOLS = "!%&,*+-./<>?~".split('');

// Generate password
function generatePassword() {
  const passLength = parseInt(document.querySelector("#length").value); // Get password length from input

  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  const charTypes = {
    useUppercase: document.querySelector("#uppercase").checked,
    useLowercase: document.querySelector("#lowercase").checked,
    useNumbers: document.querySelector("#numbers").checked,
    useSymbols: document.querySelector("#symbols").checked
  };

  if (!charTypes.useUppercase && !charTypes.useLowercase && !charTypes.useNumbers && !charTypes.useSymbols) {
    alert("Please select at least one character type.");
    return "";
  }

  const allChars = getAllChars(charTypes);
  const randomPass = generateRandomPassword(passLength, allChars);

  return randomPass;
}

// Get all characters based on user selection
function getAllChars({ useUppercase, useLowercase, useNumbers, useSymbols }) {
  let allChars = [];
  if (useUppercase) allChars = allChars.concat(UPPERCASE);
  if (useLowercase) allChars = allChars.concat(LOWERCASE);
  if (useNumbers) allChars = allChars.concat(NUMBERS);
  if (useSymbols) allChars = allChars.concat(SYMBOLS);

  console.log(allChars);
  return allChars;
}

// Generate random password
function generateRandomPassword(length, allChars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[crypto.getRandomValues(new Uint32Array(1))[0] % allChars.length];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");

  const password = generatePassword();

  if (!password) {
    passwordText.value = "";
  } else {
    passwordText.value = password;
  }
}

// Add event listener to refresh button
document.querySelector("#refresh").addEventListener("click", refreshPassword);

// Refresh password and copy to clipboard
function refreshPassword() {
  const passwordText = document.querySelector("#password");
  console.log(passwordText)
  if (!passwordText.value) {
    alert("No password to copy. Please generate a password first.");
    return;
  }
}

// Copy password to clipboard
function copyPassword() {
  const passwordText = document.querySelector("#password");
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); // For mobile devices

  try {
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } catch (err) {
    alert("Failed to copy password.");
  }
}

// Add event listener to copy button
document.querySelector("#copy").addEventListener("click", copyPassword);

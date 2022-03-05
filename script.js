// Assignment Code
var generateBtn = document.querySelector("#generate");
let length;
let upperCase;
let lowerCase;
let numericChar;
let specialChar;

const charList = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!\"#$%&()'*+,-./:;<=>?@[\\]^_`{|}~",
];
// Write password to the #password input
function writePassword() {
  length = window.prompt(
    "How long do you want your password to be? (Between 8 and 128 characters"
  );

  if (length === "" || length < 8 || length > 128) {
    window.alert("Choose a number between 8 and 128!");
    writePassword();
  }
  characterChoice();
  window.alert("Generating your password!");
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordString = "";
  let max;
  let randomObjects;

  if (upperCase && lowerCase && numericChar && specialChar) {
    max = 3;
    randomObjects = Math.floor(Math.random() * (max + 1));
  } else if (upperCase && lowerCase && numericChar && !specialChar) {
    max = 2;
    randomObjects = Math.floor(Math.random() * (max + 1));
  } else if (upperCase && lowerCase && !numericChar && !specialChar) {
    max = 1;
    randomObjects = Math.floor(Math.random() * (max + 1));
  } else if (upperCase && !lowerCase && !numericChar && !specialChar) {
    max = 0;
    randomObjects = Math.floor(Math.random() * (max + 1));
  } else if (upperCase && !lowerCase && numericChar && !specialChar) {
    max = 2;
    do {
      randomObjects = Math.floor(Math.random() * (max + 1));
    } while (randomObjects !== 0 || randomObjects !== 2);
  } else if (!upperCase && lowerCase && numericChar && specialChar) {
    max = 2;
    do {
      randomObjects = Math.floor(Math.random() * (max + 1));
    } while (randomObjects !== 1 || randomObjects !== 2 || randomObjects !== 3);
  } else if (!upperCase && !lowerCase && numericChar && specialChar) {
    max = 3;
    do {
      randomObjects = Math.floor(Math.random() * (max + 1));
    } while (randomObjects !== 2 || randomObjects !== 3);
  } else if (!upperCase && lowerCase && !numericChar && !specialChar) {
    max = 1;
    do {
      randomObjects = Math.floor(Math.random() * (max + 1));
    } while (randomObjects !== 1);
  }
  for (let i = 0; i < length; i++) {
    const stringLength = charList[randomObjects].length;
    const randomStringChar = Math.floor(Math.random() * stringLength);
    passwordString = passwordString + charList[randomObjects][randomStringChar];
  }
  return passwordString;
}

function characterChoice() {
  upperCase = window.confirm("Would you like to use uppercase characters?");
  lowerCase = window.confirm("Would you like to use lowercase characters?");
  numericChar = window.confirm("Would you like to use numeric characters?");
  specialChar = window.confirm("Would you like to use special characters?");
  if (!upperCase && !lowerCase && !numericChar && !specialChar) {
    window.alert("You have to chose at least one type of character!");
    characterChoice();
  }
}

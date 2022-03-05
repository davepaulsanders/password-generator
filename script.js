// Assignment Code
var generateBtn = document.querySelector("#generate");
let length;
let upperCase;
let lowerCase;
let numericChar;
let specialChar;
const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
const numberList = "0123456789";
const specialList = "!\"#$%&()'*+,-./:;<=>?@[\\]^_`{|}~";

let charList = [];
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
  for (let i = 0; i < length; i++) {
    let randomObjects = Math.floor(Math.random() * (charList.length - 1 + 1));
    const stringLength = charList[randomObjects].length;
    const randomStringChar = Math.floor(Math.random() * stringLength);
    passwordString = passwordString + charList[randomObjects][randomStringChar];
  }
  return passwordString;
}

function characterChoice() {
  charList = [];
  upperCase = window.confirm("Would you like to use uppercase characters?");
  if (upperCase) {
    charList.push(upperCaseList);
  }
  lowerCase = window.confirm("Would you like to use lowercase characters?");
  {
    if (lowerCase) {
      charList.push(lowerCaseList);
    }
  }
  numericChar = window.confirm("Would you like to use numeric characters?");
  if (numericChar) {
    charList.push(numberList);
  }
  specialChar = window.confirm("Would you like to use special characters?");
  if (specialChar) {
    charList.push(specialList);
  }
  if (!upperCase && !lowerCase && !numericChar && !specialChar) {
    window.alert("You have to chose at least one type of character!");
    characterChoice();
  }
}

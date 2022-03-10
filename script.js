// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables for prompts
let length;
let upperCase;
let lowerCase;
let numericChar;
let specialChar;
// Character lists for different prompt choices

const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
const numberList = "0123456789";
const specialList = "!\"#$%&()'*+,-./:;<=>?@[\\]^_`{|}~";
// Empty array to push character lists that have been chosen

let passwordCharList = [];
// Write password to the #password input
function writePassword() {
  length = window.prompt(
    "How long do you want your password to be? (Between 8 and 128 characters"
  );

  // Recalling function if answer is not valid
  if (length === "" || length < 8 || length > 128) {
    window.alert("Choose a number between 8 and 128!");

    writePassword();
  }
  characterChoice();
  window.alert("Generating your password!");

  var password = generatePassword();

  // Making password visible on page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function characterChoice() {
  // Emptying passwordCharList if password has previously been generated without reloading page
  passwordCharList = [];

  //Pushing character lists to passwordCharList array if they were selected

  upperCase = window.confirm("Would you like to use uppercase characters?");
  if (upperCase) {
    passwordCharList.push(upperCaseList);
  }
  lowerCase = window.confirm("Would you like to use lowercase characters?");
  {
    if (lowerCase) {
      passwordCharList.push(lowerCaseList);
    }
  }
  numericChar = window.confirm("Would you like to use numeric characters?");
  if (numericChar) {
    passwordCharList.push(numberList);
  }
  specialChar = window.confirm("Would you like to use special characters?");
  if (specialChar) {
    passwordCharList.push(specialList);
  }

  // If nothing is selected, recall the function
  if (!upperCase && !lowerCase && !numericChar && !specialChar) {
    window.alert("You have to chose at least one type of character!");
    characterChoice();
  }
}

function generatePassword() {
  // Initializing empty string for password

  document.querySelector("#password").value = "";
  let passwordString = "";

  for (let i = 0; i < length; i++) {
    // Choosing a random index from the passwordCharList array
    let randomObjects = Math.floor(
      Math.random() * (passwordCharList.length - 1 + 1)
    );
    // Finding the length of the string at the chosen index
    const stringLength = passwordCharList[randomObjects].length;
    // Choosing a random character from that string
    const randomStringChar = Math.floor(Math.random() * stringLength);
    //Adding that string to the end of the temporary passwordString
    passwordString =
      passwordString + passwordCharList[randomObjects][randomStringChar];
  }
  return passwordString;
}

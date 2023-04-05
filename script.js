
// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  const pwLength = prompt("Enter password length (must be between 8 and 128 characters):");
  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

   // ask if they want special symbols
  const includeSpecialSymbols = confirm("Include special symbols in password?");

  // ask if they want lowercase
  const includeLowercase = confirm("Include lowercase letters in password?");

   // ask if they want uppercase
  const includeUppercase = confirm("Include uppercase letters in password?");

    // ask if they want number
  const includeNumbers = confirm("Include numbers in password?");

  // generate pw based on criteria selected

  let charSet = "";
  if (includeSpecialSymbols) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    charSet += "0123456789";
  }

  if (charSet === "") {
    alert("You must select at least one character set.");
    return "";
  }

  let password = "";
  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


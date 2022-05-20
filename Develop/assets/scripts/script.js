// Character strings referenced in password generation
let lowercaseList = "abcdefghijklmnopqrstuvwxyz"; 
let uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let numberList = "1234567890";
let specialList = "!@#$%^&*()-_+={}[]<>|:;?/.,";


//Function to generate password
function generatePassword() {

  //Empty string assigned for createdPassword so that characters can be inserted based on selectors chosen through confirm boxes
  let createdPassword = "";

  //passwordLength is assigned to 0 by default so that lack of input during prompt box can be referenced and assigning value to it through input of prompt box
  let passwordLength = 0;
  //While loop to check if password is outside of bounds of 8-128 characters
  while (passwordLength <8 || passwordLength >128){
    passwordLength = prompt("How long do you want your password to be? (Between 8-128 characters)");
    if (passwordLength >= 8 && passwordLength <= 128)
      break;
    alert("Your password must be between 8-128 characters");
  }
    
  //Setting all character check values to false as their default to avoid lack of input in prompt boxes for while loop
  let uppercaseCheck = false;
  let lowercaseCheck = false;
  let numberCheck = false;
  let specialCheck = false;

  //While loop to make sure that user is confirming at least one value for character checks, if at least one character check is true then it will add the character type's string to the available string to reference for password generation in createdPassword
  while (uppercaseCheck == false && lowercaseCheck == false && numberCheck == false && specialCheck == false){
    
    uppercaseCheck = confirm("Do you want your password to contain uppercase letters?");
    if (uppercaseCheck) {
      createdPassword += uppercaseList;
    };
  
  
    lowercaseCheck = confirm("Do you want your password to contain lowercase letters?");
    if (lowercaseCheck) {
      createdPassword += lowercaseList;
    };
  
    numberCheck = confirm("Do you want your password to contain numbers?");
    if (numberCheck) {
      createdPassword += numberList;
    };
  
    specialCheck = confirm("Do you want your password to special characters?");
    if (specialCheck) {
      createdPassword += specialList;
    };
    //If statement to check if at least one character check value is true so that it can break out of while loop and continue with generating a password
    if (uppercaseCheck == true || lowercaseCheck == true || numberCheck == true || specialCheck == true)
    break;
    alert("You must confirm at least one character type for your password");
  }

  //For every character less than the desired password length, add another character from the available createdPassword string
  let passwordFinal = "";
  for (let i = 0; i < parseInt(passwordLength); i++) {
    passwordFinal += createdPassword[Math.floor(Math.random() * createdPassword.length)]
  }

  //Returns the generated password
  return passwordFinal;
  
  
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

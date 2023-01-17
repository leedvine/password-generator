// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Created a var to hold password length characters

let passwordLength =[];

// Created other variables to see if boolean of True and False on questioning


let requireLowerCasedCharacters =[];
let requireUpperCasedCharacters =[];
let requireNumericCharacters =[];
let requireSpecialCharacters =[];

// Variable to store valid characters to choose from after user has decided what characters they would like

let validPasswordCharacters = [];




// Function to prompt user for password options and store data
  function getPasswordOptions() {

    // Clears out valid password array should the generator run more than
    //once. Without this if re-run it kept previously approved criteria
    // as well as newly selected criteria - potentially providing wrong 
    // password eg...first time lowercase selected, 2nd time not selected 
    // but still given
    validPasswordCharacters = []

    // Prompt for passord length
    passwordLength = (prompt("Please state how many charcters you'd like your password to be. Must be between 10 and 64"));
  
    // While Loop created to alert and then repeat question if answer is outside the length paramater 
    while(passwordLength < 10 || passwordLength > 64) {
        alert("Please specify a length between 10 and 64 charcters");
        passwordLength = (prompt("Please state how many charcters you'd like your password to be. Must be between 10 and 64"));
        } 
  
        // Repeat back to the user how many characters the user will have  
        alert("Thank you. You selected " + passwordLength + " characters"); 

        // Using simple comirm() with OK being True and Cancel being false to assertain
        // other aspects of the password criteria. Any set to true will be used in password 
        // creation further down code. False and they won't.

        let requireLowerCasedCharacters = (confirm("Would you like to include lowercase characters?"));
        let requireUpperCasedCharacters = (confirm("Would you like to include uppercase characters?"));
        let requireNumericCharacters = (confirm("Would you like to include numbers?"));
        let requireSpecialCharacters = (confirm("Would you like to include special characters?"));

        // While loop introduced to insure one option is confirmed. If not questions repeat until one selectection at least - is made
       

        while(requireLowerCasedCharacters === false && requireUpperCasedCharacters === false && requireNumericCharacters === false && requireSpecialCharacters === false) {
          alert("You need to select at least one type of charaters to generate password");
          
        requireLowerCasedCharacters = (confirm("Would you like to include lowercase characters?"));
        requireUpperCasedCharacters = (confirm("Would you like to include uppercase characters?"));
        requireNumericCharacters = (confirm("Would you like to include numbers?"));
        requireSpecialCharacters = (confirm("Would you like to include special characters?"));

          } 
    

        // "IF" statements used to see if characters to be used based on True booleans.
        // If true .concat used to merge valid arrays in to one so we have only valid characters

        if (requireLowerCasedCharacters === true) {
          validPasswordCharacters = validPasswordCharacters.concat(lowerCasedCharacters)
        }
    
        if (requireUpperCasedCharacters === true) {
          validPasswordCharacters = validPasswordCharacters.concat(upperCasedCharacters)
        }
          
        if (requireNumericCharacters === true) {
          validPasswordCharacters = validPasswordCharacters.concat(numericCharacters)
        }
    
        if (requireSpecialCharacters === true) {
          validPasswordCharacters = validPasswordCharacters.concat(specialCharacters)
        }

// Task inferred that you should choose a random amount of characters from multiple arrays
// then combine. Seemed wrong or more complicated! I chose to concat all valid arrays in to one 
// as above and then just random pick from one valid array to the length of characters 
// originally chosen by user using Math

let finalPassword = [];



for (var i = 0; i < passwordLength; i++) {
  finalPassword = finalPassword + validPasswordCharacters[Math.floor(Math.random() * validPasswordCharacters.length)];
}
return finalPassword;
}


 // Add the password to the input field for the user to see

function showPassword() {
  let finalPassword = getPasswordOptions();
  let displayPassword = document.querySelector("#password");

  displayPassword.value = finalPassword;
}


// Add event listener to generate button

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener('click', showPassword);

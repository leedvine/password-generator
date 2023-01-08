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



// Using alerts and possibly document.write() to inform user of choice and errors
// I chose the while loop to check paramaters met. If not then I used an alert to inform the user 
// and request a valid answer. I also used an alert to confirm the choosen option.

let passwordLength =[];

// Created other variables to see if boolean of True and False
// True to be included by clicking OK and if Cancel clicked 
// to be excluded from password

let requireLowerCasedCharacters =[];
let requireUpperCasedCharacters =[];
let requireNumericCharacters =[];
let requireSpecialCharacters =[];

// Variable to store valid characters to choose from after user has decided what they want

let validPasswordCharacters = [];


// Function to prompt user for password options
  function getPasswordOptions() {
    passwordLength = (prompt("Please state how many charcters you'd like your password to be. Must be between 8 and 62"));
  
    // Loop if answer is outside the parameters 
    while(passwordLength < 8 || passwordLength > 64) {
        alert("Please specify a length between 8 and 64 charcters");
        passwordLength = (prompt("Please state how many charcters you'd like your password to be. Must be between 8 and 64"));
        } 
  
        // Repeat back how many charactes the user will have  
        alert("Thank you. You selected " + passwordLength + " characters"); 

        // Using simple comirm() with OK being True and Cancel being false to assertain
        // other aspects of the password criteria. Any set to true will be used in password 
        // creation further down code. False and they won't.

        let requireLowerCasedCharacters = (confirm("Would you like to include lowercase characters?"));
        let requireUpperCasedCharacters = (confirm("Would you like to include uppercase characters?"));
        let requireNumericCharacters = (confirm("Would you like to include numbers?"));
        let requireSpecialCharacters = (confirm("Would you like to include special characters?"));

        // While loop introduced to insure one option is confirmed
        // This is so password has characters to generate from

        while(requireLowerCasedCharacters === false && requireUpperCasedCharacters === false && requireNumericCharacters === false && requireSpecialCharacters === false) {
          alert("You need to select at least one type of charaters to generate password");
          
        requireLowerCasedCharacters = (confirm("Would you like to include lowercase characters?"));
        requireUpperCasedCharacters = (confirm("Would you like to include uppercase characters?"));
        requireNumericCharacters = (confirm("Would you like to include numbers?"));
        requireSpecialCharacters = (confirm("Would you like to include special characters?"));

          } 
    

        // If statements to see if characters to be used and concat to validPasswordCharacters storing all
        // valid characters available for selection

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
  
}



//The below most likely acheived by math object. Not sure of security using this in regards to
// password generation but it should achieve task. Should target specific arrays to pull random charachters

// Function for getting a random element from an array
function getRandom(arr) {

}

// The below should combine all random selections from multiple arrays in 
// to one and create as a string

// Function to generate password with user input
function generatePassword() {

}

//not sure of the below statement at this point

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


//Presnt the user with the password (see string created 2 steps above)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//This is the event (click) that will ultimately present the user with the password

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
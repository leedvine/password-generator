// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

let passwordLength = " ";

// Function to prompt user for password options
  function getPasswordOptions() {
    passwordLength = (prompt("Please state how many charcters you'd like your password to be. Must be between 8 and 62"));
  
    // Loop if answer is outside the parameters 
    while(passwordLength < 8 || passwordLength > 62) {
        alert("Please specify a length between 8 and 62 charcters");
        passwordLength = (prompt("How many characters would you like your password to contain?"));
        } 
  
        // Repeat back how many charactes the user will have  
        alert(`You selected passwordLength} characters`); 
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
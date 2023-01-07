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

// After hours of mindless Googling the below must be best achieved via Javascript prompt() method

// Using alerts and possibly document.write() to inform user of choice and errors

// Function to prompt user for password options
function getPasswordOptions() {

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
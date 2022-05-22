// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbCase= "0123456789";
var symbolCase =  "~!#@$%^&*?+-=<>";
var passGen = "";


function generatePassword () {
var passLength = prompt("Between 8-128 characters how many charcters would you like to have?");

if (passLength < 8 || passLength > 128|| isNaN(parseInt(passLength)))  {
  alert("password must be no less than 8,and no more than 128");
  defaultPrevented();
  return passLength;
};
var lowerPrompt = confirm('Would you like your password to have lower case letter?');
var upperPrompt = confirm('Would you like to have upper case letters?');
var numberPrompt = confirm('Would you like to include numbers?');
var symbolPrompt = confirm('Would you like to include symbols?');
// Criteria choices 
if (lowerPrompt && upperPrompt && numberPrompt && symbolPrompt){
 passGen = lowerCase + upperCase + numbCase+ symbolCase 

} else if (lowerPrompt && upperPrompt && numberPrompt){
  passGen = lowerCase + upperCase + numbCase
}
else if (upperPrompt && numberPrompt && symbolPrompt){
  passGen = upperCase + numbCase + symbolCase
}
else if (lowerPrompt && numberPrompt && symbolPrompt){
  passGen = lowerCase + numbCase + symbolCase 
}
else if (lowerPrompt && upperPrompt) {
passGen = lowerCase + upperCase 
}
else if(lowerPrompt && numberPrompt){
  passGen = lowerCase + numbCase
}
else if (upperPrompt && symbolPrompt ) {
  passGen = upperCase + symbolCase
}
else if (upperPrompt && numberPrompt) {
  passGen = upperCase + numbCase
}
else if (numberPrompt && symbolPrompt) {
  passGen = numbCase + symbolCase
}
else if (lowerPrompt ) {
  passGen = lowerCase
}
else if (numberPrompt) {
  passGen = numbCase
}
else if (upperPrompt) {
  passGen = upperCase
}
else if (symbolPrompt) {
  passGen = symbolCase
};


// if none are selected alerts to choose one
if (!lowerPrompt && !upperPrompt && !numberPrompt && !symbolPrompt)
  alert('You must choose at least one criteria option');
// loop that creates the password

var pass = "";
for (let i=0; i<passLength; i++){
  pass += passGen.charAt(Math.floor(Math.random() * passGen.length)) 
 } return pass
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



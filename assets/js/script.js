// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

// User input variables:
var lowerCaseLetters="abcdefghijkmlnopqrstuvwxyz"
var upperCaseLetters="ABCDEFGHIJKMLNOPQRSTUVWXYZ"
var numbers="0123456789"
var specialCharacters="~!@#$%^&*()_+`_=:;'<>?/"
var lowerArr = lowerCaseLetters.split("");
var upperArr = upperCaseLetters.split("");
var numbersArr = numbers.split("");
var specialArr = specialCharacters.split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var length;
// Start function to generate password
function generatePassword (){
  // step 1 ask the user the length
      length = prompt("What is the length of your password? Choose between 8 and 128");
      console.log(length)
      // Verify the password length entered meets the length requirements
      if (length >= 8 && length <= 128) {
        
      }
  // step 2 length needs to be between 8 and 128
      // If password length provided is less than the min or more than the max
      // will return an error and require the user to start again.
      // Password length criteria must be met before user can select desired password character content.
      else {
        alert('Your password must be at least 8, but no more than 128, characters. Please enter a valid number between 8 & 128.')
        return '';
      } 

  // step 3 ask the user if want to include lowercase, uppercase, numeric , and/or special characters
    var isLowerCase=confirm("Do you want this password to have lowercase letters?")
      console.log(isLowerCase)

    var isUpperCase=confirm("Do you want this password to have uppercase letters?")
      console.log(isUpperCase)

    var isNumeric=confirm("Do you want this password to have numbers?")
      console.log(isNumeric)

    var isSpecial=confirm("Do you want this password to have special characters?")
      console.log(isSpecial)


  // Conditions for password variables
    var password=""

    for (var i = 0; i <length; i++) {

    //LOWERCASE
      if(isLowerCase===true && password.length < length){
        // math.floor to round number down
        var index =Math.floor(Math.random() * lowerArr.length)
        password=password+lowerArr[index]
      }

      //UPPERCASE
      if(isUpperCase===true && password.length < length){
        var index =Math.floor(Math.random() * upperArr.length)
        password=password+upperArr[index]
      }
  
      //NUMBERS
      if(isNumeric===true && password.length < length){
        var index =Math.floor(Math.random() * numbersArr.length)
        password=password+numbersArr[index]
      }

      //SPECIAL CHARACTERS
      if(isSpecial===true && password.length < length){
        var index =Math.floor(Math.random() * specialArr.length)
        password=password+specialArr[index]
      }
  }

    return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
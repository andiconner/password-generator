// Assignment code here
var lowerCaseLetters="abcdefghijkmlnopqrstuvwxyz"
var upperCaseLetters="ABCDEFGHIJKMLNOPQRSTUVWXYZ"
var numbers="0123456789"
var specialCharacters="~!@#$%^&*()_+`_=:;'<>?/"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 function generatePassword (){
  // step 1 ask the user the length
      var length = prompt("What is the length of your password? (min 8; max 128)");
      console.log(length)
// step 2 length needs to be between 8 and 128


  // step 3 ask the user if want to include lowercase, uppercase, numeric , and/or special characters
      var isLowerCase=confirm("Do you want this password to have lowercase letters?")
      console.log(isLowerCase)

      var isUpperCase=confirm("Do you want this password to have uppercase letters?")
      console.log(isUpperCase)

      var isNumeric=confirm("Do you want this password to have numbers?")
      console.log(isNumeric)

      var isSpecial=confirm("Do you want this password to have special characters?")
      console.log(isSpecial)


    var password=""
    //LOWERCASE
      if(isLowerCase===true){
        // math.floor to round number down
          var index =Math.floor(Math.random() * lowerCaseLetters.length)
          password=password+lowerCaseLetters[index]
      }else{
        password="";
      }
      //UPPERCASE
      if(isUpperCase===true){
          var index =Math.floor(Math.random() * upperCaseLetters.length)
          password=password+upperCaseLetters[index]
          
      }else{
        password="";
      }

      //NUMBERS
      if(isNumeric===true){
        var index =Math.floor(Math.random() * numbers.length)
        password=password+numbers[index]
      }else{
        password="";
      }
    //SPECIAL CHARACTERS
    if(isSpecial===true){
        var index =Math.floor(Math.random() * specialCharacters.length)
        password=password+specialCharacters[index]
    }else{
      password="";
    }
      





      
    return password




 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

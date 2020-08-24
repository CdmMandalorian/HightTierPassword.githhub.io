document.querySelector("#generate").addEventListener("click", writePassword);

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var sCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
var lowerCasedCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h,", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var upperCasedCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  
var password = [];
 
var passwordCharacters = [];
  
var passwordConfiguration = {
    length: true,
    hasSpecial: true,
    hasNumbers: true,
    hasLower: true,
    hasUpper: true,
};
  
function generatePassword() {
    var confirmLength = (prompt("How many characters long, would you like your HighTier password to be?"));
    while(confirmLength <= 7 || confirmLength >= 125) {
        alert("Password length must be between 8-124 characters Try again");
        var confirmLength = (prompt("How many characters long, would you like your HighTier password to be?"));
        }  
            alert(`Your password will have ${confirmLength} characters`);{
                
            }
        
            var confirmNumericCharacter = confirm("You Wants Numbers, to develop your HighTier Password");
            var confirmSpecialCharacter = confirm("What about, Special Characters?");
            var confirmLowerCase = confirm("Now Decide, if you want High Caps!");
            var confirmUpperCase = confirm("Also, Dont forget if you want to add lower case characters.");
        
            while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
                alert("You must choose at least one parameter");
                var confirmNumericCharacter = confirm("You Wants Numbers, to develop your HighTier Password");
                var confirmSpecialCharacter = confirm("What about, Special Characters?");
                var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
                var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   

         }        

        if (passwordConfiguration.hasNumbers) {
            passwordCharacters.push(numberCharacters);
            password.push(
                numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
            );
        }
        if (passwordConfiguration.hasSpecial) {
            passwordCharacters.push(sCharacters);
            password.push(
                sCharacters[Math.floor(Math.random() * sCharacters.length)]
            );
        }
        if (passwordConfiguration.hasLower) {
            passwordCharacters.push(lowerCasedCharacters);
            password.push(
                lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]
            );
        }
        if (passwordConfiguration.hasUpper) {
            passwordCharacters.push(upperCasedCharacters);
            password.push(
                upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]
            );
        }

        console.log(passwordCharacters)
        
        for (var i = password.length; i < passwordConfiguration.length; i++) {
            var randomPasswordCharType =
            passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            password.push(
                randomPasswordCharType[Math.floor(Math.random() * randomPasswordCharType.length)]
            );
        }
        return randomPasswordCharType;
        
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}   
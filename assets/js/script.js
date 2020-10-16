document.querySelector("#generate").addEventListener("click", writePassword);

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var sCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
var lowerCasedCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h,", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var upperCasedCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  
function generatePassword() {
    var confirmLength = (prompt("How many characters long, would you like your HighTier password to be?"));
    while(confirmLength <= 7 || confirmLength >= 125) {
        alert("Password length must be between 8-124 characters Try again");
        var confirmLength = (prompt("How many characters long, would you like your HighTier password to be?"));
    }  
    alert(`Your password will have ${confirmLength} characters`);

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
 
    var randomPasswordCharType =""
    var passwordCharacters = [];

    if (confirmNumericCharacter) {
        passwordCharacters.push(numberCharacters);
    }
    if (confirmSpecialCharacter) {
        passwordCharacters.push(sCharacters);
    }
    if (confirmLowerCase) {
        passwordCharacters.push(lowerCasedCharacters);
    }
    if (confirmUpperCase) {
        passwordCharacters.push(upperCasedCharacters);
    }

    console.log(passwordCharacters)
    var password = "";
    for (var counter = 1; counter <= confirmLength; counter++) {
        password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        password.push(
            randomPasswordCharType[Math.floor(Math.random() * randomPasswordCharType.length)]
        );
    }
    console.log(randomPasswordCharType)
    return password;
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}   

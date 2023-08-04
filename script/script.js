// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var randomPassword = document.getElementById("password");
var passLength = document.getElementById("length");
var upperCase = document.getElementById("upcasebtn");
var lowerCase = document.getElementById("lowcasebtn");
var numbers = document.getElementById("numberbtn")
var symbols = document.getElementById("symbolbtn");

document.querySelector("#parameters").style.display = "none";


function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}
function randomSymbol() {
    var symbolTypes = "!#$%&()*+-<=>?@[]_{}"
    return symbolTypes[Math.floor(Math.random() * symbolTypes.length)];
}



function generatePassword() {
    var totalLength = passLength.value
    var includeUpper = upperCase.checked
    var includeLower = lowerCase.checked
    var includeNumber = numbers.checked
    var includeSymbols = symbols.checked
    var password = ""

    var characterSources = [];

    if (includeUpper === true) {
        characterSources.push(randomUpperCase);
    }
    if (includeLower === true) {
        characterSources.push(randomLowerCase);
    }
    if (includeNumber === true) {
        characterSources.push(randomNumber);
    }
    if (includeSymbols === true) {
        characterSources.push(randomSymbol);
    }

    for (var i = 0; i < totalLength; i++) {
        var characterSourceId = Math.floor(Math.random() * characterSources.length);

        console.log({ characterSourceId, characterSources })

        password = password.concat(
            characterSources[characterSourceId]()
        );

        // switch (Math.floor(Math.random() * 4)) {
        //     case 0:
        //         password = password.concat(randomUpperCase());
        //         break;
        //     case 1:
        //         password = password.concat(randomLowerCase());

        //         break;
        //     case 2:
        //         password = password.concat(randomNumber());

        //         break;
        //     case 3:
        //         password = password.concat(randomSymbol());

        //         break;
        // }
    }

    return password
}



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    if (document.querySelector("#parameters").style.display = "none"
    ) {
        document.querySelector("#parameters").style.display = "block";
    }

    passwordText.value = password;
}

function chooseLength() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


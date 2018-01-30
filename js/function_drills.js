// Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
    return console.log("Hi" + name + " ");
}
//     Write a function named capitalize(string) that takes a string of any capitalization and
// uppercases the first character and lowercases the rest of the characters of a string.
function capitalize(string) {
    //console.log("This is your string with proper casing: " + string[0].toUpperCase() + string.substring(1, string.length).toLowerCase());
    return string[0].toUpperCase() + string.substring(1, string.length).toLowerCase();
}
//     Write a function named upperCase(string)
function upperCase(string) {
    return console.log(string.toUpperCase());
}
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    console.log(input);
    return input;
}
//     Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 == 1;
}
// Make a function named isEven(number)
function isEven(number) {
    return number % 2 == 0;
}
// Make a function named isPositive(number)
function isPositive(number) {
    return number >= 0;
}
// Make a function named isNegative(number)
function isNegative(number) {
    return number < 0;
}
// Make a function named isBoolean(input)
function isBoolean(input) {
    return typeof input == "boolean";
}
// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return boolean == true;
}
// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return boolean == false;
}
// Make a function named isTruthy(input)
function isTruthy(input) {
    return Boolean(input) == true;
}
// Make a function named isFalsy(input)
function isFalsy(input) {
    return Boolean(input) == false;
}
// Make a function named isVowel(letter)
function isVowel(letter) {
    letter = letter.toLowerCase();
    return (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u');
}
// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
function hasVowels(string) {
    string = string.toLowerCase();
    return string.search(/[aeiou]/g) !== -1;
    //string = string.toLowerCase();

    // var i = 0;
    // while (i < string.length) {
    //     if (isVowel(string[i]) == true) {return true;}
    //     i++;
    // }
    // return false;
}
// Make a function named isConsonant(letter)
function isConsonant(letter) {
    letter = letter.toLowerCase();
    return !(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u');
}
// Make a function named hasConsonants(string)
function hasConsonants(string) {
    // var i = 0;
    // do {
    //     if (isConsonant(string[i]) == true) {return true;}
    //     i++;
    // } while (i < string.length)
    // return false;
    string = string.toLowerCase();
    return string.search(/[^aeiou]/g) !== -1;
}
// Make a function named isCapital(letter)
function isCapital(letter) {
    return letter.toUpperCase() == letter;
}
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
function hasCapitalLetters(string) {
    // for(var i = 0; i < string.length; i++) {
    //     if (isCapital(string[i]) == true) {return console.log(string + " has capital letters.");}
    // }
    // return console.log(string + " does not have any capital letters.");
    return string.search(/[A-Z]/g) !== -1;
}
//     Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    return letter.toLowerCase() == letter;
}
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
function hasLowerCase(string) {
    // var i = 0;
    // while(i < string.length) {
    //     if(isLowerCase(string[i]) == true) {return console.log(string + " has lower case letters.");}
    //     i++;
    // }
    // return console.log(string + " does not have any lower case letters.");
    return string.search(/[a-z]/g) !== -1;
}
// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    return letter == " ";
}
// Make a function named hasSpaces(string) that returns if a string has any space characters
function hasSpaces(string) {
    // var i = 0;
    // do {
    //     if (isSpace(string[i]) == true) {return console.log("'" + string + "' has spaces.")}
    //     i++;
    // } while (i < string.length)
    // return console.log("'"+ string + "' does not have spaces.");
    return string.search(/\s/g) >=0;
}
// Make a function named isZero(number)
function isZero(number) {
    return number == 0;
}
// Make a function named increment(number) that returns a number plus one
function increment(number) {
    return number + 1;
}
// Make a function named decrement(number) that returns a number minus one
function decrement(number) {
    return number - 1;
}
// Make a function named isFive(input)
function isFive(input) {
    return input == 5;
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5;
}
//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return input % 5 == 0;
}
// Make a function named isThree(input)
function isThree(input) {
    return input == 3;
}
// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return input % 3 == 0;
}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    return isMultipleOfThree(input) && isMultipleOfFive(input) == true;
}
// Write a function named lowerCase(string)
function lowerCase(string) {
    return string.toLowerCase();
}
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
function capitalizeEachWord(string) {
    return string.split(" ").map(capitalize).join(" ");

}
//     Write a function named add(a, b) that returns the sum of a and b
function add(a, b) {
    return a + b;
}
// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
    return a - b;
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return a * b;
}
// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a / b;
}
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
    return a % b;
}
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input) {
    // var trueCounter = 0;
    // for (var i = 0; i < input.length; i++) {
    //     if (input[i] == "\n" || input[i] == "\t" || input[i] == " ") {trueCounter++;}
    // }
    // return trueCounter == input.length;
    return input.trim() == "";
}
//     Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
function isNumeric(input) {
    return typeof Number(input) == "number" && input != " " && isNaN(input) == false;
}
// Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string) {
    return string.trim();
}
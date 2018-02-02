(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsBreak = planetsArray.join("<br>");
    var planetsList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsBreak);
    console.log(planetsList);
    document.write(planetsList);
})();

// ================================= ARRAY MANIPULATION
//     BONUS 1:
//     Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits
//     (account for 7, 10, 11 digit numbers):
//     Using multiple functions will be helpful.
//         input = 5552324343, output = 555-232-4343
//     input = 5553434, output = 555-3434
//     input = 18005552323, output = 1-800-555-2323
//
//     DONE Extra Challenge: account for invalid characters
//     DONE Extra Challenge: if the input is already formatted, output the unformatted version
//     DONE Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    function parsePhoneNumber (numberString) {
        var numberArray = numberString.split("");
        numberArray = convertLettersToNumbers(numberArray);
        if ((numberArray.length == 10 || numberArray.length == 7) && checkingCharacters(numberArray)) {
            console.log(parsing7and10Digits(numberArray));
        } else if (numberArray.length == 11 && checkingCharacters(numberArray)) {
            console.log(numberArray.shift() + "-" + parsing7and10Digits(numberArray));
        } else if (checkingIfFormatted(numberArray) && checkingCharacters(numberArray)) {
            console.log(numberArray.join(""));
        } else {
            console.log("Please enter a valid 7, 10, or 11 digit phone number.");
        }
    }
    function parsing7and10Digits(numberArray) {
        for(var i = 3; i < numberArray.length-2; i+=4) {
            numberArray.splice(i, 0, "-");
        }
        return numberArray.join("");
    }
    function checkingCharacters(numberArray) {
        var counter = 0;
        if (numberArray.length == 7 || numberArray.length == 10 || numberArray.length == 11) {
            numberArray.forEach(function (el) {
                /[\d]/i.test(el) ? counter++ : false
            });
        }
        else if (numberArray.length == 8 || numberArray.length == 12 || numberArray.length == 14) {
            numberArray.forEach(function (el) {
                /[\d-]/i.test(el)? counter++ : false
            });
        }
        return counter == numberArray.length;
    }
    function checkingIfFormatted(numberArray) {
        if (numberArray.length == 8 && numberArray[3] == "-") {
            numberArray.splice(3, 1);
        } else if (numberArray.length == 12 && numberArray[3] == "-" && numberArray[7] == "-") {
            numberArray.splice(3,1);
            numberArray.splice(6,1);
        } else if (numberArray.length == 14 && numberArray[1] == "-" && numberArray[5] == "-" && numberArray[9] == "-") {
            numberArray.splice(1,1);
            numberArray.splice(4,1);
            numberArray.splice(7,1);
        } else {
            return false;
        }
        return numberArray;
    }
    function convertLettersToNumbers(numberArray) {
        numberArray = numberArray.map(function(el) {
            if (/[abc]/i.test(el)) {return el = "2";}
            else if (/[def]/i.test(el)) {return el = "3";}
            else if (/[ghi]/i.test(el)) {return el = "4";}
            else if (/[jkl]/i.test(el)) {return el = "5";}
            else if (/[mno]/i.test(el)) {return el = "6";}
            else if (/[pqrs]/i.test(el)) {return el = "7";}
            else if (/[tuv]/i.test(el)) {return el = "8";}
            else if (/[wxyz]/i.test(el)) {return el = "9";}
            else {return el;}
        })
        return numberArray;
    }
//     BONUS 2:
//     Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the
//     user to choose from a menu with the following actions:
//      1) Add a student name
//     2) Delete a student name
//     3) View all student names in alphabetical order
//     4) View all student names in reverse alphabetical order
//     Store the student names in an array. Account for invalid user input.
//
var studentRoster = ["Marcy", "Bettina", "Laura", "Allie", "Emma"];
function studentRosterFunction() {
    var answer = prompt("Please choose from the following options: \n 1. Add a student name \n2. Delete a student name \n3. View all student names in alphabetical order \n4. View all student names in reverse alphabetical order");
    while(answer != null) {
        switch (answer) {
            case "1":
                var newName = prompt("Please enter the name of the student you would like to add: ");
                studentRoster.push(newName);
                break;
            case "2":
                var deleteName = prompt("Please enter the name of the student you would like to delete: ");
                studentRoster.indexOf(deleteName) == -1 ? alert("No such student.") : studentRoster.splice(studentRoster.indexOf(deleteName), 1);
                break;
            case "3":
                alert(studentRoster.sort());
                break;
            case "4":
                alert(studentRoster.sort().reverse());
                break;
            case null:
                break;
            default:
                alert("Please enter a valid option from 1 to 4.");
        }
        answer = prompt("Please choose from the following options: \n 1. Add a student name \n2. Delete a student name \n3. View all student names in alphabetical order \n4. View all student names in reverse alphabetical order");
    }
}


function skipNumber() {
    var number;
    while (number = prompt("Please enter an odd number from 1-50")) {
        //If user presses cancel
        if (number == null) {
            break;
        } //When user inputs valid odd number, nested loop displays odd number list and skips user inputted number
        else if (number >=1 && number <=50 && number%2==1){
            for(var i = 1; i <= 50 && number; i+=2) {
                if (i == number) {
                    console.log("Yikes! Skipping this number: " + i);
                    continue;
                }
                console.log("Here is an odd number: " + i);
            } break;
        } //If user does not input a valid number, alerts them that they have not and will loop to be prompted again
        else {
            alert("Please enter a valid odd number!");
        }
    }
}

// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"
function toggleCase(string) {
    var newString = "";
    for(var i = 0; i < string.length; i++) {
        if(string[i] == string[i].toLowerCase()){
            newString += string[i].toUpperCase();
        } else if (string[i] == string[i].toUpperCase()) {
            newString += string[i].toLowerCase();
        }
    }
    return newString;

}
//

// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is
// equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length,
// output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"
function checkStringLength(string) {
    var number = "";
    for(var i = 0; i < string.length; i++) {
        if (isNaN(string[i]) == false) {
            number = string.substring(i, string.length);
            break;
        }
    }
    return number == string.length ? "Yes" : "No";
}
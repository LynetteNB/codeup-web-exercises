function skipNumber() {
    var number = prompt("Please enter an odd number from 1-50");
    while (isNaN(number) || number > 50 || number < 1 || number%2 == 0) {
        if (number == null) {
            break;
        }
        if (number >=1 && number <=50){
            break;
        }
        alert("Please enter a valid odd number!");
        number = prompt("Please enter an odd number from 1-50");
    }
    for(var i = 1; i <= 50 && number; i++) {
        if (i == number) {
            console.log("Yikes! Skipping this number: " + i);
            continue;
        }
        if (i%2==1) {
            console.log("Here is an odd number: " + i)
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
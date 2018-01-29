"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 ------------------------------------------------------------------*/
// var yesNumber = confirm("Would you like to enter a number?");
//  if (yesNumber == true) {
//      var num = prompt("Please enter a number below:");
//      num = Number(num);
//      var plus100 = num + 100;
//      if (isNaN(num) === false) {
//          num%2==0 ? alert("This number is even.") : alert("This number is odd.");
//          alert(num + " + 100 is " + plus100);
//          num>=0 ? alert("This number is positive.") : alert("This number is negative.");
//      }
//      else {
//          alert("That is not a number.")
//      }
//  }
// ------------Refactored using functions.-----------------------
// var yesNumber = confirm("Would you like to enter a number?");
// if (yesNumber == true) {
//     var num = prompt("Please enter a number below:");
//     isNumber(num);
// }
//
// function isNumber(num) {
//     num = Number(num);
//     var plus100 = num + 100;
//     if (isNaN(num) === false) {
//         num%2==0 ? alert("This number is even.") : alert("This number is odd.");
//         alert(num + " + 100 is " + plus100);
//         num>=0 ? alert("This number is positive.") : alert("This number is negative.");
//     }
//     else {
//         alert("That is not a number.")
//     }
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 ---------------------------------------------------------------------*/
function analyzeColor(color) {
    color = color.toLowerCase();
    if (color == 'red') {
        console.log("Apples are red and yummy!")
    }
    else if (color == 'orange') {
        console.log("Oranges are orange and citrus-y.")
    }
    else if (color == 'yellow') {
        console.log("Bananas are yellow on the outside!")
    }
    else if (color == 'green') {
        console.log("Limes are green and sour!")
    }
    else if (color == 'blue') {
        console.log("Blueberries are blue and delicious with yogurt!")
    }
    else if (color == 'indigo') {
        console.log("Indigo is a pretty, deep shade of purple.")
    }
    else if (color == 'violet') {
        console.log("Violets are very pretty flowers!")
    }
    else {
        console.log(color + " is not a valid color choice.")
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

//analyzeColor(randomColor);
//console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
    color = color.toLowerCase();
    switch (color) {
        case ('red'):
            return "Apples are red and yummy!";
            break;
        case ('orange'):
            return "Oranges are orange and citrus-y.";
            break;
        case ('yellow'):
            return "Bananas are yellow on the outside!";
            break;
        case ('green'):
            return "Limes are green and sour!";
            break;
        case ('blue'):
            return "Blueberries are blue and delicious with yogurt!";
            break;
        case ('indigo'):
            return "Indigo is a pretty, deep shade of purple.";
            break;
        case ('violet'):
            return "Violets are very pretty flowers!";
            break;
        default:
            return color + " is not a valid color choice.";
            break;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//var userColor = prompt("Please enter one of the following colors:\nred, orange, yellow, green, blue, indigo, violet");
//alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, totalAmt) {
    switch (luckyNum) {
        case 0:
            return totalAmt;
            break;
        case 1:
            return totalAmt * .9;
            break;
        case 2:
            return totalAmt * .75;
            break;
        case 3:
            return totalAmt * .65;
            break;
        case 4:
            return totalAmt * .5;
            break;
        case 5:
            return 0;
            break;
        default:
            return "That is not a valid lucky number!";
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var bill = prompt("What is your total bill?");
if (luckyNumber == 0) {
    alert("Your lucky number is " + luckyNumber + "! Which means you will have to pay the full price of $" + calculateTotal(luckyNumber, bill).toFixed(2) + ".");
} else if (luckyNumber == 6) {
    alert(calculateTotal(luckyNumber, bill));
} else if (luckyNumber == 5) {
    alert("Your lucky number is " + luckyNumber + "! Which means instead of $" + bill + ", you will pay $" + calculateTotal(luckyNumber, bill) + " and get it free!");
} else {
    alert("Your lucky number is " + luckyNumber + "! Which means instead of $" + bill + ", you will only pay $" + calculateTotal(luckyNumber, bill).toFixed(2) + "!");
}

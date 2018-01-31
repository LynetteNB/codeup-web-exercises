(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["lynette", "fito", "lyndsey", "alexis"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Manually logging each name using index: " + names[0]);
    console.log("Manually logging each name using index: " + names[1]);
    console.log("Manually logging each name using index: " + names[2]);
    console.log("Manually logging each name using index: " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++) {
        console.log("For Loop: " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(element) {console.log("forEach method: " + element);});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     */
     console.log(first([1, 2, 3, 4, 5]));// returns 1
     console.log(second([1, 2, 3, 4, 5]));// returns 2
     console.log(last([1, 2, 3, 4, 5])); // return 5
     console.log(first(names));// returns "Lynette"
     console.log(second(names));// returns "Fito"
     console.log(last(names)); // return "Alexis"

    function first(array) {
        return array[0];
    }
    function second(array) {
        return array[1];
    }
    function last(array) {
        return array[array.length-1];
    }
})();

// === Array Bonuses ===
var names = ["lynette", "fito", "lyndsey", "alexis"];
// 1. Write a function called average(numbers) that takes in an array of numbers
function average(numbers) {
    var average = 0;
    numbers.forEach(function(element) {
        average += element;
    })
    average /= 2;
    console.log("The average is " + average);
}
// 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.
function sumAll(numbers) {
    var sum = 0;
    numbers.forEach(function(element) {
        sum += element;
    })
    console.log("The average is " + sum);
}
// 3. Write a function called max(numbers) that takes in an array of numbers and returns the largest
function max(numbers) {
    var max = numbers[0];
    for(var i = 0; i < numbers.length-1; i++) {
        if(numbers[i] > numbers[i+1] && numbers[i] > max){
            max = numbers[i];
        } else if (numbers[i] < numbers[i+1] && numbers[i+1] > max) {
            max = numbers[i + 1];
        }
    }
    console.log(max + " is the largest number.")
}
// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest
function min(numbers) {
    var min = numbers[0];
    for(var i = 0; i < numbers.length-1; i++) {
        if(numbers[i] < numbers[i+1] && numbers[i] < min){
            min = numbers[i];
        } else if (numbers[i] > numbers[i+1] && numbers[i+1] < min) {
            min = numbers[i + 1];
        }
    }
    console.log(min + " is the smallest number.")
}
// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order
function reverseArray(array) {
    return array.reverse();
}
// 6. Write a function called randomElement(array) that takes in an array and returns a random element
function randomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
}
// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.
function upperCaseAll(array) {
    return array.map(function(el) {return el.toUpperCase();});
}
// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.
function getOdds(array) {
    return array.filter(function(el) {
        return el%2 === 1 || el%2 === -1;
    })
}
// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers
function getEvens(array) {
    return array.filter(function(el) {
        return el%2 === 0;
    })
}
// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers
function multiplyAll(array) {
    var multiply = 1;
    array.forEach(function(el) {
        multiply *= el;
    })
    console.log(multiply);
}
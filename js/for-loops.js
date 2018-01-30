function showMultiplicationTable(num) {
    for(var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num*i);
    }
}
function oddOrEven() {
    for(var i = 1; i <= 10; i++) {
        var randomNum = Math.floor(Math.random() * 180) + 20;
        randomNum%2 == 0 ? console.log(randomNum + " is even.") : console.log(randomNum + " is odd.");

    }
}
function halfPyramid() {
    for(var i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}
function decrementByFive() {
    for(var i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}
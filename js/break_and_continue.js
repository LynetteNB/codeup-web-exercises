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
function multiplyByTwo() {
    var x = 1;
    while (x < 65536) {
        console.log(x *= 2);
    }
}

function sellingCones() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    var conesBought;
    console.log(allCones);
    do{
        conesBought = Math.floor(Math.random() * 5) + 1;
        if (allCones >= conesBought) {
            console.log("Bought " + conesBought + " cone(s)!");
            allCones -= conesBought;
            console.log(allCones + " cone(s) left!");
        } else {
            console.log("Cannot sell you " + conesBought + " cone(s) I only have " + allCones + " left!");
        }
    } while (allCones > 0);
    console.log("Yay! I sold all the cones!");
}
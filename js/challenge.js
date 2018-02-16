function difference13(num) {
    return num-13 > 13 ? (num-13)*2 : Math.abs(num-13);
}
function displayCity(string) {
    if(string.indexOf("San") === 0){
        return string;
    } else if (string.indexOf("New") === 0) {
        return string;
    }
}
function steps(beg, end) {
    var array = [];
    for(var i = beg; i <= end; i++){
        array.push(i);
    }
    return array;
}
function escape(string) {
    var array = string.split(" ");
    var answer = [];
    array.forEach(function(word){
       if(word.match(/\W/)){
           answer.push(String(word).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'));
       } else {
           answer.push(word);
       }
    });
    return answer.join(" ");
}
function wordScore(string) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var cache = {};

    for(var i = 0; i < alphabet.length; i++){
        cache[alphabet[i]] = i+1;
    }
    var array = string.split(" ");
    var totals = [];
    array.forEach(function(string) {
        var total = 0;
        for(var i = 0; i<string.length; i++) {
            total += cache[string[i]];
        }
        totals.push(total);
    });
    var max = totals.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var index = totals.indexOf(max);
    return array[index];
}
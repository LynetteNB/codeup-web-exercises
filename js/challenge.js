function sort(word) {
    return word.split("").sort().join("");
}

function vowels(word) {
    var array = word.toLowerCase().split("");
    var count = 0;
    array.forEach((letter) => {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count++;
        }
    });
    return count;
}

function extract(string) {
    var array = string.toLowerCase().split("");
    var check = [];
    var unique = array.filter((letter) => {
        if(check.includes(letter)){
            return false;
        }
        check.push(letter);
        return true;
    })
    return unique.join("");
}

function convert(temp) {
    var celsius = 0;
    var kelvin = 0;
        celsius = (temp - 32)*(5/9);
        kelvin = (celsius + 273.15);
    return temp + "F is " + celsius.toFixed(5) + "C which is " + kelvin.toFixed(5) + "K";
}

function ftoc(temp) {
    var celsius = 0;
    celsius = (temp - 32)*(5/9);
    return temp + "F is " + celsius.toFixed(5) + "C";
}
function ctok(celsius) {
    var kelvin = 0;
    kelvin = (celsius + 273.15);
    return celsius + "C is " + kelvin.toFixed(5) + "K";
}

function changeCase(word, kind) {
    kind = kind.toLowerCase();
    var letter = "";
    if(kind === "camel") {
        if(word.includes("-")) {
            letter = word[(word.indexOf("-") + 1)];
            word = word.replace("-" + letter, letter.toUpperCase());
        } else if (word.includes("_")){
            letter = word[(word.indexOf("_") + 1)];
            word = word.replace("_" + letter, letter.toUpperCase());
        }
    } else if (kind === "snake") {
        if(word.includes("-")) {
            word = word.replace("-", "_");
        } else {
            for(var i = 0; i < word.length; i ++) {
                if(word[i] === word[i].toUpperCase()){
                    break;
                }
            }
            word = word.substring(0, i) + "_" + word[i].toLowerCase() + word.substring(i+1);
        }
    } else if (kind === "kebab") {
        if(word.includes("_")) {
            word = word.replace("_", "-");
        } else {
            for(var i = 0; i < word.length; i ++) {
                if(word[i] === word[i].toUpperCase()){
                    break;
                }
            }
            word = word.substring(0, i) + "-" + word[i].toLowerCase() + word.substring(i+1);
        }
    }
    return word;
}



































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



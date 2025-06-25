const sumAll = function(first, second) {
    if (first < 0){ return "ERROR" }
    if (second < 0){ return "ERROR" }
    if (!Number.isInteger(first)){ return "ERROR" }
    if (!Number.isInteger(second)){ return "ERROR" }
    
    let sum = 0;
    let lower, upper;

    if (first < second){
        lower = first, upper = second
    } else{
        lower = second, upper = first
    }

    for (let i = lower; i<=upper; i++){
        sum += i
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

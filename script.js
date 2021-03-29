// Problem 1

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i <arr.length; i++ ) {
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
// // --------------------------------------------------------------------------
// // Problem 2

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;

    for(var i=0; i <arr.length; i++ ) {
        if(arr[i] % 2 == 0){
            totalEvens += arr[i];
        }
        else{
            totalOdds += arr[i];
        }
    }

    if(totalOdds > totalEvens)
        return "odds are larger"
    else if(totalEvens==totalOdds)
        return "tied"
    else
        return "evens are larger"
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
// --------------------------------------------------------------------------
// Problem 3

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    var count = 0
    for(var i=0; i <arr.length; i++ ){
        if(arr[i] > (sum/arr.length)){
        count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
// --------------------------------------------------------------------------
// // Problem 4

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(i = fibArr.length; i < 10; i++) {
        fibArr[i] = fibArr[i-2] + fibArr[i-1];
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

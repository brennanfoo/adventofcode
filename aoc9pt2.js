var requireText = require('require-text');
const originalText = requireText('./inputs/aoc9.txt',require);
var input = originalText.split("\n");

var originalArr = [];

input.forEach(function (i){
    originalArr.push(parseInt(input[i]));
})

var valid = [];
var result = 0;
var index = 0;
var size = input.length;
var resultFound = false;

// Load first 25 into array
do {
    valid.push(parseInt(input.shift()));
    index++;
} while (index < 25)

for (var foo = 0; foo<size; foo++){
    var checkNum = false;
    result = parseInt(input.shift());
    for (var i = 0; i<25; i++){ // cycle through each int in valid[]
        for (var j = 0; j<25; j++){ // see if it sums up to the result
            if (!(i===j) && (valid[i]+valid[j]===result)){
                if (!checkNum){
                    checkNum = true;
                    valid.push(result);
                    valid.shift();
                }
            }
        }
    }
    if (!checkNum) {
        console.log("Number not eligible: " + result);
        break;
    }
}

let contig = [];
let low = 67897679576611;
let high;
let sum;
let contigFound = false;
let sumExceeded = false;

// Add value to array.
// Check sum of array. If the sum equals the result, then contigFound = true.
// If the sum exceeds the result, move on to the next number, reset counters, then go to the next k--.
// Else if the sum is smaller than the result, try adding the next number.
originalArr = originalText.split("\n");
// console.log("Original array: "+originalArr);

for (var k = size-1; k>=0; k--) {
    if (!contigFound) {
        contig = [];
        sum = 0;
        sumExceeded = false;
        // Start at last number.
        // If that number is larger than the target value, go to the next number (aka do nothing).
        // If the resultants um is LESS than the target value, then try adding the next lowest number.
        // Repeat until the sum === result, OR sum exceeds result, in which case, move on.
        contig.push(parseInt(originalArr[k]));

        for (var bar = k-1; bar>=0; bar--){
            if (!sumExceeded) {
                contig.push(parseInt(originalArr[bar]));
                sum = sumElements(contig);
                if (sum === result){
                    contigFound = true;
                    sumExceeded = true;
                } else if (sum > result) {
                    sumExceeded = true;
                }
            }
        }
    }
}

console.log(contig);
low = findMin(contig,low);
high = findMax(contig,0);
console.log("low of "+low+" + high of "+high+" = "+parseInt(parseInt(low)+parseInt(high)));

function sumElements (array){
    var total = 0;
    for (var i = 0; i<array.length; i++){
        total+=parseInt(array[i]);
    }
    return total;
}

function findMin (array,maxNum){
    var theMin = parseInt(maxNum);
    for (var i=0; i<array.length; i++){
        if (array[i]<theMin) { theMin = array[i]; }
    }
    return theMin;
}

function findMax (array,minNum){
    var theMax = parseInt(minNum);
    for (var i = 0; i<array.length; i++){
        if (array[i]>theMax) { theMax = array[i];}
    }
    return theMax;
}
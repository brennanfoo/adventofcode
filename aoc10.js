var requireText = require('require-text');
var input = requireText('./inputs/aoc10.txt',require).split("\n").map(Number);

input.sort(function(a, b){ return a - b })
input.unshift(0); // add outlet
input.push(input[input.length-1]+3); // add built-in

var oneDiff = 0
var threeDiff = 0

for (var i=0; i<input.length-1; i++){
    if (input[i+1]-input[i] === 1) { oneDiff++ }
    else if (input[i+1]-input[i] === 3) { threeDiff++ }
}

console.log("oneDiff "+oneDiff)
console.log("threeDiff "+threeDiff)
console.log(input)
console.log(oneDiff*threeDiff)

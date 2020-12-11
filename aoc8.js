var requireText = require('require-text');
var input = requireText('./inputs/aoc8.txt',require).split("\n");

var accumulator = 0;
var firstTime = [];
var index = 0;
var exitLoop = false;

input.forEach(function (i){
    firstTime.push(true);
})

do {
    process(index);
    console.log("acc = "+accumulator);
} while (!exitLoop)

function process(i){
    var string = input[index]
    var action = string.split(" ")[0];
    var magnitude = parseInt(string.split(" ")[1]);

    if (firstTime[i] !== true) {
        exitLoop = true;
    } else if (action === 'acc'){
        firstTime[i] = false;
        accumulator += magnitude;
        index += 1;
    } else if (action === 'jmp'){
        firstTime[i] = false;
        index += magnitude;
    } else if (action === 'nop'){
        firstTime[i] = false;
        index += 1;
    }
}

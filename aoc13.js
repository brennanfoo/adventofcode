let requireText = require('require-text');
let input = requireText('./inputs/aoc13.txt',require).split("\r\n");
let time = parseInt(input[0]);
let busses = input[1].split(',');
let minWait = Number.MAX_SAFE_INTEGER;
let minWaitID = 0;

const print = console.log;
removeItemAll(busses,'x')

print(busses);

busses.forEach(function (i){
    let cycle = Math.floor(time/parseInt(i));
    print(cycle)
    let next = parseInt(i)*(cycle+1);
    print(next)
    let wait = next-time;

    if (wait < minWait) {
        minWait = wait;
        minWaitID = i;
    }
})

print("Next bus = "+minWaitID+" which arrives in "+minWait+" minutes.")
print(minWaitID*minWait);

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}
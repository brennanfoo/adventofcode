const print = console.log;
let requireText = require('require-text');
let input = requireText('./inputs/aoc15.txt',require).split(',');

let arr = [];
input.forEach(function (i){
    arr.push(parseInt(i));
})

let index = arr.length;

do {
    let searchNum = arr[index-1];
    let lastInstance = -1;
    for (var i=index-2; i>=0; i--){
        if (searchNum===arr[i]) {
            lastInstance = i;
            break;
        }
    }
    if (lastInstance>-1){
        arr.push(parseInt((index-1)-lastInstance));
    } else {
        arr.push(0);
    }
    index++;
} while (index<2020)

print(arr[2019]); //206
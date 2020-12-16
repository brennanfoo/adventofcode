const print = console.log;
let requireText = require('require-text');
let input = requireText('./inputs/aoc16.txt',require).split("\r\n");
let bounds = [];
let tickets = requireText('./inputs/aoc16tickets.txt',require).split("\r\n");

// Get valid bounds
input.forEach(function (i){
    let words = i.split(' ');
    words.forEach(function (j){
        let words2 = j.split('-');
        if (words2.length===2){
            bounds.push(j)
        }
    })
})

// Add valid nums to a set
let validNums = new Set();
bounds.forEach(function (k){
    let lower = parseInt(k.split('-')[0])
    let upper = parseInt(k.split('-')[1])
    for (let i=lower; i<=upper; i++){
        validNums.add(i)
    }
})

// Check each ticket value against the set
let invalidValues = [];
tickets.forEach(function (m){
    let vals = m.split(',');
    vals.forEach(function (n){
        if (!validNums.has(parseInt(n))){
            invalidValues.push(parseInt(n))
        }
    })
})

let sum = 0;
invalidValues.forEach(function (p){
    sum+=p;
})

print(sum)
var requireText = require('require-text');
var input = requireText('./inputs/aoc11.txt',require).split("\n");

var arrArr = [];
var tempArr = [];
var equilibrium = false;


// Populate arrArr
input.forEach(function (r){
    for (var c = 0; c<input[0].length; c++){
        tempArr.push(r.charAt(c));
    }
    arrArr.push(tempArr);
    tempArr = [];
})

do {
    arrArr = processSeats(arrArr);
} while(!equilibrium)

console.log(countOccupied(arrArr));

function processSeats(array){
    let nextSeatMap = [];
    array.forEach(function (row){
        let nextRow = [];
        row.forEach(function (seat){
            let adjacentPeople = checkAdjacentOccupied (arrArr, row, seat);
            if (seat===".") { nextRow.push('.');}
            else if (seat==='#' && adjacentPeople >= 4){
                nextRow.push('L'); // L = empty
            } else if (seat==='L' && adjacentPeople <= 0){
                nextRow.push('#');
            }
        })
        nextSeatMap.push(nextRow);
    })
    equilibrium = arraysEqual(array,nextSeatMap);
    return(nextSeatMap);
}

function checkAdjacentOccupied(array, row, seat){
    let adjacentOccupied = 0;
    if (array[row-1].charAt(array[row-1][seat-1])==='#') {adjacentOccupied++;}
    if (array[row-1].charAt(array[row-1][seat])==='#') {adjacentOccupied++;}
    if (array[row-1].charAt(array[row-1][seat+1])==='#') {adjacentOccupied++;}
    if (array[row].charAt(array[row][seat-1])==='#') {adjacentOccupied++;}
    if (array[row].charAt(array[row][seat+1])==='#') {adjacentOccupied++;}
    if (array[row+1].charAt(array[row+1][seat-1])==='#') {adjacentOccupied++;}
    if (array[row+1].charAt(array[row+1][seat])==='#') {adjacentOccupied++;}
    if (array[row+1].charAt(array[row+1][seat+1])==='#') {adjacentOccupied++;}
    return adjacentOccupied;
}

function countOccupied(array){
    let occCount = 0;
    for (let foo = 0; foo<array.length; foo++){
        for (let bar = 0; bar<array[foo].length; bar++ ){
            if (array[foo][bar]==='#'){occCount++;}
        }
    }
    return occCount;
}

function arraysEqual(a, b) { // source https://stackoverflow.com/a/16436975
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

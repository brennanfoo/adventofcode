var requireText = require('require-text');
var input = requireText('./inputs/aoc11.txt',require).split("\n");

var arrArr = [];
var tempArr = [];

console.log(input);

input.forEach(function (r){
    for (var c = 0; c<input[0].length; c++){
        tempArr.push(r.charAt(c));
    }
    arrArr.push(tempArr);
    tempArr = [];
})

function processSeats(array){
let nextSeat = [];
    arrArr.forEach(function (row){
        let nextRow = [];
        row.forEach(function (seat){
            let adjacentPeople = checkAdjacentOccupied (arrArr, row, seat);

        })
    })

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

function arraysEqual(a, b) { // source https://stackoverflow.com/a/16436975
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
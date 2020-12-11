var requireText = require('require-text');
var passes = requireText('./inputs/aoc5.txt',require).split("\n");

// Absolute
const rowMin = 0;
const rowMax = 127;
const colMin = 0;
const colMax = 8;

var rowLow = 0;
var rowHigh = 127;
var colLow = 0;
var colHigh = 7;

var highestID = 0;

passes.forEach(function(i){
    for (var j=0; j<7; j++){
        if (i.substring(j,j+1)=='F'){
            F(rowLow,rowHigh);
        } else {
            B(rowLow,rowHigh);
        }
    }
    for (var k=7; k<10; k++){
        if (i.substring(k,k+1)=='L'){
            L(colLow,colHigh);
        } else {
            R(colLow,colHigh);
        }
    }


    highestID = Math.max(highestID, rowLow*8 + colLow);

    rowLow = 0;
    rowHigh = 127;
    colLow = 0;
    colHigh = 7;
})

console.log("Highest ID: "+highestID);

// Add seat IDs into an array (starting at row=1, and max=126)
// Check for missing seats listed
// if (missing) and seats before and after exist
// log that seat ID



function F(low,high){
    rowLow = low;
    rowHigh = Math.floor((high+low)/2)
}

function B(low, high){
    rowLow = Math.ceil((high+low)/2);
    rowHigh = high;
}

function L(low, high){
    colLow = low;
    colHigh = Math.floor((high+low)/2)
}

function R(low, high){
    colLow = Math.ceil((high+low)/2);
    colHigh = high;
}
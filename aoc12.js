let requireText = require('require-text');
let input = requireText('./inputs/aoc12.txt',require).split("\n");
let arr = [];
input.forEach(function (i){
     arr.push(i.trim());
})

let xPos = 0;
let yPos = 0;
let angle = 90;

arr.forEach(function (j){
    let action = j.substring(0,1);
    let magnitude = parseInt(j.substring(1));
    processAction(action,magnitude);
})

console.log("Final xPos + yPos = "+Math.abs(xPos)+" "+Math.abs(yPos));
console.log(Math.abs(xPos)+Math.abs(yPos));

function processAction(action, magnitude){
    if (action==='N'){
        yPos += magnitude;
    } else if (action==='E'){
        xPos += magnitude;
    } else if (action==='S'){
        yPos -= magnitude;
    } else if (action==='W'){
        xPos -= magnitude;
    } else if (action==='F'){
        forward(magnitude);
    } else if (action==='L'){
        angle += (360-magnitude);
        angle = angle%360;
    } else if (action==='R'){
        angle += magnitude;
        angle = angle%360;
    }
    report(action, magnitude);
}

function forward(magnitude){
    if (angle===90){
        xPos += magnitude;
    } else if (angle===180) {
        yPos -= magnitude;
    } else if (angle===270){
        xPos -= magnitude;
    } else if (angle===0){
        yPos += magnitude;
    } else {console.log("Error: angle is not N/E/S/W");}
}

function report(action, magnitude){
    console.log(action+""+magnitude+" - new xPos yPos of "+xPos+", "+yPos);
}
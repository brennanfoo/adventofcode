let requireText = require('require-text');
let input = requireText('./inputs/aoc12.txt',require).split("\n");
// let input = `F10
// N3
// F7
// R90
// F11`.split("\n");
let arr = [];
input.forEach(function (i){
    arr.push(i.trim());
})

//Ship Position
let xPos = 0;
let yPos = 0;

// Waypoint position
let wayXPos = 10;
let wayYPos = 1;

arr.forEach(function (j){
    let action = j.substring(0,1);
    let magnitude = parseInt(j.substring(1));
    processAction(action,magnitude);
})

console.log("Final xPos + yPos = "+Math.abs(xPos)+" "+Math.abs(yPos));
console.log(Math.abs(xPos)+Math.abs(yPos));

function processAction(action, magnitude){
    if (action==='N'){
        wayYPos += magnitude;
    } else if (action==='E'){
        wayXPos += magnitude;
    } else if (action==='S'){
        wayYPos -= magnitude;
    } else if (action==='W'){
        wayXPos -= magnitude;
    } else if (action==='F'){
        forward(magnitude);
    } else if (action==='L'||action==='R') {
        rotate(action, magnitude)
    }
    report(action, magnitude);
}

function forward(magnitude){
    let xDiff = wayXPos-xPos;
    let yDiff = wayYPos-yPos;

    xPos += xDiff*magnitude;
    yPos += yDiff*magnitude;

    wayXPos = xPos + xDiff;
    wayYPos = yPos + yDiff;
}

function rotate(direction, degrees){
    let relXPos = wayXPos - xPos;
    let relYPos = wayYPos - yPos;
    console.log ("Relative diff before rotating: "+relXPos+", "+relYPos);

    if ((direction === 'L' && degrees === 90) || (direction === 'R' && degrees == 270)){
        let newRelXPos = -relYPos;
        let newRelYPos = relXPos;
        wayXPos = xPos+newRelXPos;
        wayYPos = yPos+newRelYPos;
    }
    else if (degrees === 180){
        relXPos = -relXPos;
        relYPos = -relYPos;
        wayXPos = xPos + relXPos;
        wayYPos = yPos + relYPos;
    }
    else if ((direction === 'R' && degrees === 90) || (direction === 'L' && degrees == 270)){
        let newRelXPos = relYPos;
        let newRelYPos = -relXPos;
        wayXPos = xPos + newRelXPos;
        wayYPos = yPos + newRelYPos;
    }
    else {console.log("Rotation error");}
}

function report(action, magnitude){
    console.log(action+""+magnitude+" - new xPos yPos of "+xPos+", "+yPos+", waypoint is at "+wayXPos+", "+wayYPos+" (relative diff of "+(wayXPos-xPos)+", "+(wayYPos-yPos)+")");
}
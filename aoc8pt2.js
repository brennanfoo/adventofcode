var requireText = require('require-text');
const text = requireText('./inputs/aoc8.txt',require);

// Global counters
let nopCount = (text.match(/(nop)/g) || []).length; // count nop
let jmpCount = (text.match(/(jmp)/g) || []).length; // count jmp
let input = text;
let size = input.split('\n').length;
let escapedLoop = false;
let linesProcessed = 0;

// Used in each attempt
let firstTime = [];
let accumulator = 0;
let index = 0;
let lastActionIndex = 0;

let j = 1;
do {
    resetProcess();
    input = replaceNthJmpWithNop(text,j);
    processText(input);
    j++;
} while (j<=jmpCount && !escapedLoop)

//If we can't escape the loop by replacing 'jmp' with 'nop', replace nth 'nop' with 'jmp'.

var k = 1;
if (!escapedLoop){
    do {
        resetProcess();
        input = replaceNthNopWithJmp(text,k);
        processText(input);
        k++;
    } while (k<=nopCount && !escapedLoop)
}

// Source: https://stackoverflow.com/a/10585234
function replaceNthJmpWithNop(string,num){
    input = string;
    let nth = 0;
    input = input.replace(/(jmp)/g, function (match) {
        nth++;
        return (nth === num) ? "nop" : match;
    });
    return input;
}

function replaceNthNopWithJmp(string,num){
    input = string;
    let nth = 0;
    input = input.replace(/(nop)/g, function (match) {
        nth++;
        return (nth === num) ? "jmp" : match;
    });
    return input;
}

function resetProcess(){
    firstTime = [];
    for (let foo = 0; foo < size; foo++){
        firstTime.push(true);
    }
    index = 0;
    accumulator = 0;
    lastActionIndex = 0;
}

function processText(str){
    let passageArr = str.split('\n');
    let currentLine = 0;
    let keepGoing = 1;
    let result = [];
    do {
        result = processLine(passageArr[currentLine],currentLine); //returns next line index, and whether or not to keep going
        currentLine = result[0];
        keepGoing = result[1];
    } while (currentLine < passageArr.length && keepGoing === 1)
}

// Should accept the whole string and the line, increment acc, and send back new index ('currentLine').
function processLine(string, i){
    if (firstTime[i] !== true) {
        // if it is NOT the first time, escape the loop by setting keepGoing to 0
        return ([0, 0]);
    } else {
        let action = string.split(" ")[0];
        let magnitude = string.split(" ")[1];
        firstTime[i] = false;
        lastActionIndex = i;
        if (action === 'acc'){
            index++;
            accumulator += parseInt(magnitude);
            return statsAndEscape();
        } else if (action === 'jmp'){
            index += parseInt(magnitude);
            return statsAndEscape();
        } else if (action === 'nop'){
            index += 1;
            return statsAndEscape();
        }
    }
}

function statsAndEscape(){
    linesProcessed++;
    // console.log("Lines processed: "+linesProcessed+ " / Last action: "+lastActionIndex+" / Next action: "+index+" / Accumulator: "+accumulator);
    if (index>=size) {
        escapedLoop = true;
        return [index, 0];
    } else {
        return [index, 1];
    }
}
console.log(accumulator);
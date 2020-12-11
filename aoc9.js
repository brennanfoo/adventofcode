var requireText = require('require-text');
var input = requireText('./inputs/aoc9.txt',require).split("\n");

var valid = [];
var result = 0;
var index = 0;
var size = input.length;
var resultFound = false;

// Load first 25 into array
do {
    valid.push(parseInt(input.shift()));
    index++;
} while (index < 25)

for (var foo = 0; foo<size; foo++){
    if (!resultFound) {
        var checkNum = false;
        result = parseInt(input.shift());
        for (var i = 0; i<25; i++){ // cycle through each int in valid[]
            for (var j = 0; j<25; j++){ // see if it sums up to the result
                if (!(i===j) && (valid[i]+valid[j]===result)){
                    if (!checkNum){
                        checkNum = true;
                        valid.push(result);
                        valid.shift();
                    }
                }
            }
        }
        if (!checkNum) {
            console.log("Number not eligible: "+result);
            resultFound = true
        }
    }
}
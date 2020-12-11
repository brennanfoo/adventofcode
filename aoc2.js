var requireText = require('require-text');
var str = requireText('./inputs/aoc2.txt',require).split("\n");

var count = 0;
str.forEach(function (i){
    var regexStr = i;

    //find min & max
    console.log (regexStr);
    var min = regexStr.substring(0,2).replace(/\D/g,'');
    var max = regexStr.substring(2,5).replace(/\D/g,'');
    var index = regexStr.substring(4,7).replace(/[^a-zA-Z]/,'').trim()[0];
    console.log("Target letter: "+index);
    var letterCount = regexStr.split(index).length-2;
    console.log("Low "+min+", High "+max+", Target letter count: "+letterCount);

    if (min <= letterCount && letterCount <= max) {
        count++;
        console.log("Instances of target letter: "+letterCount+" = Yes");
    }
    else {
        console.log("Instances of target letter: "+letterCount+" = Nope");
    }

});
console.log("Final count: "+count);

var countTwo = 0;
str.forEach(function (i){
    var regexStr = i;

    //find min & max
    console.log (regexStr);
    var min = parseInt(regexStr.substring(0,2).replace(/\D/g, ''));
    var max = parseInt(regexStr.substring(2,5).replace(/\D/g,''));
    var x = false;
    var y = false;
    var index = regexStr.substring(4,7).replace(/[^a-zA-Z]/,'').trim().charAt(0);
    var lastWord = regexStr.substring(getPosition(regexStr,index,1)+3);
    console.log(lastWord);
    if (lastWord.charAt(min-1)===index){
        x = true;
    }
    if (lastWord.charAt(max-1)===index){
        y = true;
    }
    if (y === true && x === false){
        countTwo++;
    } else if (x === true && y===false){
        countTwo++;
    }
});

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

console.log("Final count 2: "+countTwo);
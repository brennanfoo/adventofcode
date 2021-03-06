var requireText = require('require-text');
var str = requireText('./inputs/aoc3.txt',require).split("\n");

var x = 0;
var y = 0;
var height = str.length;
const rowWidth = str[0].length;
var trees = 0;

for (var i=0; i<(height-1); i++){ // Starting from first row (i=0), go down 1 right 3
    x+=3;
    y+=1;

    x%=rowWidth;

    console.log("At "+x+", "+y+", there is: "+str[y][x]); // Check tree

    if (str[y][x]==='#'){
        trees+=1;
        console.log("Tree found at "+x+", "+y+". New count: "+trees);
    }
}
// 3/1 = 162
// 1/1 = 80
// 5/1 = 77
// 7/1 = 83
// 1/2 = 37
console.log(trees);
console.log(162*80*77*83*37);
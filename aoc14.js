let requireText = require('require-text');
let input = requireText('./inputs/aoc14.txt',require).split("\r\n");
let mask = "";
let map1 = new Map();

const print = console.log;

input.forEach(function (i){
    let left = i.split(" = ")[0]
    let right = i.split(" = ")[1]
    let address = 0;
    if ('mask' === left) {
        mask = right;
    }
    else {
        address = left.substring(4,left.length-1)
        maskAndSet(map1, address, right);
    }
})

let sum = 0;
map1.forEach(function (foo){
    sum+= parseInt(foo,2);
})
print(sum)

function maskAndSet(map, key, value){
    let bin = (value >>> 0).toString(2);
    let prefix = "";
    for (var i=0; i<(36-bin.length); i++) {prefix += "X";}
    bin = prefix+bin;

    for (var k=0; k<36; k++){ // Mask
        if (mask[k]!=="X"){
            bin = bin.substring(0,k)+mask[k]+bin.substring(k+1);
        }
    }

    for (var j=0; j<36; j++){
        if (bin[j]=="X"){
            bin = bin.substring(0,j)+"0"+bin.substring(j+1);
        }
    }
    map.set(key,bin);
}

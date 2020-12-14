const print = console.log;
let requireText = require('require-text');
let input = requireText('./inputs/aoc14.txt',require).split("\r\n");

let mask = "";
let map1 = new Map();

input.forEach(function (i){
    let left = i.split(" = ")[0]
    let right = i.split(" = ")[1]
    if ('mask' === left) {
        mask = right;
    }
    else {
        let address = left.substring(4,left.length-1)
        maskAndSet(map1, address, right);
    }
})

let sum = 0;
map1.forEach(function (foo){
    sum+= parseInt(foo,2);
})
print(sum)

function maskAndSet(map, key, value){
    let binVal = (value >>> 0).toString(2);
    let binAdd = (key >>> 0).toString(2);
    let prefix = "";
    let xCount = "";
    for (var i=0; i<(36-binAdd.length); i++) {prefix += "0";}
    binAdd = prefix+binAdd;
    for (var k=0; k<36; k++){ // Mask
        if (mask[k]==="1"){
            binAdd = binAdd.substring(0,k)+mask[k]+binAdd.substring(k+1);
        } else if (mask[k]==="X"){
            binAdd = binAdd.substring(0,k)+mask[k]+binAdd.substring(k+1);
            xCount+="X";
        }
    }

    //numAdds = # of memory locations?
    let numAdds = Math.pow(2,xCount.length);
    let subArr = [];
    for (var m = 0; m<numAdds; m++){
        let suff = (m >>> 0).toString(2);
        let pref = "";
        for (var n =0; n<(xCount.length-suff.length);n++) {
            pref+="0";
        }
        subArr.push(pref+suff);
    }

    for (var p = 0; p<numAdds; p++){
        let tempAdd = binAdd;
        let xCounter = xCount.length-1;
        let subs = subArr[p]
        for (var q = xCount.length-1; q>=0; q--){
            for (var r = 35; r>=0; r--){
                if (tempAdd[r] === 'X'){
                    tempAdd = tempAdd.substring(0,r)+subs[xCounter]+tempAdd.substring(r+1);
                    xCounter--;
                }
            }
        }
        map.set(tempAdd,binVal);
    }
}
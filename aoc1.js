var requireText = require('require-text');
var nums = requireText('./inputs/aoc1.txt',require).split("\n").map((e) => parseInt(e));

var i;
var j;
for (i=0; i<nums.length; i++){
    for (j=i; j<nums.length; j++){
        if (nums[i]+nums[j]==2020){
            console.log(nums[i]+" "+nums[j]+" "+nums[i]*nums[j]);
        }
    }
}

nums.sort(function (a, b){return a-b});
var l;
var m;
var n;
for (l=0; l<nums.length; l++){
    for (m=l; m<nums.length; m++){
        for (n=m; n<nums.length; n++)
            if (nums[l]+nums[m]+nums[n]==2020){
                var sum = nums[l]+nums[m]+nums[n];
                console.log(nums[l]+"+"+nums[m]+"+"+nums[n]+"="+sum);
                console.log(nums[l]+"*"+nums[m]+"*"+nums[n]+"="+nums[l]*nums[m]*nums[n]);
            }
    }
}

//Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

// Helper function to print to the screen.
/*
function print(line) {
    const appDiv = document.getElementById('app');
    const div = document.createElement('div');
    div.innerHTML = line;
    appDiv.appendChild(div)
}
 */

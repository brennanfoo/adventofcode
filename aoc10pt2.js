var input = `95
43
114
118
2
124
120
127
140
21
66
103
102
132
136
93
59
131
32
9
20
141
94
109
143
142
65
73
27
83
133
104
60
110
89
29
78
49
76
16
34
17
105
98
15
106
4
57
1
67
71
14
92
39
68
125
113
115
26
33
61
45
46
11
99
7
25
130
42
3
10
54
44
139
50
8
58
86
64
77
35
79
72
36
80
126
28
123
119
51
22`.split("\n").map(Number)
input.sort(function(a, b){ return a - b })
input.unshift(0); // add outlet
input.push(input[input.length-1]+3); // add built-in

var oneDiff = 0
var threeDiff = 0
var diffArr = [];

for (var i=0; i<input.length-1; i++){
    if (input[i+1]-input[i] === 1) { oneDiff++ }
    else if (input[i+1]-input[i] === 3) { threeDiff++ }
    diffArr.push(input[i+1]-input[i])
}

var oneDiffThreeTimesCounter = 0;

for (var i=0; i<diffArr.length; i++){
    if (diffArr[i] ===1 ) {
        if (diffArr[i + 1] === 1) {
            if (diffArr[i + 2] === 1) {
                oneDiffThreeTimesCounter++;
            }
        }
    }
}
console.log(input);
console.log(diffArr);
console.log(oneDiffThreeTimesCounter)
let diffStr = "";

for (var i=0; i<diffArr.length; i++){
    diffStr+=String(diffArr[i]);
}

oneDiffStrArr = diffStr.split("3");
console.log(oneDiffStrArr);

// 1111 can be 4 diff: 1111, 13, 31, 22
// 111 can be 3 diff: 111, 12, 21
// 11 can be 2 diff: 11, 2

var possibilities = 1;

oneDiffStrArr.forEach(function (i){
  if (i==="1111"){ possibilities *=4; }
  else if (i==="111"){ possibilities *=3; }
  else if (i==="11"){ possibilities *=2; }
})

console.log(possibilities);
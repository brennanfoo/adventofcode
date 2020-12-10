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
input.push(input[input.length-1]+3);

var oneDiff = 0
var threeDiff = 0

for (var i=0; i<input.length-1; i++){
    if (input[i+1]-input[i] === 1) { oneDiff++ }
    else if (input[i+1]-input[i] === 3) { threeDiff++ }
}

console.log(input)
console.log(oneDiff*threeDiff)

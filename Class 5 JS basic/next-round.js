'use strict';

const fs = require("fs");
const data = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
function readline() {
  return data[idx++];
}
function print(x) {
  console.log(x);
}


const n = parseInt(readline());
const k = parseInt(readline());

let scores = [];
for (let i = 0; i < n; i++) {
    scores.push(parseInt(readline()));
}

const kthScore = scores[k - 1];

let count = 0;
for (let i = 0; i < n; i++) {
    if (scores[i] >= kthScore && scores[i] > 0) {
        count++;
    }
}

print(count);

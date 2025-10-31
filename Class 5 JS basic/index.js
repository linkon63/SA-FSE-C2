// To simulate Codeforces input
const fs = require("fs");
const data = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
function readline() {
  return data[idx++];
}
function print(x) {
  console.log(x);
}

// Your Codeforces logic starts here 👇
const t = parseInt(readline());
for (let i = 0; i < t; i++) {
  const n = parseInt(readline());
  print(n * 2);
}

// ---- For Loop ----
let sumFor = 0;
for (let i = 1; i <= 5; i++) {

  
  sumFor += i;
}
console.log("Sum using for loop:", sumFor);

// ---- While Loop ----
let j = 1;
let sumWhile = 0;
while (j <= 5) {
  sumWhile += j;
  j++;
}
console.log("Sum using while loop:", sumWhile);

// ---- Do...While Loop ----
let k = 1;
let sumDoWhile = 0;
do {
  sumDoWhile += k;
  k++;
} while (k <= 5);
console.log("Sum using do...while loop:", sumDoWhile);
let x = 10, y = 3;

// Code Example:
// console.log(x + y, x % y, x > y);


let n = 125;
let v=1;
while(n)
{
    v += v * (n % 10);
    n = Math.floor(n / 10);
}

console.log(v);
let arr = [1, 2, 3];
arr.push(4);

console.log("First element:", arr[0]);
console.log("Array length:", arr.length);

// Task: Reverse the array
arr.reverse();
console.log("Reversed array:", arr);


let arr2 = [];

//reverse manually
for ( let i = arr.length - 1; i >= 0; i--) {

  arr2.push(arr[i]);
}

console.log("Again Reversed array:", arr2);
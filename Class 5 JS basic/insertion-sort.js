let arr = [4, 3, 2, 1];
for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log("Sorted array (insertion sort):", arr);

// Sort [3,5,1,4,2] using insertion sort
let arr2 = [5, 3, 4, 2];
for (let i = 1; i < arr2.length; i++) {
  let key = arr2[i];
  let j = i - 1;
  while (j >= 0 && arr2[j] > key) {
    arr2[j + 1] = arr2[j];
    j--;
  }
  arr2[j + 1] = key;
  console.log("Sorted arr2:", arr2);
}
// console.log("Sorted arr2:", arr2);
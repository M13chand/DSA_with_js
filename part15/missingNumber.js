// Given an array nums containing n distinct numbers in the range [0-n], return only number in the range that is missing form the array.

// Eaxample
// Input: nums = [3,0,1]
// Output:2

let arr = [3, 0, 1];
let missingNumber = function (arr) {
  let i = 0;
  while (i < arr.length) {
    let correctIndx = arr[i]
    if (arr[i] < arr.length && arr[i] != arr[correctIndx]) {
      let temp = arr[i]
      arr[i] = arr[correctIndx]
      arr[correctIndx] = temp
    }
    else i++
  }
  for (let j = 0; j < arr.length; j++) {
    if (j != arr[j]) return j;
  }
  return arr.length;

}
console.log("The missing number in the array is:", missingNumber(arr));
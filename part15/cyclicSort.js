// Cyclic Sort Algorithm
let arr = [6, 5, 8, 2, 1, 4, 3, 7];
let i = 0;
while (i < arr.length) {
  let correctIndx = arr[i] - 1;
  if (arr[i] != arr[correctIndx]) {
    let temp = arr[i];
    arr[i] = arr[correctIndx]
    arr[correctIndx] = temp
  }
  else i++;

}
console.log(arr);

// left rotation by k using nested loop

let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;

for (let i = 0; i < k; i++) {

  let copy = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);

// right rotation by k using nested loop

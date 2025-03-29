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
console.log("The left rotation by k element is:", arr);

// right rotation by k using nested loop


let arr1 = [1, 2, 3, 4, 5];
let k1 = 2;
k1 = k1 % arr1.length;

for (let i = 0; i < k1; i++) {
  let copy1 = arr1[arr1.length - 1];
  for (let j = arr1.length - 1; j > 0; j--) {
    arr1[j] = arr1[j - 1];
  }
  arr1[0] = copy1;
}
console.log('The right rotation by k element is:', arr1);
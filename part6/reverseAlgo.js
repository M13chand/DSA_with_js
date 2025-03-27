//reverse algorithm for k rotation to left (efficient method )
let arr = [1, 2, 3, 4, 5];
let k = 2
  ;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);

function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

//reverse algorithm for k rotation to right
let array = [1, 2, 3, 4, 5, 6];
let k1 = 2;
reverse1(0, array.length - 1);
reverse1(0, k1 - 1);
reverse1(k1, array.length - 1);
console.log("The right rotation is:", array);
function reverse1(a, b) {
  while (a < b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    a++;
    b--;
  }
}

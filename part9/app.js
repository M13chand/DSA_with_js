// Bubble short  Algorithm
let array = [10, 5, 12, 1, 3]
let n = array.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }

  }

}
console.log("The sorted array is ", array)

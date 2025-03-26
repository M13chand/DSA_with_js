// Left rotation by 1 element
//arr =[1,2,3,4,5,6] Output= [ 2, 3, 4, 5, 6, 1 ]


let array = [1, 2, 3, 4, 5, 6];
let copy = array[0];
for (let i = 0; i < array.length - 1; i++) {
  array[i] = array[i + 1];

}
array[array.length - 1] = copy;
console.log(array);
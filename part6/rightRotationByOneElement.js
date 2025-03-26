// Right rotation by 1 element
//arr =[1,2,3,4,5,6] Output= [ 2, 3, 4, 5, 1 ]


let array = [1, 2, 3, 4, 5];
let copy = array[array.length - 1];
for (let i = array.length - 1; i > 0; i--) {
  array[i] = array[i - 1];

}
array[0] = copy;
console.log(array);

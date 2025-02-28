
//Q5. Swap the variables via 3-method 
//Method 1: Using a third variable
let a3 = 10;
let b3 = 20;
let temp;
temp = a3; //10
a3 = b3; //20
b3 = temp; //10

console.log("Final value of a3 and b3 is :", a3, b3); //20 10

//Method 2: simple mathematical operation
a3 = a3 + b3; //30 
b3 = a3 - b3; //10
a3 = a3 - b3; //20
console.log(a3, b3); //20 10 

//Method 3: Array destructuring assignment
[a3, b3] = [b3, a3];
console.log(a3, b3); //20 10

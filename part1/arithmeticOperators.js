// Addition(+) , Subtraction(-), Multiplication(*) ,Division(/) ,modulus(%)
let a = 5;
let b = 2;
console.log(a + b); //7
console.log(a - b); //3
console.log(a * b); //10

// Floor and Ceil function are used to get the integer part of the result
console.log(a / b); //2.5
console.log(Math.floor(a / b)); //2
console.log(Math.ceil(a / b)); //3
console.log(Math.floor(b / a));  //0

// Modulus operator returns the remainder of the division
console.log(a % b); //1

//if the dividend is smaller than the divisor then the result will be the dividend
console.log(b % a); //2

//this logic is used when you need single digit from the right side 
let x = 4564;

console.log(x % 10); //4 the last digit will be printed as answer because  10*4560 = 45600 and 4564-4560 = 4

//this logic is used when you need to remove the last digit from the number
console.log(Math.floor(x / 10));
//4564/10 = 456.4 and Math.floor(456.4) = 456
//4564/100 = 45.64 and Math.floor(45.64) = 45



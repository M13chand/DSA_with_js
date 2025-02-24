//Q1.Sum of two numbers
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of two numbers is: " + sum);

// Q2.Concatenation of the number with the string/relationship between integers and strings 
let c = 1;
let d = "2";
console.log(d + c);
console.log(typeof (d + c));

//Q3.Sum and message
let a1 = 10;
let b1 = 20;
console.log("The sum of 10 and 20 is " + a1 + b1);
// The sum of 10 and 20 is 1020 because the first operand is a string and the second operand is a number so the number will be converted to a string and then both strings will be concatenated.

console.log("The sum of 10 and 20 is " + (a1 + b1));
// The sum of 10 and 20 is 30 because the first bracket will be solved which contains both numbers and then the string will be concatenated with the result of the bracket.

console.log(a1 + b1 + " is the sum of 10 and 20 "); // the sum of 10 and 20 is 30 because the first two operands are numbers so they will be added and then the result will be concatenated with the string.

//  Type coercion
// In JavaScript, type coercion is the automatic conversion of values from one data type to another, enabling operations between different types.

console.log("1" + 3); // 13 
// because the first operand is a string so the second operand will be converted to a string and then both strings will be concatenated.

console.log("1" - 3); // -2
console.log("1" * "2"); // 2
console.log("1" / "2"); // 0.5
console.log("1" % "2"); // 1
console.log(5 == "5"); // true because it's checking the value only not the type.

console.log(5 === "5");
// false because the first operand is a number and the second operand is a string so they are not equal.

//Q4. Accept and print the answer.

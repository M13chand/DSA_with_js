
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

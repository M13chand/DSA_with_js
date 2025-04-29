// Time complexity O(min(a,b))
let a = 32, b = 20;
while (a != b) {
  if (a > b) {
    a = a - b;
  }
  else {
    b = b - a;
  }
}
console.log(a);

// Recursion code 
function gcd(a, b) {
  if (b == 0) return a;
  if (a > b) return gcd(a - b, b)
  return gcd(b, b - a);
}
console.log(gcd(a, b));


// Optimized code using modulo operator 
// Time complexity log(max(a,b))

function gcd1(a, b) {
  if (b == 0) return a;
  return gcd1(b, a % b);
}
console.log(gcd1(a, b));

// using iterative method 
function gcd2(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log("Using iterative method ", gcd2(a, b));


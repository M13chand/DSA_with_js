// greet()
// function greet() {
//   console.log("Good morning Guys")
//   enjoy()
// }

// function enjoy() {
//   console.log("Enjoy the day")
//   wish()
// }

// function wish() {
//   console.log("Wish you all the best")
// }


//call stack

function temp(n) {
  if (n == 0) return
  console.log("Hello Manoj");
  temp(n - 1);

}
temp(4);

//reverse the number form 10 t0 1

// function rev(n) {
//   if (n == 0) return
//   console.log(n);
//   rev(n - 1)

// }
// rev(10)

//print the number form the 1 to 10 

// function printNumber(a) {
//   if (a == 11) return
//   console.log(a)
//   printNumber(a + 1)
// }
// printNumber(1);


// OR

// function printNumber(a) {
//   if (a == 0) return
//   printNumber(a - 1);
//   console.log(a);
// }
// printNumber(10);

// sum of the number in the reverse order 

function sum(n1) {
  if (n1 == 1) return 1;
  return n1 + sum(n1 - 1);

}
console.log("The sum of the number is ", sum(10))

// factorial of the number 
function fact(n) {
  if (n == 0) return

}

//for-loop
// for(Start;condition;increment)
// // 1-22
for (let i = 1; i < 23; i++) {
  console.log(i);
}

//23-54
for (let j = 23; j <= 54; j++) {
  console.log(j);
}

// 33-1
for (let k = 33; k >= 1; k--) {
  console.log(k);
}
//1-10
let l = 1;
for (; l <= 10; l++) {
  console.log(l);
}
console.log(l + " fail to run")


// these are a valid code and run in infinite loop

// //Q1-type
// for (let m = 1; m <= 10;) {
//   console.log(m);
// }

// //Q2-type
// for (; ;) {
//   console.log("Hello");
// }

// //Q3-type
// for (let m1 = 0; ;) {
//   console.log("manoj")
// }

// // This will through error if you do not put two ; in the for loop  (;;)
// for (; ) {
//   console.log("manoj")
// }


//var can be accessed outside the function block
for (var a = 1; a <= 10; a++) {
  console.log(a); //print 1-10
}
console.log(a); //print 11 with this log

//if above variable is defined with let then the will through error message  a is not defined, let can be accessed outside the function block


//Q1. Print n Hellow world
n = 6;
for (let b = 1; b <= n; b++) {
  console.log("Hello World");
}


//rQ2. One to n number and vice versa
for (let c = 1; c < n; c++) {
  console.log(c);
}

for (let d = n; d >= 0; d--) {
  console.log(d);
}


//Q3. sum of n natural numbers ans factorial of numbers
//1 2 3 4 5 6 7 8 9 ..
let n1 = 4;

if (isNaN(n1)) {
  console.log("Invalid input");
}
else {
  if (n1 > 0) {
    sum = 0;
    for (let e = 1; e <= n1; e++) {
      sum += e;
    }
    console.log("The sum is :", sum);
  }
  else {
    console.log("Should be +ve and more than 0 ")
  }
}

// factorial logic 
fact = 1;
for (let e = 1; e <= n1; e++) {
  fact *= e;
}
console.log("The factorial  is :", fact);

//factors ofthe numbers
n2 = 12;
for (let f = 1; f <= Math.floor(n2 / 2); f++) {  //f =1 ; f=12/2; f++ , f=1 ;f=6;f++
  if (n2 % f == 0) {
    console.log(`The factors of ${n2} is`, f);
  }
}
console.log(`The factors of ${n2} is`, n2);

//check the prime  number  or not

n3 = 5;
var prime = true;
for (let g = 2; g < n3; g++) {
  if (n3 % g === 0) {
    prime = false;
    console.log(n3, "is not prime");
    return;
  }
}
console.log(n3, "is prime");




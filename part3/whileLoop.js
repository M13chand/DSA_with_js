// start;
// while(end){
//   //code
//   change
// }

//if you don't know number of loop to go or only know the condition to stop then use while-loop 
//sutitions 
let i = 1;
while (i <= 6) {
  console.log(i)
  i++;
}

//sum of digit
let j = 1234;
let sum = 0;
while (j > 0) {
  var rem = j % 10; //remainder 4 ,3,2,1
  j = Math.floor(j / 10); //123,12,1,0
  sum += rem;
}
console.log("The sum is :", sum);


//Reverse the number

// 1234%10-4*10-40+3-43
// 1234/10-123%10-3+40-43
// 123%10=3*10->30+2=32*10->320+1=321

// let k = 145;
// var rev = 0;
// while (k > 0) {
//   let rem = k % 10;
//   rev = rev * 10 + rem;
//   k = Math.floor(k / 10);
// }
// console.log("The reverse is :", rev);

//Strong number
//  123==1!+2!+3! if the sum of factroial is equal to the number itself then its strong number
k = 147;
let sum1 = 0;
var copy = k;
while (k > 0) {
  let rem = k % 10;
  let fact = 1;
  for (let k = 1; k <= rem; k++) {
    fact = fact * k;

  }
  sum1 = sum1 + fact;
  k = Math.floor(k / 10);
}
if (copy === sum1) {
  console.log("Strong")
}
else {
  console.log("Not Strong")
}
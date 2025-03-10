// problems
// Valid Voter 
// let age = "ram";
// console.log(age);

// if (age >= 18) {
//   console.log("You are a valid voter");
// }
// else if (age < 18) {
//   console.log("You are not a valid voter");
// }
// else {
//   console.log("This is not valid input ");
// }

let age = 26;

if (isNaN(age)) {
  console.log("This is not a valid input");
}

else if (age >= 18) {
  console.log("You are a valid voter");
}

else {
  console.log("You are not a valid voter");
}

// Problem-2 Shop discount
// Amount                    Discount
// 0-5000                    0%
// 5001-7000                 5%
// 7001-9000                 10%
// more than 9000            20%

let dis = 0;
let billAmount = 6000;
if (isNaN(billAmount) || billAmount < 0) {
  console.log("Invalid input");
  return;
}
if (billAmount > 0 && billAmount <= 5000) {
  dis = 0;
}
else if (billAmount >= 5001 && billAmount <= 7000) {

  dis = 5;
}
else if (billAmount >= 7001 && billAmount <= 9000) {

  dis = 10;
}
else if (billAmount > 9000) {
  dis = 20;
}

console.log('You should pay', billAmount - Math.floor((dis * billAmount) / 100));




// let billAmount = -8000;
// if (billAmount > 0 && billAmount <= 5000) {
//   console.log(`you should pay ${billAmount}`)
// }
// else if (billAmount >= 5001 && billAmount <= 7000) {
//   console.log('You should pay', billAmount - Math.floor((5 * billAmount) / 100));
// }
// else if (billAmount >= 7001 && billAmount <= 9000) {
//   console.log('You should pay', billAmount - Math.floor((10 * billAmount) / 100));
// }
// else if (billAmount > 9000) {
//   console.log('You should pay', billAmount - Math.floor((20 * billAmount) / 100));
// }
// else {
//   console.log('Invalid input');
// }

// problem-3
//Electricity bill
// 0-100 units       Rs.4.2/unit
// 101-200 units     Rs.6/unit
// 201-400 units     Rs.8/unit
// more than 400     Rs.13/unit

let unit = 700;
let amount = 0;

if (unit > 400) {
  amount += (unit - 400) * 13;
  unit = 400;
  //400
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;

  //200
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}

amount += unit * 4.2;
console.log(amount);




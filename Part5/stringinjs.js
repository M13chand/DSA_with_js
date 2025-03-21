
//index of the string like array
let name = 'manoj';
name = name + " chand"  //this will add the string and reassign the value to the name
console.log(name[4]);
name[0] = 'M'; //this will reamins same, string is immutable
//name.push('c')  //this will not work as string is not an array
console.log(name);

let num = [10, 23, 4, 3, 44, 33, 47, 87];
num[3] = 100;
console.log(num[4]);
console.log(num); //this will print the upadted array 



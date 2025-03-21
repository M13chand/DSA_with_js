let string = 'Hello World';
// shows the length of the string
console.log(string.length);

//Extract the substring from the string between the start and end index without including the start and end indexes
console.log(string.slice(2, 7))   //.slice(start,end )

//this will print the last 6 characters of the string
console.log(string.slice(-6, string.length));  //.slice(negative num, +ve num or string.length )  

//similar to slice but it will not include the negative indexes
console.log(string.substring(1, 3));
console.log(string.substring(1));  //form index 1 to end of the string will displayed







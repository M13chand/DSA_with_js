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

console.log(string.toUpperCase())  //conver the string to the Capital letters

console.log(string.toLowerCase()) //convert the string to the small letters.

console.log(string.concat(' Manoj')); // concat wiith the given string 



//
let str = "      Manoj Chand  ";
console.log(str.trim()); //remove the white spaces from the both sides

console.log(str);

//checks if the substring exists in the string
console.log(str.includes("ma"));  // false
console.log(str.includes("Ma"));   //true

//checks if the string starts with the given substring

console.log(string.startsWith('H'));  //true
console.log(string.startsWith('e'));  //false

// checks if the string ends with the given substring
console.log(string.endsWith('d'));  //true
console.log(string.endsWith('o'));  //false 

//replaces the first occurrence of substring
console.log(string.replace('H', 'K'));

//replaces all the occurrences of the substring
console.log(string.replaceAll(
  'Hello ', 'k cha  '));

//split the string into the array of substrings
console.log(string.split(''));  // slpit(separator)

//return character at the given index
console.log(string.charAt(2));  //charAt(index)

//return the unicode value of the character at the given index
console.log(string.charCodeAt(3));  //charCodeAt(index)

//indexOf returns the index of the substring
console.log(string.indexOf('e'));

//lastIndexOf returns the last index of the substring
console.log(string.lastIndexOf('Hello World'));





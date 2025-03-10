//Math.round()
let a = 18.7;
console.log(Math.round(a)); //19
console.log(Math.round(12.4)); //12
console.log(Math.round(12.5)); //13

//Math.ceil()
console.log(Math.ceil(12.4)); //13
console.log(Math.ceil(12.9)); //13

//Math.floor() 
console.log(Math.floor(5.4)); //5
console.log(Math.floor(5.9));  //5

//Math.truncate()  Removes the decimal part of the number and returns the integer part
console.log(Math.trunc(2.44)); //2
console.log(Math.trunc(3.95)); //3

//math.pow()
console.log(Math.pow(3, 4)); //3^4=81

// Math.sqrt()
console.log(Math.sqrt(144)); //12

//Math.cbrt()
console.log(Math.cbrt(8)); //2

// Math.abs() 
console.log(Math.abs(-54)) //54

// Math.random() 
//returns the random number between 2 and 4 according to the given condition
console.log(Math.random(2, 4));
console.log(Math.random() * 999) //0 to 999


// Math.max()
console.log(Math.max(34, 24, 34, 53)); //53

// Math.min()
console.log(Math.min(2, 4, 3, 1, 4, 2, 5, 33, 4)); //1

// tofixed()
let num = 32.424;
let number = num.toFixed(2);
console.log(number);  //32.42


//Math problems
// Probem-1
//Calcutate area and perimeter of rectangle

let length = 10;
let breadth = 12;

let areaOfRectangle = length * breadth;
console.log("The area of rectangle is ", areaOfRectangle); //120

let perimeterOfRectangle = 2 * (length + breadth);
console.log("The perimeter of rectange is ", perimeterOfRectangle); //44

// Probem-2. Generate OTP
//Generate 4 digit OTP

// let OTP = (Math.random() * 10000).toFixed(0);
let OTP = Math.trunc((Math.random() * 10000) + 1000);
console.log(OTP);

// Problem-3 Area of triangle by heron's formula

let j = 7;
let k = 4;
let l = 5
// sqrt of (s * (s - j) * (s - k) * (s - l))

let s = (j + k + l) / 2;
console.log(s);

let area = Math.sqrt(s * (s - j) * (s - k) * (s - l));
console.log(area);


// Problem-4
// calculate the area of the circle
let radius = 7;
let areaOfCircle = (Number((Math.PI * radius * radius).toFixed(2)));
console.log("Area of circle is:", areaOfCircle);
console.log("The type of the area of circle is :", typeof (areaOfCircle));
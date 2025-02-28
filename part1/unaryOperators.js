//first use the value then change or update the value
let a = 15;
let b = a++;
console.log(a); //16
console.log(b);  //15


//first change the value then use the update or changed  value 
let c = 3;
let d = ++c;
console.log(c); //4
console.log(d); //4 

//Problems1
let i = 11;
i = i++ + ++i;  //11 +13
console.log(i); //24

//Problems-2
let e = 11, f = 22;
let g = e + f + e++ + f++ + ++e + ++f;  // g=11 + 22 + 11 + 22 + 13 +24 =103, e = 13, f = 24
console.log('e=' + e); // 13
console.log('f=' + f); // 24
console.log('g=' + g); // 103 


//Problems-3
let b1 = true; //true=1 , false=0
b1++; //1++=1+1=2 , 0++=0+1=1
console.log(b1);  //2 ,1

//Problems-4
let a1 = 12++;
console.log(a1); //error ,we can't use increment or decrement operator with constant value


//Problems-5
let i1 = 23;
let i2 = ++(i1++);  //++23 same as above condition
console.log(i2);

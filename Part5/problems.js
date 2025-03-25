//Q1.Print each characters on new line
// let array = [10, 20, 30, 40, 50];
let array = "Manoj Chand";
for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
  console.log(array.charAt(i));
}

// from the last character to first
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array.charAt(i));
}

//Q2. Print each character in reverse order
let rev = "";
for (let j = array.length - 1; j >= 0; j--) {
  rev = rev + array.charAt(j);
}
console.log(rev);

//Q3. Check if string is pallindrome or not
//madam , dad,mom, naman,level

let checkPallidrome = "madam";
let rev1 = '';

for (let k = checkPallidrome.length - 1; k >= 0; k--) {
  rev1 = rev1 + checkPallidrome.charAt(k);

}
if (rev1 == checkPallidrome) {
  console.log("String is pallindrome");
} else {
  console.log("String is not a pallindrome");
}

//Another version of code for code optimization

let isPallindrome = "level";
let i = 0, j = isPallindrome.length - 1;
while (i < j) {
  if (isPallindrome.charAt(i) != isPallindrome.charAt(j)) {
    isPallindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPallindrome) {
  console.log("The string is a pallindrome");
} else {
  console.log("The string is not a pallindrome");
}


//Q4. Toggle each characters in the string  
//mAnoJ cHanD tHaQuReE

let s = "mAnoJ cHanD tHaQuReE";

let toggle = '';
for (let l = 0; l < s.length - 1; l++) {
  let ch = s.charAt(l);

  if (s.charCodeAt(l) >= 65 && s.charCodeAt(l) <= 90) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(l) + 32);
  } else if (s.charCodeAt(l) >= 97 && s.charCodeAt(l) <= 122) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(l) - 32);
  }
}
console.log(toggle);


// do-while loop
let i = 1;
do {
  console.log(` Hello ${i}`);  //one iteration will always print if the condition false also. 
  i++;

}
while (i < 10);

//repeat hello until user write zero



//Guess the number 

let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;
while (guess !== random) {

  guess = Number(prompt("Guess the number between 1 to 100 "));
  if (isNaN((guess) || guess < 1 || guess > 100)) {
    console.log("Try again between 1 and 100 ");
    continue;
  }
  if (guess > random) {
    console.log("too high,try again")
  }
  else if (guess < random) {
    console.log("Too low, try again")
  }
  else {
    console.log("Congrats a guess number is", guess);
  }

}
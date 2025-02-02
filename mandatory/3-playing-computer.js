/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?

----------------------------------------------------------------------------------------------------
Answers :

  1. b has not been defined line 34
  2. Commented out line 45
  3. 2, 6, 4, 9, 6, 13, 8
  4. Twice (1st output is 9, 2nd is 13) 
  5. 3 times (1st output 4, 2nd is 6, 3rd is 8)
  6. 1 as "a" takes value of i, which is a counter
  7. a=8



  */

let x = 2;
let a = 6;
// b is not defined
const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
//console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

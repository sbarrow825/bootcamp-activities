var a = process.argv[2];
var b = process.argv[3];
console.log(process.argv);
// using a conditional statement
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

//using a ternary operator
console.log(a === b ? "meow" : "bark")

//comparing variables
console.log(a === b);

//comparing argument values directly
console.log(process.argv[2] === process.argv[3]);

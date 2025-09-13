// function myNewCode() {
//   console.log("Hello, World!");
//   return "Hello, World!";
//   console.log("Hello, World!"); // unreachable code
// }
// myNewCode()

// function addTwoNumbers(num1, ...num2) {
//   return num1 + num2;
// }
// const sum = addTwoNumbers(4, 5, 5, 6, 7, 8, 9);
// console.log(sum);44\


const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
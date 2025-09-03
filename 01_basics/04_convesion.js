let score = true

console.log(typeof score);
score = 34
console.log(typeof score);

let valueNumber = Number(score)
console.log(typeof valueNumber);
//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0
//null => 0
//undefined => NaN

let isLoggedIn = Boolean(1) // 0, "", null, undefined, NaN => false
console.log(isLoggedIn);
let someString = String(123)
console.log(someString);
console.log(typeof someString);
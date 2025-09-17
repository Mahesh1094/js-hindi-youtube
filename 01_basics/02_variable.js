const accountId = 12345;
let accountEmail = "maheshfunde@gmail.com";
var accountPassword = "12345";

accountEmail = "abcd@gmail.com";
accountCity = "Pune";

/*
Prefer not to use var for variable declarion
because issue with block scope and functional scope

Use const by default unless you know that value will change
Use let if the value of variable needs to be changed

Never use var again for variable declaration

n
*/
accountPassword = "54321";
console.log(accountId);
accountCity = "Mumbai";
console.log(accountEmail);
console.log(accountCity);
//console.table({ accountId, accountEmail, accountPassword, accountCity });
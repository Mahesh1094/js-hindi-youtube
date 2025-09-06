const name = "mahesh";
const repo = 'github.com/mahesh';
console.log(name);
const fullName = (`my full name is ${name} and repo is ${repo}`);
console.log(fullName);

const gameName = new String("cricket");
console.log(gameName);

console.log(name.length);   
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));


const antherString = gameName.substring(0,3);   
console.log(antherString);
const antherString2 = gameName.slice(4,3);   
console.log(antherString2);

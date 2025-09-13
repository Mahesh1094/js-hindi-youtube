//array

const arr = [1, 2, 3, 4, "mahesh"];

// const myHeros = ["mahesh", "vijay", "raje", "karmala"];
// console.log(myHeros);
// console.log(myHeros[2]);
// myHeros[0] = "babu";
// console.log(myHeros);|

const marvelHeros = ["spiderMan", "ironMan", "thor"];
const dcHeros = ["superman", "batman", "flash"];

const allHeros = [...marvelHeros, ...dcHeros];
console.log(allHeros);

marvelHeros.push("hulk");
console.log(marvelHeros);

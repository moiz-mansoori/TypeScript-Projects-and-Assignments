// More Conditional Tests 

let str1: string = 'hello';
let str2: string = 'world';

console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str1 != 'world'? I predict True.");
console.log(str1 != 'world');

console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);

console.log("Is str1.toLowerCase() == 'hello'? I predict True.");
console.log(str1.toLowerCase() == 'hello');

console.log("Is str1.toUpperCase() == 'HELLO'? I predict True.");
console.log(str1.toUpperCase() == 'HELLO');

console.log("Is 10 == 10? I predict True.");
console.log(10 == 10);

console.log("Is 10 != 5? I predict True.");
console.log(10 != 5);

console.log("Is 10 > 5? I predict True.");
console.log(10 > 5);

console.log("Is 10 < 5? I predict False.");
console.log(10 < 5);

console.log("Is 10 >= 10? I predict True.");
console.log(10 >= 10);

console.log("Is 10 <= 5? I predict False.");
console.log(10 <= 5);

console.log("Is 10 > 5 && 10 < 20? I predict True.");
console.log(10 > 5 && 10 < 20);

console.log("Is 10 > 15 || 10 < 20? I predict True.");
console.log(10 > 15 || 10 < 20);

let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));

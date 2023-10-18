const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

numbers.splice(2, 3, 23, 24, 25);

const num2 = numbers.slice(0, 3)

console.log(numbers);
console.log(num2);
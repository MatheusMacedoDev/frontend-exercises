const numbers = [4, 2, 3, 4, 56, 4, 8394, 3, 22, 10];

const k = numbers.filter(n => {
    return n < 10;
}).sort();

console.log(k);
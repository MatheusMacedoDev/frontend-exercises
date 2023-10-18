const sum = (...arr) => {
    let total = 0;

    for(const item of arr) 
        total += item;

    return total;
}

function s(a, b, c) {

}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(s.length, sum.name);
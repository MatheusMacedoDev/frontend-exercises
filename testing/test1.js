function* fatorial(limit) {
    let number = 1;

    yield number;

    while(number * 2 <= limit) {
        yield number += number;
    }
}

const f = fatorial(130);

for (let i = 0; i < 10; i++) {
    console.log(f.next().value);
}
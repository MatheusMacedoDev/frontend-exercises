function* logGenerator() {
    while (true)
        console.log(yield);
}

const gen = logGenerator();

gen.next();
gen.next("KKKK");
gen.next("KAKA");
gen.next("RSRS");
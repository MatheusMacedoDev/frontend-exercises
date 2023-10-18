const names = ["Matheus", "Sarah"];
const surnames = ["Macedo", "Gomes"];

const completeNames = names.map((name, index) => `${name} ${surnames[index]}`)

completeNames.forEach(name => console.log(name));
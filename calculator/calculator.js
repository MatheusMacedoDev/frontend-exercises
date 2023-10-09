const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

function calculate() {
    event.preventDefault();

    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const operator = document.querySelector("#operator").value;

    let result = document.createElement("p");
    document.body.appendChild(result);


    let r = 0;

    switch(operator) {
        case "+":
            r = sum(n1, n2);
            break;
        case "-":
            r = sub(n1, n2);
            break;
        case "*":
            r = mul(n1, n2);
            break;
        case "/":
            r = div(n1, n2);
            break;
        default:
            alert("Invalid input");
            return;
    }
    
    result.innerHTML = `Resultado: ${r}`;
}
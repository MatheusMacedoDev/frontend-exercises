const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

function calculate() {
    event.preventDefault();

    const n1 = parseInt(document.querySelector("#n1").value);
    const n2 = parseInt(document.querySelector("#n2").value);
    const operator = document.querySelector("#operator").value;

    let result = document.createElement("p");
    document.body.appendChild(result);

    console.log(n1 + " " + n2);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite dados válidos")
        return;
    }

    let r;

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
            if (n2 == 0) {
                r = "Valor indefinido (infinito)";
                break;
            }

            r = div(n1, n2);
            break;
        default:
            alert("Invalid input");
            return;
    }
    
    result.innerHTML = `Resultado: ${r}`;
}
let button = document.querySelector("#button");
let count = 1;

button.onclick = () => {
    let name = document.querySelector("#name").value;
    console.log(name);
}

function gretting() {
    count++;
    alert(`${(2 + 5) * 3}`);

    console.log(count);
}
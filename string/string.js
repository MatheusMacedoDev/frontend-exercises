const form = document.querySelector("#my-form");

let name, nickname;

form.addEventListener("submit", event => {
    event.preventDefault();

    name = document.querySelector("#name").value;
    nickname = document.querySelector("#nickname").value;

    const text = document.createElement("p");
    text.innerText = `Bem vindo, ${name}`;
    document.body.appendChild(text);

    const button = document.createElement("button");
    button.innerText = "Change to nickname";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
        text.innerText = text.innerText.replace(name, nickname);
    })
})
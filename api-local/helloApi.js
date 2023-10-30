const viaCepUrl = 'https://viacep.com.br/ws';
const urlProfessor = 'http://172.16.35.155:3000/myceps';

const spanError = document.createElement('span');
document.body.appendChild(spanError);

const cadastrar = async event => {
    event.preventDefault();
    
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const cep = document.querySelector('#cep').value.trim();
    const estado = document.querySelector('#estado').value.trim();
    const cidade = document.querySelector('#cidade').value.trim();
    const bairro = document.querySelector('#bairro').value.trim();
    const logradouro = document.querySelector('#logradouro').value.trim();
    const numero = document.querySelector('#numero').value.trim();

    // extra - fazer validação

    if(!validation(nome, email, cep)) {
        alert('Dados inválidos!');
        return;
    }

    const promise = await fetch('http://172.16.35.155:3000/contatos', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email, 
            cep,
            estado, 
            cidade, 
            bairro, 
            logradouro,
            numero
        })
    });
    const data = await promise.json();

    console.log(data);
}

const validation = (nome, email, cep) => {
    if (!nome || !email || !cep) {
        return false;
    }

    if (cep.lenght !== 8) 
        return false;

    return true;
}

const buscarCep = async event => {
    const stateInput = document.querySelector('#estado');
    const cityInput = document.querySelector('#cidade');
    const logradouroInput = document.querySelector('#logradouro');
    const bairroInput = document.querySelector('#bairro');

    const cep = event.target.value;
    const resource = `/${cep}/json`;
    
    if (!cep.trim()) {
        return;
    }

    try {
        // const promise = await fetch(viaCepUrl + resource);
        const promise = await fetch(`${urlProfessor}/${cep}`)
        const object = await promise.json()
        console.log(object);
        
        stateInput.value = object.uf; 
        cityInput.value = object.localidade; 
        logradouroInput.value = object.logradouro;
        bairroInput.value = object.bairro;

        spanError.innerText = '';
    } catch(err) {
        spanError.innerText = 'Not Found';
        
        console.log(err);
    }
}

document.querySelector('form').addEventListener('submit', cadastrar);
document.querySelector('#cep').addEventListener('blur', buscarCep);
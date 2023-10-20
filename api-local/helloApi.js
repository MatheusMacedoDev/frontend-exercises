const viaCepUrl = 'https://viacep.com.br/ws'

const spanError = document.createElement('span');
document.body.appendChild(spanError);

const cadastrar = event => {
    event.preventDefault();
    alert('Cadastrando...');
}

const buscarCep = async event => {
    const stateInput = document.querySelector('#estado');
    const cityInput = document.querySelector('#cidade');
    const logradouroInput = document.querySelector('#logradouro');
    const bairroInput = document.querySelector('#bairro');

    const cep = event.target.value;
    const resource = `/${cep}/json`;
    
    try {
        const promise = await fetch(viaCepUrl + resource);
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
fetch('https://viacep.com.br/ws/09321270/json/')
    .then(response => response.json())
    .then(( { uf } ) => console.log(uf))
    .catch(msg => console.log(msg));
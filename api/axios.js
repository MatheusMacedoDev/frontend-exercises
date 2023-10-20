const axios = require('axios');

const url = 'https://viacep.com.br/ws/09321270/json/'; 

axios.get(url)
    .then((response) => {
        console.log(response.data);
    }).catch((err) => {
        console.log(err);
    });
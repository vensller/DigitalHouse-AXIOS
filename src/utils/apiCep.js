const axios = require('axios');

const api = axios.create({
    baseURL: 'https://viacep.com.br',
    timeout: 5000
});

module.exports = api;
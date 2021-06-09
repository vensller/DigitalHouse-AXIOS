const api = require('../utils/apiCep');

const url = '/ws';

async function buscarCep(cep) {
    const response = await api.get(`${url}/${cep}/json`);
    return response.data;
}

module.exports = {
    buscarCep,
}
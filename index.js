const buscaCep = require('./src/requests/buscaCep');

async function run() {   
    const endereco = await buscaCep.buscarCep('89080440');
    console.log(endereco);
}

run();
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

function chineses(f){
    return f.pais === 'China'
}

function mulheres (f) {
    return f.genero === 'F'
}

function menorSalario(func, funcAtual) {
    return func.salario < funcAtual.salario ? func : funcAtual
}

/*
FUNCIONAMENTO FUÇÃO ARROW DENTRO DOS PARENTESES
const chineses(DECLARAÇÃO DA FUNÇÃO) = f(PARAMETROS) => f.pais === 'China'(RETORNO DA FUNÇÃO)
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}*/

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //MULHER CHINESA COM MENOR SALÁRIO
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

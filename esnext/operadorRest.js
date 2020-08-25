//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12000.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Bruna']
const grupoFinal = ['Maria', ...grupoA, 'Tony']
console.log(grupoFinal)
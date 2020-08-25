const aluno = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]
console.log(aluno)
//Imperativo
let total1 = 0
for(let i = 0; i < aluno.length; i++) {
    total1 += aluno[i].nota
    console.log(aluno.nome)
}

console.log(total1 / aluno.lenght)

console.log(aluno)

//declarati
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual

const total2 = aluno.map(getNota).reduce(soma)
console.log(total2 / aluno.length)
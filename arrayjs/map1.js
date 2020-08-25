const nums = [1, 2, 3, 4, 5]

//FOR COM PROPOSITO
let resultodo = nums.map(function(e){
    return e * 2
})

console.log(resultodo)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`

resultodo = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultodo)
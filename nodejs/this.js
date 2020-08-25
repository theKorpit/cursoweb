console.log(this === exports)
console.log(this === module.exports)
console.log(this === global)

function logThis() {
    console.log('Dentro da função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()
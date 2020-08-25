const fs = require('fs')

const caminho  = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono
fs.readFileSync(caminho, 'utf-8', (err, conteudo) => {
    const config  = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//LER A PASTA
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdos da pasta')
    console.log(arquivos)
})
// Desafio de ler o arquivo dados.txt com uma promise

// Usando a biblioteca do node chamada "file system"
const fs = require('fs')
// Biblioteca path do node, para pegar caminho de arquivos
const path = require('path')

// Juntando o caminho atual do arquivo com o caminho do arquivo dados.txt
const caminho = path.join(__dirname, 'dados.txt')

function exibeConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log("Depois")
    })
}

exibeConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linha => linha.join(', '))
    .then(conteudo => `O texto final é: ${conteudo}`)
    .then(console.log)
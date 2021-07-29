// Usando a biblioteca do node chamada "file system"
const fs = require('fs')
// Biblioteca path do node, para pegar caminho de arquivos
const path = require('path')

// Juntando o caminho atual do arquivo com o caminho do arquivo dados.txt
const caminho = path.join(__dirname, 'dados.txt')

// Função para exibir o conteúdo do arquivo dados.txt
function exibeConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

// Implementando de forma assícrona o readFile
console.log("Início...")

// callback do file system que recebe o caminho do arquivo, um objeto de opções e uma função como parâmetro
fs.readFile(caminho, {}, exibeConteudo)

// Outra forma de implementar a leitura do arquivo
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log("Fim...")

console.log("Início Sync...")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim Sync...")

// console.log(__dirname)
// Array de números
const numbers = [1, 2, 3, 4, 5]

// A função map espera receber 3 parâmetros, o valor, o índice e o array
const tratamentos = (n, i, a) => n * 2 + i + a.length

// console.log(numbers.map(tratamentos))

const nomes = ['Lucas', 'Marcos', 'Ana', 'Maria']

// Pegando a primeira letra do nome
const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)

// O array original permanece o mesmo
// console.log(nomes, letras)

const carrinho = [{
        nome: 'Caneta',
        qtd: 2,
        preco: 2.99
    },
    {
        nome: 'Mouse',
        qtd: 1,
        preco: 79.90
    },
    {
        nome: 'Teclado',
        qtd: 1,
        preco: 57.95
    },
    {
        nome: 'TV 4K',
        qtd: 0,
        preco: 4.999
    },
    {
        nome: 'Impressora',
        qtd: 1,
        preco: 299.90
    },
    {
        nome: 'Caderno',
        qtd: 4,
        preco: 15.99
    }
]

// Função para pegar somente os nomes do array de objetos carrinho
const getNomes = el => el.nome

// Função para pegar o resultado da multiplicação da qtd * preco do carrinho
const getResult = el => el.qtd * el.preco

// Passando a função getResult como parâmetro para o map e atribuindo o resultado para o total
const total = carrinho.map(getResult)

console.log(carrinho.map(getNomes))
console.log(total)

// Criando uma nova função que simula o funcionamento do map do JS, utilizando o prototype
Array.prototype.meuMap = function (fn) {
    // Variável para armazenar o novo array que será gerado
    const novoArray = []
    // Laço de repitação que irá varrer o array, nesse cenário o this corresponde a esse array
    for (let i = 0; i < this.length; i++) {
        // O novo array terá os novos valores sendo inseridos nele, onde ele irá receber essa nova função como parâmetro
        novoArray.push(fn(this[i], i, this))
    }
    // Retornando esse novo array que foi gerado
    return novoArray
}

// Obtendo o mesmo resultado do map, porém implementado com o meu array que foi criado com o prototype
console.log(carrinho.meuMap(getNomes))
console.log(carrinho.meuMap(getResult))
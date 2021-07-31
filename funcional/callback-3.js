// Array de números
const numbers = [1, 2, 3, 4, 5]

// A função map espera receber 3 parâmetros, o valor, o índice e o array
const tratamentos = (n, i, a) => n * 2 + i + a.length

console.log(numbers.map(tratamentos))

const nomes = ['Lucas', 'Marcos', 'Ana', 'Maria']

// Pegando a primeira letra do nome
const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)

// O array original permanece o mesmo
console.log(nomes, letras)

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

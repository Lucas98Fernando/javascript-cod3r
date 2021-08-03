// Array de objetos
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
        preco: 4999
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

// Pega os items com quantidade maior que 0
const itemsValidos = item => item.qtd > 0

// Soma do items de cada objeto dentro do array 
const getValoresCarrinho = item => item.qtd * item.preco

// Valor total
const totalCarrinho = (total, item) => total + item

console.log(carrinho.filter(itemsValidos).map(getValoresCarrinho).reduce(totalCarrinho))

Array.prototype.meuReduce = function (fn, inicial) {
    // Caso tenha um valor inicial, o acumulador irá recebé-lo
    let acumulador = inicial
    for (let i = 0; i < this.length; i++) {
        // Se não houver valor inicial e o indíce do array for 0, o acumulador vai receber o primeiro elemento do array
        if (!acumulador && i === 0) {
            acumulador = this[i]
        }
        // Se não, o acumulador recebe uma função
        else {
            acumulador = fn(acumulador, this[i], i, this)
        }
    }
    // Retorna o valor final após de varrer todo o array
    return acumulador
}

// Função com o reduce personalizado
console.log(carrinho.filter(itemsValidos).map(getValoresCarrinho).meuReduce(totalCarrinho))
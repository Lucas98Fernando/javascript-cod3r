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
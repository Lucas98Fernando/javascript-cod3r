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

const getNomeProdutos = item => item.nome

// Método para verificar se a quantidade de um determinado produto é maior que 0
const qtdMaiorQueZero = item => item.qtd > 0

// Utilizando o filter com callback chamando a função qtdMaiorQueZero para trazer somente os produtos filtrados
const itemsValidos = carrinho.filter(qtdMaiorQueZero).map(getNomeProdutos)

console.log(itemsValidos)

// Implementando o fluxo da função filter do JS utilizando o prototype
Array.prototype.meuFilter = function (fn) {
    // O novo array que será gerado
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        // Se a condição passada não função callback for "true", o elemento na posição dentro do array original, será inserido no array resultante
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

console.log(carrinho.meuFilter(qtdMaiorQueZero).map(getNomeProdutos))


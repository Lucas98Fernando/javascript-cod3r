// Array de objetos
const carrinho = [{
        nome: 'Caneta',
        qtd: 2,
        preco: 2.99,
        fragil: false
    },
    {
        nome: 'Mouse',
        qtd: 1,
        preco: 79.90,
        fragil: true
    },
    {
        nome: 'Teclado',
        qtd: 1,
        preco: 57.95,
        fragil: true
    },
    {
        nome: 'TV 4K',
        qtd: 1,
        preco: 4999,
        fragil: true
    },
    {
        nome: 'Impressora',
        qtd: 1,
        preco: 299.90,
        fragil: true
    },
    {
        nome: 'Caderno',
        qtd: 4,
        preco: 15.99,
        fragil: false
    }
]

// filter, map, reduce challenge

// 1. fragil: true
// 2. qtd * preco -> total
// 3. media total

// Primeira implementação

const fragil = item => item.fragil
const getTotal = item => item.qtd * item.preco
const getMedia = ((acc, el) => {
    const novaQtd = acc.qtd + 1
    const novoTotal = acc.total + el
    // console.log(acc, el)
    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal / novaQtd
    }
})
const mediaInicial = {
    qtd: 0,
    total: 0,
    media: 0
}
const mediaTotal = carrinho.filter(fragil).map(getTotal).reduce(getMedia, mediaInicial).media
console.log(`A média foi: ${mediaTotal}`)

// Implementação refatorada :D

// const fragil = item => item.fragil
// const qtdPreco = item => item.qtd * item.preco
// const lengthArray = carrinho.filter(fragil).length
// const somaValores = (acc, el) => acc + el
// const media = carrinho.filter(fragil).map(qtdPreco).reduce(somaValores)
// console.log(`A média foi: ${media / lengthArray}`)
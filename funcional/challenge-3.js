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

// filter, map, reduce challenge

// 1. fragil: true
// 2. qtd * preco -> total
// 3. media total

// Implementação de cálculo de média

// const fragil = item => item.fragil
// const getTotal = item => item.qtd * item.preco
// const getMedia = ((acc, el) => {
//     const novaQtd = acc.qtd + 1
//     const novoTotal = acc.total + el
//     // console.log(acc, el)
//     return {
//         qtd: novaQtd,
//         total: novoTotal,
//         media: novoTotal / novaQtd
//     }
// })
// const mediaInicial = {
//     qtd: 0,
//     total: 0,
//     media: 0
// }
// const mediaTotal = carrinho.filter(fragil).map(getTotal).meuReduce(getMedia, mediaInicial).media
// console.log(`A média foi: ${mediaTotal}`)

// Implementação refatorada :D

const fragil = item => item.fragil
const qtdPreco = item => item.qtd * item.preco
const lengthArray = carrinho.filter(fragil).length
const somaValores = (acc, el) => acc + el
const media = carrinho.filter(fragil).map(qtdPreco).meuReduce(somaValores)
console.log(`A média foi: ${media / lengthArray}`)
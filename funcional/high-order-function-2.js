// Implementação conhecida como curring, voltada para reuso de código
function finalPrice(tax) {
    // A função finalPrice, retorna uma outra função
    return function (price) {
        return price * (1 + tax)
    }
}

// Armazenando a taxa de imposto de uma determinada cidade
const nycFinalPrice = finalPrice(0.875)

// Passando os argumentos para a função finalPrice, onde o valor de nycFinalPrice é uma constante
console.log(nycFinalPrice(12.4))

// Forma alternativa de fazer a mesma coisa
console.log(finalPrice(0.875)(12.4))
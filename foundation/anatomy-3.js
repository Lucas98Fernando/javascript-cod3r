// Function expression
const increment1 = function(n) {
    return n + 1
}

// Arrow functions = Sempre são funções anônimas
const increment2 = (n) => {
    return n + 1
}

// Quando a função arrow tem apenas um argumento, os "()", podem ser removidos
const increment3 = n => {
    return n + 1
}

// Quando a função arrow é escrita em apenas uma linha, não é necessário colocar o "return", pois ele será chamado de forma implícita 
const increment4 = n => n + 1


console.log(increment1(2))
console.log(increment2(5))
console.log(increment3(14))
console.log(increment4(10))

// Arrow function de forma mais "enxuta"
const sum = (a, b) => a + b
console.log(sum(4,4))
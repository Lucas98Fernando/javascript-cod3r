// Geralmente quando uma linguagem aceita Function Expression, ela também aceita o conceito de First Class Function, que possue uma ideia semelhante

const sum = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const division = (a, b) => a / b

const multiplication = (a, b) => a * b

console.log(sum(10, 5))
console.log(subtract(10,5))
console.log(division(10, 5))
console.log(multiplication(10, 5))
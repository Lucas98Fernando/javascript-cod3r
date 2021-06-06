// Anonymous function
(function (a, b, c) {
    return a + b + c
})

// Function expression = Dessa forma é possível atribuir funções a variáveis ou constantes
const sum = function (a, b) {
    return a + b
}

const result = sum(2, 8)
console.log(result)

const anotherSum = sum(5, 20)
console.log(anotherSum)

let x = 3

x = sum
console.log(x(15,30))
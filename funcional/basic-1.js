// Function expression
function sum (a, b = 0) {
    return a + b
}

// console.log(sum(4, 6))

let result = sum(2, 4)
console.log(result)

result = sum(2)
console.log(result)

// Passando mais que 2 parâmetros, será ignorado na hora da execução
result = sum(2, 4, 6, 8)
console.log(result)
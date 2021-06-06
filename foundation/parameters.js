function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) // Saída: 1 2 3
logParams(1, 2, 3) // Saída: 1 2 3
logParams(1, 2) // Saída: 1 2 undefined

// Se não for informado nenhum valor para o parâmetro c, ele assumirá o valor 1
function defaultParam(a, b, c = 1) {
    console.log(a, b, c)
}

defaultParam(4, 9) // Saída: 4 9 1

// sprend/rest, significa que a função receberá vários parâmetros, utilizando os "..."
function logNums(...nums) {
    /* 
    console.log(Array.isArray(nums)) // nums continua sendo um array
    for (let n of nums) {
        console.log(n)
    } 
    */
    // OU
    console.log(nums)
}

logNums(5, 8)

// Somando valores recebidos por parâmetro, onde não se sabe quantos valores seram passados
function sumAll(...nums) {
    let total = 0
    for (n of nums) {
        total += n
    }
    return `Resultado da soma: ${total}`
}

console.log(sumAll(2, 6))
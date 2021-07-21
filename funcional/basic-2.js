function bomDia() {
    console.log("Bom dia !")
}

let boaTarde = function () {
    console.log("Boa tarde !")
}

// Passando uma função para outra função
function executaAlgumaCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    } else {
        console.log("Não é uma função")
    }
}

executaAlgumaCoisa(bomDia)
executaAlgumaCoisa(boaTarde)
executaAlgumaCoisa(45)

// Retornar uma função a partir de uma outra
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potencia34 = potencia(3)(4)
console.log(potencia34)
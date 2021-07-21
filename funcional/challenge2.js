// somar(3)(4)(5)

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

const sum = (a, b) => a + b


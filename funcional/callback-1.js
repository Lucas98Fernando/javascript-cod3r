/*  callback 
    - É passar uma função como parâmetro para outra função e logo em seguida essa função será chamada novamente
    - Tem a ideia de que aconteceu algum evento e a função será chamada de volta
*/

function exec(fn, n1, n2) {
    return fn(n1, n2)
}

const soma = (x, y) => console.log(x + y)
const subtracao = (z, w) => console.log(z - w)
const multiplicacao = (c, d) => (c * d)

exec(soma, 10, 20)
exec(subtracao, 15, 5)

// A função exec irá retornar um resultado que foi atribuído a variável r e exibida no console
const r = exec(multiplicacao, 3, 5)
console.log(r)

// Exemplo de função de callback
setInterval(function () {
    console.log("Loading...")
}, 2000)
// Exemplo de funções callback aninhadas
// setTimeout(function () {
//     console.log("Executando callback 1")

//     setTimeout(function () {
//         console.log("Executando callback 2")

//         setTimeout(function () {
//             console.log("Executando callback 3")
//         }, 2000)
//     }, 2000)
// }, 2000)

// Implementação utilizando promise, é uma forma melhor de compor várias callback em sequência
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando promise")
            resolve() // Chamando o resolve() quer dizer que depois de um determinado tempo, ele irá chamar o .then()
        }, tempo)
    })
}

esperarPor(3000).then(() => esperarPor(3000))
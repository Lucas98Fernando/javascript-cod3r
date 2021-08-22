function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// Funções async retornam uma promise, o código "parece" síncrono, mas é assícrono
async function executar() {
    // O await só pode ser utilizado dentro de funções async, ele serve para pausar a execução da função assíncrona e esperar pela resolução da Promise passada
    await esperarPor(1500)
    console.log("Executando Async/Await 1")

    await esperarPor(1500)
    console.log("Executando Async/Await 2")

    await esperarPor(1500)
    console.log("Executando Async/Await 3")
}

executar()
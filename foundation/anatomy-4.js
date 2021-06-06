// Anonymous function
// Resolvendo o seguinte problema: "Como eu posso chamar uma função anônima, se eu não tenho nenhuma forma de referenciar a mesma ?"
// Usando o conceito de IIFE - Imediately Invoked Function Expression, os argumentos da função são passados logo em seguida, sem a necessidade de atribuir um nome a mesma

(function (a, b, c) {
    let n = 5 // Variável de escopo local
    console.log(`Result: ${a + b + c}`)
    console.log(n)
})(2, 4, 6); // O ";" é obrigatório no final da função nesse caso específico

// Sem argumentos, uma forma bem comum de utilização...
(function () {
    let n = 3 // Variável de escopo local
    console.log(n)
})();

(() => {
    console.log("Arrow function with IIFE '-'")
})();

(() => console.log("Arrow function inline with IIFE '-'"))();
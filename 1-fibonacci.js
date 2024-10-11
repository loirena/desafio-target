const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacciNumber(n) {
    if (n < 0) return false;

    let fib1 = 0, fib2 = 1;

    if (n === fib1 || n === fib2) return true;

    // Calcula a sequência de Fibonacci até que o número seja encontrado ou ultrapassado
    while (fib2 < n) {
        let nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }

    // Verifica se o número informado pertence à sequência
    return n === fib2;
}

rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    let num = parseInt(input);

    if (isFibonacciNumber(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }

    rl.close();
});

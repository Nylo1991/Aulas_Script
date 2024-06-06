 // Entrada de dados do Usuário

 const readline = require('readline');

const ler = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

ler.question("Digite um numero: ", (num1) => {
    ler.question("Digite outro numero: ", (num2) => {
        let soma = Number(num1) + Number(num2);
        console.log("O resultado da soma é " + soma);

        ler.close();
    });
});

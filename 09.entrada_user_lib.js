 // Entrada de dados Utilizando a biblioteca readline-sync

 const ler = require('readline-sync');

 let num1 = ler.questionInt("Digite um numero: ");
 let num2 = ler.questionInt("Digite outro numero: ");

 let soma = num1 + num2;

 console.log("O resultado da soma é: " + soma);
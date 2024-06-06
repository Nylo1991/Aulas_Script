// Entrada if Ternário

const ler = require('readline-sync');

let valor = ler.questionFloat("Informe um valor: ");

var result = valor > 15.99 ? "valor maior que 15.99" : "Valor menor que 15.99";

console.log(result);
// Estrutura de repetição FOR - condicional if else

const ler = require('readline-sync');

const C = 5;
let x = ler.questionInt(" Digite um numero: ");
let cont =C; // criterio de contagem

for (let i = 0; i <= x ; i++) {
    
    console.log(i);
    
    if (i >= cont) {
        let sair = ler.question(" 'Enter' Continuar contando ou 'sair' para finalizar ");
        sair = sair.toLowerCase();
      if (sair === "sair" || i == x) {
        console.log("contagem Finalizada!!!");
        break;
      }
      cont += C; 
    }
}
// capturando dados do usuario e exibindo os dados com while

const ler = require('readline-sync');

let frutas = [];
let check = true;

while (check) {

    let fruta = ler.question("Informe um nome de uma fruta ou Digite 'sair' para finalizar: ").toLowerCase();
    if (fruta === 'sair') {
        check = false;
    } else {
        frutas.push(fruta);
    }
}
console.clear();

console.log("As  frutas cadastradas foram: --------------------------------------------");
for (let i = 0; i < frutas.length; i++) {
   
    console.log(`=> ${frutas[i]}`);
    
}
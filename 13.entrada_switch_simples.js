//Entrada usuario condicional escolha caso (Switch Case)

const ler = require('readline-sync');

console.log("----------------- MENU INICIAL -----------------");
console.log("** Informe o valor do emprestimo: ");
let valor = ler.questionFloat(" => ");

console.clear(); // limpar a tela 

console.clear("---------- Menu OPÇÕES DE PAGAMENTO ----------");
console.log("1. PIX \n 2. DÉBITO \n 3. CRÉDITO \n 4. DINHEIRO");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let result = 0;

switch (opt) {
    case 1:
        result = valor += valor * 0.15; // para dar o desconto no pix 10%
        console.log("PIX acréscimo de 15%");
        console.log(`Realizando o pagamento via PIX o valor ficára em ${result}`);
        break;
    case 2: 
        result = valor += valor * 0.20;
        console.log("DÉBITO Acréscimo de 20%");
        console.log(`Realizando o pagamento no DÉBITO o valor ficára em ${result}`);
        break
    case 3:
        result = valor += valor * 0.30;
        console.log("CRÈDITO acréscimo de 30%");
        console.log(`Realizando o pagamento no CRÉDITO o valor ficára em ${result}`);
        break
    case 4:
        result = valor += valor * 0.10;
        console.log("DINHEIRO acréscimo de 10%");
        console.log(`Realizando o pagamento no DINHEIRO o valor ficára em ${result}`);
        break
    default:
        console.log("Opção invalida!!!");
        break;
}
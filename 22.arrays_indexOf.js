// Arrays - vetores - indice do valor

let nomes = ["Marta","João","Jonas","Maria","Geraldo","Alice"];

const ler = require('readline-sync');

let nome = ler.question("Digite o nome: ");

//let nome = "Jonas";
//console.log(nomes.indexOf(nome));// para aparece a posição do nome jonas (que a posição 2)

let x = nomes.indexOf(nome);

if (x >= 0) {
    console.log(`O nome ${nome} está na posição ${x} no arrays nomes.`); // ex:("O nome" +nome+ "está na posição" + x + "no arrays nomes."");
    
} else {
    console.log(`O nome ${nome} não existe no arrays nomes.`);
}

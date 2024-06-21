//Utilizando arrays bidimensionando - matriz

let numeros = [
     [14, 22, 45, 17],
     [11, 33, 76, 32],
     [43, 21, 19, 20],
     [26, 13, 98, 37],
];

console.table(numeros);// table monta tabela 

console.log(numeros[2][0]);// codernadas para encontrar os numeros na tabela. 1° linha 2° coluna

numeros[3][1] = 41; // substituir um numero pela posição da codernada

console.table(numeros);
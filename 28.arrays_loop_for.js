//Ordenando valores do array com for

let numeros = [12, 34, 51, 11, 78, 41, 23];

//listar os dados do array
for (let i = 0; i < numeros.length; i++) {
    
    console.log(numeros[i]);
    
}

console.log("-----------------------------------");

//listar os dados do array invertido
for (let i = numeros.length -1; i >= 0; i--) {
    
    console.log(numeros[i]);
    
}

console.log("-----------------------------------");

//listar os dadosdo array, pulando alguns dados (posição em par = 0, 2, 4, 6)
for (let i = 0; i < numeros.length; i += 2) {
   
    console.log(`posição: ${i} = ${numeros[i]} `);
    
}
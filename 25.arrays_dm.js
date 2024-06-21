// Arrays Manipulação de dados 

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let numeros = [12, 34, 51, 11, 78, 41, 23]; 

console.log("Exibindo os intens iniciais dos arrays ------");
console.log(animais);
console.log(numeros);

//Adicionar um valor no final do array
animais.push("Coelho");
numeros.push(88);
console.log("Exibindo com novos dados no final dos arrays ------");
console.log(animais);
console.log(numeros);

//Excluir um valor no final do array
animais.pop();
numeros.pop();
console.log("Exibindo os arrays sem os ultimos dados ------");
console.log(animais);
console.log(numeros);

//Acionar um valor no inicio do array
animais.unshift("Jacaré");
numeros.unshift(99);
console.log("Exibindo com novos dados no inicio dos arrays ------");
console.log(animais);
console.log(numeros);

//Excluir valor no inicio do array
animais.shift();
numeros.shift();
console.log("Exibindo os arrays sem os Primeiros dados ------");
console.log(animais);
console.log(numeros);

//Organizar os dados do array em ordem afabéticas
animais.sort();
numeros.sort(); // não se aplica a ordem com numeros de 0 a 9
console.log("Exibindo os arrays em ordem Afabética ------");
console.log(animais);
console.log(numeros);

//Organizar os dados  dos array em ordem contrária
animais.reverse();
numeros.reverse();
console.log("Exibindo os arrays com os dados invertidos ------"); // de tras pra frente
console.log(animais);
console.log(numeros);
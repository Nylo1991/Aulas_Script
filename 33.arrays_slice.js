// repartir e modificar arrays em partes - slice

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let alguns_animais = animais.slice();//(0) o primeiro é onde inicia e o (3)segundo mostra a quantidade

console.log(alguns_animais);

let texto = "Aula de javascript";

let trecho = texto.slice(8, 18); // se aplica o de cima tambem com caracteres para cada letra contando uma por uma

console.log(trecho);
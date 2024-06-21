// excluir e adicionar dados no arrays - SPLICE

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let animais_removidos = animais.splice(2, 3); // excluir

console.log(animais_removidos);

console.log(animais);

console.log("--------------------------------------------------------------");

animais.splice(1, 0, "Urso", "Jácaré", "Esquilo");// aprartir do primeiro ele acrescenta os declarados
console.log(animais);
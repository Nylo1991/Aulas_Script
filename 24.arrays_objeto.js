//Arrays e objetos

//let numeros = {}; //Objeto
//console.log(typeof numeros);

let cliente = {
    nome: "funalo",
    idade: 34
};

//console.log(cliente.nome); //imprimir nome
//console.log(cliente.idade); //imprimir idade

console.log(`O nome: ${cliente.nome} - Idade ${cliente.idade}`);

cliente.telefone = "(31) 98033-0987" //incluir uma nova chave e valor

console.log(`O nome: ${cliente.nome} - Idade: ${cliente.idade} - tel: ${cliente.telefone}`);

delete cliente.idade; // Excluir o valor da chave idade

cliente.nome = "Marta"; //Atualizar o valor setano(substituindo) a chave correspondente


console.log(`O nome: ${cliente.nome} - Idade: ${cliente.idade} - tel: ${cliente.telefone}`);



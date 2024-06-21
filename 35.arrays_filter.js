// Filtrar Elemento dentro de um array

let nomes = ["Marta","João","Jonas","Maria","Geraldo","Alice"];

let numeros = [12, 34, 51, 11, 78, 41, 23];

let usuarios = [
    {nome: "Marta Rocha", idade:46, email: "marta@gmail.com"},
    {nome: "Marcos Sena", idade:24, email: "marcos@outlook.com"},
    {nome: "Luiza silva", idade:19, email: "lulu2015@gmail.com"},
    {nome: "Jonas Maia", idade:21, email: "jonas@hotmail.com"},
    {nome: "Ricardo Souza", idade:31, email: "ricardo@gmail.com"},
];

let filter_nome = nomes.filter(nome => nome.toLowerCase().includes('j'));
console.log(filter_nome);

let filtrar_nums = numeros.filter(num => num > 15);
console.log(filtrar_nums);

let Filtrar_idade = usuarios.filter(user => user.idade > 21);
console.table(Filtrar_idade);
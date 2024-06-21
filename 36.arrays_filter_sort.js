let nomes = ["Ziraldo", "Bruna", "Jonas", "Maria", "Geralda", "Alice"];

let numeros = [12, 34, 5, 51, 11, 78, 7, 41, 23, 2];

let usuarios = [
    { nome: "Marta Rocha", idade: 46, email: "marta@gmail.com" },
    { nome: "Marcos Sena", idade: 24, email: "marcos@outlook.com" },
    { nome: "Luiza silva", idade: 19, email: "lulu2015@gmail.com" },
    { nome: "Jonas Maia", idade: 21, email: "jonas@hotmail.com" },
    { nome: "Ricardo Souza", idade: 31, email: "ricardo@gmail.com" },
];

// Ordenação alfabética de nomes
let ordem_alfa = nomes.sort((a, b) => a.localeCompare(b));
console.log(ordem_alfa);

// Ordenação crescente de números
let ordem_cres = numeros.sort((x, y) => x - y);
console.log(ordem_cres);

// Ordenação decrescente de números
let ordem_desc = numeros.sort((x, y) => y - x);
console.log(ordem_desc);

// Ordenação de usuários por nome em ordem alfabética
let users_alfa = usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.table(users_alfa);

// Ordenação de usuários por idade em ordem crescente
let users_idade_cresc = usuarios.sort((x, y) => x.idade - y.idade);
console.table(users_idade_cresc);


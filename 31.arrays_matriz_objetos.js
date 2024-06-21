//Utilizando arrays bidimensionando - matriz objeto

let usuarios = [
    {nome: "Marta Rocha", idade:46, email: "marta@gmail.com"},
    {nome: "Marcos Sena", idade:24, email: "marcos@outlook.com"},
    {nome: "Luiza silva", idade:19, email: "lulu2015@gmail.com"},
    {nome: "Jonas Maia", idade:21, email: "jonas@hotmail.com"}
];

console.table(usuarios);

console.log(usuarios[1].nome); // chama linha ex marcos sena (só mostrando o nome)
console.log(usuarios[3]); // chama a linha toda

usuarios.push({nome: "Rógerio Matis", idade:22, email: "roger@hotmail.com"});// acrescenta mais um usuario na tabela

console.table(usuarios);
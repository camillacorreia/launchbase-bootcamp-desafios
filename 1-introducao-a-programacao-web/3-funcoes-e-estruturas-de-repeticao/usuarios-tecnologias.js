const usuarios = [
    { nome: "Camilla", tecnologias: ["HTML", "CSS"] },
    { nome: "Marcos", tecnologias: ["JavaScript", "CSS"] },
    { nome: "John", tecnologias: ["React Native", "NodeJS"] }
];


for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
}
const programadorx = {
    nome: 'Camilla',
    idade: 19,
    tecnologia: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "JavaScript", especialidade: "Web/Mobile" },
      { nome: "SQLite", especialidade: "Banco de Dados" }
    ]
};

console.log(`O usuário ${programadorx.nome} tem ${programadorx.idade} anos e usa a tecnologia ${programadorx.tecnologia[1].nome} com especialidade em ${programadorx.tecnologia[1].especialidade}.`);
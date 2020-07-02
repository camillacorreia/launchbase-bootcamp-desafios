const usuarios = [
    { nome: "Camilla", tecnologias: ["HTML", "CSS"] },
    { nome: "Marcos", tecnologias: ["JavaScript", "CSS"] },
    { nome: "John", tecnologias: ["React Native", "NodeJS"] }
];


function checaSeUsuarioUsaCSS(usuario) {
    let usuarioUsaCSS = false;
    
    for (let tecnologia of usuario.tecnologias) {
      if (tecnologia === 'CSS') {
        usuarioUsaCSS = true;
      }
    }
  
    return usuarioUsaCSS;
}

for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
}
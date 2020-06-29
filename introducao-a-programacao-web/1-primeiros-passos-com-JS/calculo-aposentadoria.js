const nome = 'Camilla';
const sexo = 'F';
const idade = 19;
const contribuicao = 0;

const somaContribuicao = idade + contribuicao;

if (sexo === 'F') {
  if (contribuicao >= 30 && somaContribuicao >= 85 ) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else {
  if (contribuicao >= 35 && somaContribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}
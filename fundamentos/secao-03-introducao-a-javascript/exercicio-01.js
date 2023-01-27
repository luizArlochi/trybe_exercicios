//   parte 1

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()
  
//   parte 2

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna';
  pessoa.idade = 19
  
  // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

//   parte 3

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

//  parte 4
const numeroAleatorio =() => Math.random()
  console.log(numeroAleatorio());

//  parte 5
const hello = (nome) => `Olá, ${nome}!`
  let nome = 'Ivan';
  console.log(hello(nome));

//  parte 6
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

//parte 7

let speed = 90;
const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);

console.log(speedCar(speed));
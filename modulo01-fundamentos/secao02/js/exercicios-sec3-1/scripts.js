/*
myName = 'Samuel Henrique Bertolini Deotti';
birthCity = 'Realeza-PR';
birthYear = 2003;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

*/

/*
base = 5
height = 8
area = base * height
perimeter = base + base + height + height
console.log(area)
console.log(perimeter)
*/

/*
nota = 80


if (nota < 60) {
    console.log('Infelizmente, você reprovou.')
}
else if (nota < 80) {
    console.log('Você está na nossa lista de espera.')
}
else{
    console.log('Parabéns, voce faz parte do grupo de pessoas aprovadas!')
}
*/

/*
currentHour = 21
message = ''

if (4 < currentHour && currentHour < 11){
    message = 'Hmmm, cheiro de café recém-passado'
}
else if (currentHour <= 14){
    message = 'Hora do almoço!!!'
}
else if (currentHour <= 18){
    message = 'Vamos fazer um bolo pro café da tarde?'
}
else if (currentHour <= 22){
    message = 'Rango da noite, vamos jantar :D'
}
else{
    message = 'Não deveríamos comer nada, é hora de dormir'
}
console.log(message)
*/

/*
weekDay = 'sabado'
if (weekDay !== 'sabado' && weekDay !== 'domingo') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}
else{
    console.log('FINALMENTE, descanso merecido! UwU!')
}
*/


/*
// aqui deveria funcionar melhor com um input
pessoa = undefined

switch(pessoa) {
    case 'aprovada':
      console.log("Parabéns, você está no grupo de pessoas aprovadas!")
      break
    case 'lista':
      console.log("Você está na nossa lista de espera.")
      break
    case 'reprovada':
      console.log("Infelizmente, você reprovou.")
      break
    default:
      console.log("Informação incorreta.")
  }
*/
/*
let a = 10
let b = 5

console.log('Soma: ' + (a + b))
console.log('Subtração: ' + (a - b))
console.log('Multiplicação: ' + (a * b))
console.log('Divisão: ' + (a / b))
console.log('Módulo: ' + (a % b))
*/

/*
let a = 10
let b = 20

if(a > b){
    console.log('a é maior que b')
}
else{
    console.log('b é maior que a')
}
*/


/*
let a = 3
let b = 1
let c = 5

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)')
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)')
} else {
  console.log('O maior número é: ' + c + ' (c)')
}
*/

/*
let num = 1

if(num > 0){
    console.log('é um número positivo')
}
else if(num == 0){
    console.log('O número é zero')
}

else{
    console.log('é um número negativo')
}

*/
/*
let angA = -3
let angB = 5
let angC = 3

soma = angA + angB + angC

if (angA < 0 || angB < 0 || angC < 0) {
    console.log('Erro')
}
else if (angA == angB && angB == angC && soma == 180) {
    console.log(true)
}
else{
    console.log(false)
}
*/

/*
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};
*/

/*
let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
*/

/*
let a = 1
let b = 2
let c = 3

if(a % 2 == 0 || b || 2 === 0 || c % 2 === 0){
    console.log(true)
}
else{
    console.log(false)
}
*/

/*
let custo = 10
let valorVenda = 20

lucro = (valorVenda - (custo * 1.2)) * 1000

console.log(lucro)
if (custo === 0 || valorVenda === 0) {
    console.log('ERRO! Os valores apresentados devem ser maiores que 0')
}
*/
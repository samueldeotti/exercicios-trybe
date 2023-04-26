/* 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
 */


/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portifolio'); // procura o indice no vetor

console.log(indexOfPortfolio); 
*/

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

// Imprime bonito o vetor
for (indice in menu){
    console.log(menu[indice])

} */

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index])
} 
*/


/* 
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
} 

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//for (indice in numeros){  // faz a mesma coisa que esse de cima
//    console.log(numeros[indice])
//}

//let word = 'Hello' 
//for (indice in word){ // faz a mesma coisa que esse de cima
//    console.log(word[indice])
//}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
 

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name)
}
*/

// while(1){
// Deixa o codigo funcionando ate retornar false ou break
// }

/* let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado); 
*/

/* //exercicio01

let numbers = [102, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media = 0
mai = 0
men = 0
imp = 0

for (let indice of numbers){
  console.log(indice)
  soma += indice
  if (indice % 2 !== 0) {
    imp ++
  }

}
media = soma/numbers.length
console.log('A soma dos valores é de %d', soma)
console.log('A média aritimética é de %d', media)

if (media > 20) {
  console.log('O valor da média aritmética é maior que 20')
}
else{
  console.log('O valor da média aritmética é menor ou igual a 20')
}

for (let i = 0; i < numbers.length; i++) {
  if (i == 0) {
    mai = numbers[i]
    men = numbers[i]
  }
  else{
    if (numbers[i] > mai) {
      mai = numbers[i]
    }
    else if (numbers[i] < men){
      men = numbers[i]
    }
  }
}
console.log('O maior número do array é o %d', mai)
console.log('O menor número do array é o %d', men)

if (imp > 0) {
  console.log('A quantidade de impares foi de %d', imp)
}
else{
  console.log('Nenhum valor ímpar encontrado')
}

for (let i = 1; i <= 25; i++) {
  console.log('O número %d dividido por 2 é igual a: %d', i, i/2);
} 
*/
/*
//exercicio 02

fat = 5
res = 1

for (let i = fat; i > 0; i--) {
  res *= i
  
}
console.log('O resultado do fatorial é de %d', res)
 */

//exercicio 03
/* let word = 'tryber';
newString = ''

for (let i = word.length -1; i >= 0; i--) {
  newString += word[i] 
}
console.log(newString) 
*/


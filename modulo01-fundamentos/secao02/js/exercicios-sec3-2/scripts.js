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

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);


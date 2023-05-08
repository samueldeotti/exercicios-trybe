// OBJETOS

/* let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('A jogadora %s %s tem %d de idade', player.name, player.lastName, player.age)

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora %s %s foi eleita a melhor do mundo %d vezes', player.name, player.lastName, player['bestInTheWorld'].length)

console.log('A jogadora possui %d medalhas de ouro e %d medalhas de prata', player.medals.golden, player.medals.silver) */

/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (const key in names) {
    console.log('Olá, %s', names[key]) // mostra os valores
} */

/* let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    console.log(key, car[key])  // vai mostrar a chave, e depois mostra os valores
} */


/* let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, 'nome', 'Jose da Silva');
addProperty(student, 'email', 'jose@email.com');
addProperty(student, 'telefone', '12 3456 7890');
addProperty(student, 'github', 'github.com/');
addProperty(student, 'linkedIn', 'linkedin.com/');

console.table(student) // mostra o objeto em forma de tabela
 */

/* let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries); // .keyvalue pega todas as chaves
  console.log(pairKeyValue);                    // .value pega todos os valores
                                                // .entries retorna um array onde cada item é um array que dentro dele possui a chave e o valor de um item
                                                // Object.assign faz uma copia, incrmenta, ou substitui itens dentro do objeto, o primeiro item do parametro é o destino de origem, em seguida vem o objeto que voce quer adicionar nesse destino. Object.assign(destino, objeto)
  
  
  for(index in pairKeyValue) {                  
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  }; */

/*   let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person); */


/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é: 

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-Vinda, %s', info.personagem)
*/

/* 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

info['recorrente'] = 'Sim'
console.log(info)
*/

/* 3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é: 

for (const key in info) {
  console.log(key)  
}
*/

/* 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:
for (const key in info) {
  console.log(info[key])  
}
*/

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
 

info.personagem = info.personagem + ' e Tio Patinhas'
info.origem = info.origem + " e Christmas on Bear Mountain, Dell's Four Color Comics"
info.nota = info.nota + ' e O último MacPatinhas', 
info.recorrente = 'Ambos recorrentes'

console.log(info)
*/


/* let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

/* 1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. 

console.log('O livro favorito de %s %s se chama %s', leitor.nome, leitor.sobrenome, leitor.livrosFavoritos[0].titulo) */
/* 
2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações: 
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

 leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
); */



/* 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código. /* 

console.log('Julia tem %d livros favoritos, em que %d corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código', leitor['livrosFavoritos']. length, leitor['livrosFavoritos']. length) */


/* let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  console.log('Olá, %s, entrega para: %s, Telefone: %s, Endereço: %s, N: %s, Ap: %s', order.order.delivery.deliveryPerson, order.name, order.phoneNumber, order.address.street, order.address.number, order.address.apartment)
}

customerInfo(order);

function orderModifier(order) {
  console.log('Olá, %s, o valor total de seu pedido de %s, %s é R$ %d.', order.order.delivery.deliveryPerson, Object.keys(order.order.pizza,[0]), order.order.drinks.coke.type, order.payment.total)
}

orderModifier(order); */
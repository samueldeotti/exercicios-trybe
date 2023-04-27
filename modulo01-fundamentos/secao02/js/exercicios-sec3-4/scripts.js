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
    console.log('Olá, %s', names[key]) 
} */

/* let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    console.log(key, car[key]) 
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

console.table(student)
 */

/* let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);

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
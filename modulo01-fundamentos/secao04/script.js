const body = document.querySelector('body');

const h1 = document.createElement('h1'); 
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1);

const main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main)

const section = document.createElement('section');
section.classList.add('center-content');
main.appendChild(section);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'paragrafo 1';
section.appendChild(paragrafo);

const leftSection = document.createElement('section');
leftSection.classList.add('left-content');
main.appendChild(leftSection);

const rightSection = document.createElement('section');
rightSection.classList.add('right-content');
main.appendChild(rightSection);

const img = document.createElement('img');
img.classList.add('small-image');
img.src = 'https://picsum.photos/200';
leftSection.appendChild(img);

const list = document.createElement('ul');
numbersList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbersList.length; index += 1) {
    valueList = numbersList[index];

    li = document.createElement('li');
    li.innerText = valueList
    list.appendChild(li)
}
rightSection.appendChild(list)

for (let index = 0; index < 3; index+= 1) {
    h3 = document.createElement('h3')
    h3.classList.add('description')
    main.appendChild(h3)
}

// bonus
h1.classList.add('title');

main.removeChild(leftSection);

rightSection.style.margin = '0 auto'

const paiSection = section.parentNode
paiSection.style.backgroundColor = 'green'

list.lastChild.remove() // apaga o ultimo elemento
list.lastChild.remove()
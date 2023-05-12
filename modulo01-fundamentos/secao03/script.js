const whereA = document.getElementById('where-are-you')
const parent = whereA.parentNode // pegando o pai
const firstChild = whereA.firstElementChild // pegando o primeiro filho

parent.style.color = 'red'
firstChild.style.innerText = 'First child of child'

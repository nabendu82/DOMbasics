//Grab Single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//Select Multiple Item
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//Iterating through
const nodeItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('item');

nodeItems.forEach(item => console.log(item));
//colItems.forEach(item => console.log(item));

[...colItems].forEach(item => console.log(item));

//DOM manipulation
const ul = document.querySelector('.items');

//ul.remove();
ul.firstElementChild.textContent = 'HTML';
ul.children[1].innerText = 'CSS';
ul.lastElementChild.innerHTML = '<b>JavaScript</b>'

const btn = document.querySelector('.btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';

//Event listener
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.items');

btn.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';
  ul.firstElementChild.textContent = 'JavaScript';
  ul.children[1].innerText = 'CSS';
  ul.lastElementChild.innerHTML = '<b>HTML</b>'
})
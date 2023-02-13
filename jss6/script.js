const linkEl = document.querySelector('#super_link');
console.log(linkEl);

const cardEl = document.querySelectorAll('.card-link');
cardEl.forEach(element => {
    element.textContent = 'ссылка';
});

const cardbodyEl = document.querySelector('.card-body');
const cardLinkEl = cardbodyEl.querySelectorAll('.card-link');
console.log(cardLinkEl);

const dataEl = document.querySelector("[data-number='50']");
console.log(dataEl);

const titleEl = document.querySelector('title');
const textEl = titleEl.textContent
console.log(textEl);

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentNode);

const paragrphEl = document.createElement('p');
paragrphEl.textContent = 'Привет';
const cardclassEl = document.querySelector('.card');
cardclassEl.prepend(paragrphEl);

const delEL = document.querySelector('h6');
delEL.remove();
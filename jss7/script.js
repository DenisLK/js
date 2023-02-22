// 1 задача
const dropdownItemEl = document.querySelectorAll('.dropdown-item');
dropdownItemEl.forEach(function (element) {
    element.classList.add('super-dropdown')
});

// 2 задача

const btnEl = document.querySelector('.btn')
btnEl.classList.toggle('btn-secondary');
// const btnEl = document.querySelector('.btn');
// if (btnEl.classList.contains('btn-secondary')) {
//     btnEl.classList.remove('btn-secondary');
// } else {
//     btnEl.classList.add('btn-secondary');
// }


// 3 задача
document.querySelector('.menu').classList.remove('dropdown-menu');

// 4 задача
document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 5 задача
document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = "3";

// 6 задача
document.querySelector('.dropdown-toggle').removeAttribute('type')
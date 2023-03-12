const menuBtn = document.querySelector('.menu-button');
const menuEl = document.querySelector('.menu');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('activ');
    menuEl.classList.toggle('active');
})
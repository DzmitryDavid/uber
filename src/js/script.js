const modal = document.querySelector('.modal');
const burger = document.querySelector('.hamburger');
const modalBurger = document.querySelector('.modal__hamburger');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

function showModal(e) {
    if (e.currentTarget === burger || e.currentTarget === modalBurger) {
        burger.classList.toggle('hamburger-active')
        modal.classList.toggle('show');
        modalBurger.classList.toggle('modal__hamburger-active');
        overlay.classList.toggle('show');
        body.classList.toggle('hide')
    }
};

burger.addEventListener('click', showModal);
modalBurger.addEventListener('click', showModal);

const modal = document.querySelector('.menu');
const burger = document.querySelector('.hamburger');
const menuItem = document.querySelectorAll('.menu__item');
console.log(menuItem);

function showModal(e) {
    if (e.currentTarget === burger) {
        burger.classList.toggle('hamburger-active')
        modal.classList.toggle('menu-active')
    }
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.toggle('hamburger-active');
        modal.classList.toggle('menu-active');
    })
})

burger.addEventListener('click', showModal);

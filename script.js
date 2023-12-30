const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})
const button = document.getElementById('main__btn');
function main__btn(){
    button.innerHTML = '<a href="#">Get started</a>';
}
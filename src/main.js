import '/src/style.css'

const menu = document.querySelector('.hamburger');
const offcanvas = document.querySelector('.offcanvas');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    offcanvas.classList.toggle('offcanvas-active');
});

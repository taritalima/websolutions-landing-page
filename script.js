const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('header nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// JavaScript Document
console.log("hi");

const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('open');
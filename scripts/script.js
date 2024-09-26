// JavaScript Document
console.log("hi");

const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Toggle the menu when the button is clicked
    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('show-menu');
    });
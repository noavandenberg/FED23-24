const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('active');
    });
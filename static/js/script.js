console.log("Conectado!")

window.addEventListener('load', function () {
    if (typeof bootstrap !== 'undefined') {
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltips.forEach(el => {
            new bootstrap.Tooltip(el, {
                boundary: document.body
            });
        });
    } else {
        console.error("Bootstrap JS no cargado");
    }
});

/* SCROLL NAVBAR + NAV SECUNDARIO */
const scrollContainer = document.querySelector('.right-page-container');
const navbar = document.querySelector('.navbar');
const secondaryNav = document.getElementById('secondary-nav');

if (scrollContainer) {
    scrollContainer.addEventListener('scroll', () => {

        if (scrollContainer.scrollTop > 10) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        if (scrollContainer.scrollTop > 20) {
            secondaryNav.classList.add('nav-hidden');
        } else {
            secondaryNav.classList.remove('nav-hidden');
        }

    });
}

/* ACTIVAR LINK SELECCIONADO */
const navLinks = document.querySelectorAll('.nav2-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
// Add custom JavaScript here
function navbarOnScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
            navbar.classList.add('shadow-lg');
        }
        else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
            navbar.classList.remove('shadow-lg');
        }
    });
}

document.addEventListener('DOMContentLoaded', navbarOnScroll);
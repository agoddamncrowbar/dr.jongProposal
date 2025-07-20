// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle aria-expanded for accessibility
        const isExpanded = navMenu.classList.contains('active');
        hamburgerMenu.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when a nav link is clicked (useful for single-page apps)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when window is resized to larger screen
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        }
    });

    // Set initial aria-expanded state
    hamburgerMenu.setAttribute('aria-expanded', 'false');
});
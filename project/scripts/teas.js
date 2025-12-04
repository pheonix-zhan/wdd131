document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------
    // 1. Mobile Navigation Toggle
    // ---------------------------
    const menuButton = document.getElementById('menuButton');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');

        // Update aria-expanded for accessibility
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when a link is clicked (mobile)
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                menuButton.setAttribute('aria-expanded', false);
            }
        });
    });

    // ---------------------------
    // 2. Lazy Loading Images
    // ---------------------------
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        if (!img.dataset.src) {
            img.dataset.src = img.src;
            img.src = 'images/placeholder.jpg';
            img.classList.add('lazy');
        }
        imageObserver.observe(img);
    });

    // ---------------------------
    // 3. Footer Updates
    // ---------------------------
    const currentYearEl = document.getElementById('currentYear');
    const lastModifiedEl = document.getElementById('lastModified');

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;

});

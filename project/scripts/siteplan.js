// scripts/siteplan.js

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
        // Use data-src for lazy loading if not already set
        if (!img.dataset.src) {
            img.dataset.src = img.src;
            img.src = 'images/placeholder.jpg'; // Placeholder image
            img.classList.add('lazy');
        }

        // Observe each image for lazy loading
        imageObserver.observe(img);
    });

    // ---------------------------
    // 3. Footer Updates
    // ---------------------------
    const currentYearEl = document.getElementById('currentYear');
    const lastModifiedEl = document.getElementById('lastModified');

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;

    // ---------------------------
    // 4. Smooth Scroll (Optional Enhancement)
    // ---------------------------
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        });
    });

});

/* global console */

// 🎯 Inisialisasi animasi scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-hover, .project-card').forEach(element => {
        observer.observe(element);
    });
}

// 🧭 Smooth scroll untuk anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 🚀 Inisialisasi flip card pada project cards
function initProjectCardFlip() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Jika yang diklik adalah link atau turunannya, biarkan berfungsi normal
            if (e.target.closest('a')) {
                return;
            }
            
            // Toggle class flipped
            this.classList.toggle('flipped');
        });
    });
}

// Jalankan semua inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    initProjectCardFlip();

    // eslint-disable-next-line no-console
    console.log('Flip card diaktifkan dengan hover');
    // eslint-disable-next-line no-console
    console.log(`${document.querySelectorAll('.project-card').length} project card ditemukan`);
});

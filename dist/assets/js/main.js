document.addEventListener('DOMContentLoaded', function() {
    const components = document.querySelectorAll('[data-include]');
    let loadedCount = 0;

    // Fungsi untuk inisialisasi setelah semua komponen dimuat
    function initializeAfterLoad() {
        // Tunggu sedikit untuk memastikan DOM benar-benar siap
        setTimeout(() => {
            if (typeof initScrollAnimations === 'function') {
                initScrollAnimations();
            }
            if (typeof initProjectCardFlip === 'function') {
                initProjectCardFlip();
            }
            if (typeof initSmoothScroll === 'function') {
                initSmoothScroll();
            }
        }, 100); // Tunggu 100ms setelah load terakhir
    }

    // Jika tidak ada komponen yang perlu dimuat, inisialisasi langsung
    if (components.length === 0) {
        initializeAfterLoad();
        return;
    }

    components.forEach(component => {
        const filePath = component.getAttribute('data-include') + '.html';

        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                component.innerHTML = data;
                loadedCount++;
                
                if (loadedCount === components.length) {
                    initializeAfterLoad();
                }
            })
            .catch(error => {
                console.error('Error loading component:', error);
                loadedCount++;
                
                // Tetap jalankan inisialisasi jika ada error
                if (loadedCount === components.length) {
                    initializeAfterLoad();
                }
            });
    });
});
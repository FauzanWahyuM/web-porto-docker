/* global initScrollAnimations initProjectCardFlip initSmoothScroll */
document.addEventListener('DOMContentLoaded', function () {
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

            // --- Tambahan: Jalankan toggle theme setelah komponen dimuat ---
            setupThemeToggle();
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

                if (loadedCount === components.length) {
                    initializeAfterLoad();
                }
            });
    });

    // Fungsi toggle tema
    function setupThemeToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        const root = document.documentElement;

        if (!toggleBtn) return;

        // Cek preferensi tersimpan
        if (localStorage.getItem('theme') === 'dark') {
            root.classList.add('dark');
            toggleBtn.textContent = '☀️';
        } else {
            root.classList.remove('dark');
            toggleBtn.textContent = '🌙';
        }

        // Toggle saat diklik
        toggleBtn.addEventListener('click', () => {
            if (root.classList.contains('dark')) {
                root.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                toggleBtn.textContent = '🌙';
            } else {
                root.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                toggleBtn.textContent = '☀️';
            }
        });
    }
});

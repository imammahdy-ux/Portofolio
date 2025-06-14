document.addEventListener('DOMContentLoaded', () => {
    // --- Animasi Selamat Datang (Welcome Overlay) ---
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const body = document.body;

    // Fungsi untuk menyembunyikan overlay
    const hideOverlay = () => {
        if (welcomeOverlay) {
            welcomeOverlay.classList.add('hidden');
            setTimeout(() => {
                body.classList.add('loaded');
            }, 500); // Memberi waktu transisi overlay selesai
        }
    };

    // Sembunyikan overlay setelah 3 detik
    setTimeout(() => {
        hideOverlay();
    }, 3000);

    // --- Smooth Scrolling untuk Navigasi ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.header').offsetHeight;
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Animasi Scroll (Fade-in-section) ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // CATATAN: Kode WhatsApp untuk AULINA Bouquet TIDAK ADA DI SCRIPT INI.
    // Script ini hanya untuk portofolio pribadi Imammahdy.
});
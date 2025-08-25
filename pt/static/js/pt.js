document.addEventListener('DOMContentLoaded', function () {
    // --- Inisialisasi Feather Icons ---
    feather.replace();

    // --- Inisialisasi Swiper Slider ---
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- Efek Scroll pada Header ---
    // ▼▼▼ PERUBAHAN ADA DI BLOK INI ▼▼▼
    const header = document.getElementById('header');
    const heroSliderSection = document.getElementById('beranda'); // 1. Ambil elemen slider

    if (header && heroSliderSection) {
        window.addEventListener('scroll', function () {
            // 2. Bandingkan posisi scroll dengan tinggi slider
            // Navbar akan berubah sedikit sebelum slider benar-benar hilang dari layar
            if (window.scrollY > heroSliderSection.offsetHeight - 80) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    // ▲▲▲ AKHIR DARI PERUBAHAN ▲▲▲

    // --- Logika Navigasi (Menu & Dropdown) ---

    // 1. Toggle Menu Mobile Utama (Hamburger)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Toggle Dropdown "Layanan" di Desktop
    const layananDropdownToggle = document.getElementById('layanan-dropdown-toggle');
    const layananDropdownMenu = document.getElementById('layanan-dropdown-menu');
    if (layananDropdownToggle && layananDropdownMenu) {
        layananDropdownToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            layananDropdownMenu.classList.toggle('hidden');
        });
    }
    window.addEventListener('click', function () {
        if (layananDropdownMenu && !layananDropdownMenu.classList.contains('hidden')) {
            layananDropdownMenu.classList.add('hidden');
        }
    });

    // 3. Toggle Dropdown "Layanan" di Mobile
    const layananMobileToggle = document.getElementById('layanan-mobile-toggle');
    const layananMobileMenu = document.getElementById('layanan-mobile-menu');
    if (layananMobileToggle && layananMobileMenu) {
        layananMobileToggle.addEventListener('click', function () {
            layananMobileMenu.classList.toggle('hidden');
            const icon = layananMobileToggle.querySelector('i');
            icon.classList.toggle('rotate-180');
        });
    }

    // --- Animasi Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }
});
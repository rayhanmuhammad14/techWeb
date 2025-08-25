document.addEventListener("DOMContentLoaded", function () {
    // === Logika Menu Mobile (Hamburger) ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // === Efek Scroll pada Header ===
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // === Animasi Scroll (Kode Anda yang sudah ada) ===
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// === Fungsi Dropdown Tim (Kode Anda yang sudah ada) ===
// Biarkan fungsi ini di luar agar bisa diakses secara global jika dipanggil dari HTML
let openDropdown = null;

function toggleDropdown(cardId) {
    const card = document.getElementById(cardId);
    const content = card.querySelector('.team-dropdown-content');

    if (openDropdown && openDropdown !== content) {
        openDropdown.classList.remove('show');
    }

    content.classList.toggle('show');

    if (content.classList.contains('show')) {
        openDropdown = content;
    } else {
        openDropdown = null;
    }
}
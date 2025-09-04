// ==========================================================
// BAGIAN GLOBAL: Fungsi yang dipanggil langsung dari HTML
// ==========================================================

// Variabel untuk melacak dropdown tim yang sedang terbuka
let openDropdown = null;

// Fungsi untuk membuka/menutup dropdown tim
function toggleDropdown(cardId) {
    const card = document.getElementById(cardId);
    const content = card.querySelector('.team-dropdown-content');

    // Jika yang diklik adalah dropdown yang sudah terbuka, tutup saja
    const isAlreadyOpen = (openDropdown === content);

    // Selalu tutup dropdown yang mungkin sedang terbuka
    if (openDropdown) {
        openDropdown.classList.remove('show');
    }

    // Jika yang diklik tadi belum terbuka, buka sekarang
    if (!isAlreadyOpen) {
        content.classList.add('show');
        openDropdown = content;
    } else {
        // Jika yang diklik adalah yang sudah terbuka, reset statusnya
        openDropdown = null;
    }
}


// ==========================================================
// BAGIAN UTAMA: Dijalankan setelah HTML selesai dimuat
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {

    // --- Referensi Elemen Penting ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');

    // --- Logika untuk Tombol Hamburger ---
    // Logika ini HANYA untuk membuka/menutup saat tombolnya diklik
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- [PERBAIKAN UTAMA] Listener klik global untuk menutup navbar DAN dropdown tim ---
    document.addEventListener('click', function (event) {
        // 1. Logika untuk menutup NAVBAR MOBILE
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            // Cek apakah klik terjadi di luar menu DAN bukan pada tombol hamburger itu sendiri
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);

            if (!isClickInsideMenu && !isClickOnButton) {
                mobileMenu.classList.add('hidden');
            }
        }

        // 2. Logika untuk menutup DROPDOWN TIM
        if (openDropdown) {
            const activeCard = openDropdown.closest('.team-card');
            // Cek apakah klik terjadi di luar kartu tim yang aktif
            if (activeCard && !activeCard.contains(event.target)) {
                openDropdown.classList.remove('show');
                openDropdown = null;
            }
        }
    });


    // --- Efek Scroll pada Header ---
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- Animasi Scroll ---
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
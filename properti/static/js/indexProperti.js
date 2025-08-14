
// Inisialisasi Lucide Icons
lucide.createIcons();

// Script untuk Tab Beli/Sewa
const tabBeli = document.getElementById('tab-beli');
const tabSewa = document.getElementById('tab-sewa');
tabBeli.addEventListener('click', () => {
    tabBeli.classList.add('text-teal-600', 'border-teal-600');
    tabBeli.classList.remove('text-gray-500');
    tabSewa.classList.add('text-gray-500');
    tabSewa.classList.remove('text-teal-600', 'border-teal-600');
});
tabSewa.addEventListener('click', () => {
    tabSewa.classList.add('text-teal-600', 'border-teal-600');
    tabSewa.classList.remove('text-gray-500');
    tabBeli.classList.add('text-gray-500');
    tabBeli.classList.remove('text-teal-600', 'border-teal-600');
});

// Inisialisasi Swiper untuk Tim Kami
var teamSwiper = new Swiper('.team-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, // Membuat slider berulang
    autoplay: { // Menambahkan fitur autoplay
        delay: 3000, // Jeda 3 detik antar slide
        disableOnInteraction: false, // Autoplay tetap jalan meski ada interaksi user
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Inisialisasi Swiper untuk Mitra Kami
var partnerSwiper = new Swiper('.partner-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

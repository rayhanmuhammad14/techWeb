document.addEventListener('DOMContentLoaded', function () {
  // --- Feather Icons Initialization ---
  feather.replace();

  // --- Swiper Slider Initialization ---
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

  // --- PERUBAHAN JAVASCRIPT DI SINI ---
  // --- Header Scroll Effect ---
  const header = document.getElementById('header');
  const heroSection = document.getElementById('beranda'); // Ambil section slider
  window.addEventListener('scroll', () => {
    // Cek apakah scroll sudah melewati tinggi hero section
    if (window.scrollY > heroSection.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Navigation Logic (Mobile Menu & Desktop Dropdown) ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggle = document.getElementById('layanan-dropdown-toggle');
  const dropdownMenu = document.getElementById('layanan-dropdown-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah event sampai ke window
    dropdownMenu.classList.toggle('hidden');
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function (e) {
    if (!dropdownMenu.classList.contains('hidden')) {
      dropdownMenu.classList.add('hidden');
    }
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
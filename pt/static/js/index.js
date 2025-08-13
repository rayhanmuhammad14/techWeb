document.addEventListener('DOMContentLoaded', function () {
  // Feather Icons
  feather.replace();

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Reveal sections on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check

  // Navbar scroll effect
  const header = document.getElementById('header');
  const berandaSection = document.getElementById('beranda');
  const navLogo = document.getElementById('nav-logo');
  const navLinks = header ? header.querySelectorAll('.nav-link') : null;
  const mobileBtn = document.getElementById('mobile-menu-button');

  const handleHeaderScroll = () => {
    if (!berandaSection || !header || !navLogo || !navLinks || !mobileBtn) return;

    const heroBottom = berandaSection.getBoundingClientRect().bottom;
    const headerHeight = header.offsetHeight;

    if (heroBottom < headerHeight) {
      header.classList.add('bg-white/95', 'backdrop-blur-lg', 'shadow-sm');
      navLogo.classList.remove('text-white');
      navLogo.classList.add('text-primary');
      mobileBtn.classList.remove('text-white');
      mobileBtn.classList.add('text-gray-700');
      navLinks.forEach((link) => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-600');
      });
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-lg', 'shadow-sm');
      navLogo.classList.add('text-white');
      navLogo.classList.remove('text-primary');
      mobileBtn.classList.add('text-white');
      mobileBtn.classList.remove('text-gray-700');
      navLinks.forEach((link) => {
        link.classList.add('text-white');
        link.classList.remove('text-gray-600');
      });
    }
  };

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Initial check on load

  // Layanan Dropdown Toggle
  const layananToggle = document.getElementById('layanan-dropdown-toggle');
  const layananMenu = document.getElementById('layanan-dropdown-menu');

  if (layananToggle && layananMenu) {
    layananToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      layananMenu.classList.toggle('hidden');
    });
  }

  // Close dropdown when clicking outside
  window.addEventListener('click', (e) => {
    if (layananMenu && !layananMenu.classList.contains('hidden') && layananToggle && !layananToggle.contains(e.target)) {
      layananMenu.classList.add('hidden');
    }
  });

  // Initialize Swiper
  if (document.querySelector('.hero-slider')) {
    const swiper = new Swiper('.hero-slider', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
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
  }
});

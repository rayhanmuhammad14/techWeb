
// Script untuk Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

// Script untuk menambahkan shadow pada header saat scroll
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
})

// Script untuk menampilkan tahun sekarang di footer
document.getElementById('year').textContent = new Date().getFullYear()

// Script untuk menutup menu mobile saat link di-klik
document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
    })
})

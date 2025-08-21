
document.addEventListener("DOMContentLoaded", function () {
    // Pilih semua elemen yang ingin dianimasikan
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Buat observer baru
    const observer = new IntersectionObserver((entries) => {
        // Loop melalui setiap elemen yang diamati
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam viewport
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' untuk memicu animasi
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        // Opsi: Tentukan seberapa banyak bagian dari elemen yang harus terlihat
        // sebelum animasi dipicu. 0.1 berarti 10%.
        threshold: 0.1
    });

    // Minta observer untuk mengamati setiap elemen yang telah dipilih
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

 // Simpan dropdown yang sedang terbuka
  let openDropdown = null;

  function toggleDropdown(cardId) {
    const card = document.getElementById(cardId);
    const content = card.querySelector('.team-dropdown-content');

    // Jika ada dropdown lain yang terbuka dan itu bukan yang ini, tutup dulu
    if (openDropdown && openDropdown !== content) {
      openDropdown.classList.remove('show');
    }

    // Toggle (buka/tutup) dropdown yang diklik
    content.classList.toggle('show');

    // Perbarui status dropdown yang sedang terbuka
    if (content.classList.contains('show')) {
      openDropdown = content; // Set sebagai yang sedang terbuka
    } else {
      openDropdown = null; // Tidak ada yang terbuka
    }
  }
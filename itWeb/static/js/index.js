
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

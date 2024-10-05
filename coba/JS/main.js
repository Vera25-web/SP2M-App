// Menangani event klik pada link navigasi
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Mendapatkan elemen target berdasarkan ID dari href
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll menggunakan JavaScript
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

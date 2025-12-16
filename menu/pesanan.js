// GANTI NOMOR WA DI SINI (Format: 628xxx tanpa tanda + atau 0 di depan)
const nomorWA = "6281389983202";

// Fungsi Toggle Menu di Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Fungsi Pesan Menu Spesifik
function pesanMenu(namaMenu) {
    const text = `Halo kak, saya mau pesan *${namaMenu}*. Apakah masih tersedia?`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Fungsi Pesan Umum (Tombol Floating & Nav)
function pesanUmum() {
    const text = "Halo kak, saya mau pesan Ayam Geprek dong.";
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

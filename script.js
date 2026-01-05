// 1. CONFIG: Ganti nomor ini dengan nomor WhatsApp bisnis Anda
// Format: 628xxx (Kode negara Indonesia 62, tanpa tanda + atau 0 di depan)
const nomorWA = "6281389983202";

// 2. FUNGSI: Toggle Menu (Untuk tampilan HP)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// 3. FUNGSI: Pesan Menu Spesifik
// Fungsi ini dipanggil saat tombol "Pesan" di kartu menu diklik
function pesanMenu(namaMenu) {
    // Membuat pesan otomatis
    const text = `Halo kak, saya mau pesan *${namaMenu}*. Apakah masih tersedia?`;

    // Membuat link WA
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

    // Membuka WA di tab baru
    window.open(url, '_blank');
}

// 4. FUNGSI: Pesan Umum
// Fungsi ini dipanggil oleh tombol Navigasi & Tombol Floating
function pesanUmum() {
    const text = "Halo kak, saya mau pesan Ayam Geprek dong.";
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
// ================= SEARCH BAR =================
function searchBarang() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {
        const nama = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = nama.includes(input) ? "block" : "none";
    });
}

// ================= SIMPAN BARANG =================
function simpanBarang(nama, harga) {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    keranjang.push({
        nama: nama,
        harga: harga
    });

    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    alert(nama + " berhasil disimpan!");
}

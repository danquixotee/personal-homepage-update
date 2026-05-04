document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fitur Active Link (Memberi tanda pada menu navigasi yang sedang dibuka)
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // 2. Penanganan Submit Form Kontak
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah browser melakukan reload halaman
            
            // Mengambil nilai dari input nama
            const namaInput = document.getElementById('nama').value;
            
            // Menampilkan pesan pop-up
            alert(`Halo ${namaInput}! Terima kasih sudah menghubungi saya. Pesan Anda telah berhasil disimulasikan untuk terkirim.`);
            
            // Mengosongkan form setelah "dikirim"
            contactForm.reset();
        });
    }
});
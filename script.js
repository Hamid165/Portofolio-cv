/**
 * Fungsi untuk mengambil data Quote Motivasi dari Public API
 * Menggunakan AJAX (Fetch API modern)
 */
function fetchQuote() {
    // Ambil elemen HTML yang akan diubah datanya
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    // Set elemen ke kondisi "loading"
    quoteText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading data from API...';
    quoteAuthor.innerText = '';

    // Endpoint API Publik (DummyJSON Random Quote)
    const apiUrl = 'https://dummyjson.com/quotes/random';

    // Proses Request AJAX menggunakan Fetch API
    fetch(apiUrl)
        .then(response => {
            // Cek jika response statusnya OK (200)
            if (!response.ok) {
                throw new Error('Gagal mengambil data jaringan');
            }
            // Ubah format response menjadi JSON
            return response.json();
        })
        .then(data => {
            // Manipulasi DOM: Tampilkan data dari API ke dalam HTML
            quoteText.innerText = `"${data.quote}"`;
            quoteAuthor.innerText = `- ${data.author}`;
        })
        .catch(error => {
            // Tangkap jika ada error saat request API
            console.error('Error fetching API:', error);
            quoteText.innerText = "Sorry, failed to load API at the moment.";
            quoteAuthor.innerText = "";
        });
}

// Panggil fungsi secara otomatis saat halaman web pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
     fetchQuote();
});

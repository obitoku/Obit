// Menunggu dokumen siap sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Mencegah reload halaman saat form dikirim

        // Ambil nilai input
        const formData = new FormData(form);

        try {
            // Kirim data ke Formspree
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                responseMessage.innerText = "Pesan berhasil dikirim! ✅";
                responseMessage.style.color = "#00ff99";
                form.reset(); // Reset form setelah dikirim
            } else {
                responseMessage.innerText = "Gagal mengirim pesan. ❌";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.innerText = "Terjadi kesalahan! Coba lagi.";
            responseMessage.style.color = "red";
        }
    });

    // Efek animasi saat scroll
    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Panggil saat pertama kali dimuat
});
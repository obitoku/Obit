// Efek Ketik di Bagian Tentang
const text = "welcome to my website";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
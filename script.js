const kucing = [
    "YOU ARE BEAUTIFUL",
    "YOU ARE VALUABLE",
    "YOU ARE SMART",
    "YOU ARE PERFECT",
    "I'M PROUD OF YOU SWEETIE <33"
];

// Memainkan audio otomatis saat halaman dimuat
window.onload = () => {
    const audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.error("Audio tidak dapat diputar:", error);
    });
};

document.getElementById("kucingButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * kucing.length);
    const kucingDisplay = document.getElementById("kucingDisplay");
    const audio = document.getElementById("audio");

    kucingDisplay.innerText = kucing[randomIndex];
    audio.currentTime = 0; // Reset audio ke awal
    audio.play(); // Mainkan audio
});
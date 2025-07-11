const playButton = document.getElementById('playButton');
const music = document.getElementById('bg-music');
const playIcon = document.getElementById('playIcon');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playIcon.textContent = '⏸';
    } else {
        music.pause();
        playIcon.textContent = '▶';
    }
});

const confettiWrapper = document.getElementById('confetti-wrapper');
const colors = ['#f94144', '#f3722c', '#f8961e', '#90be6d', '#577590', '#43aa8b', '#ff69b4', '#ffd700'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
    confetti.style.width = `${6 + Math.random() * 6}px`;
    confetti.style.height = `${6 + Math.random() * 6}px`;
    confettiWrapper.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 100);
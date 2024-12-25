// Countdown Timer Logic
const countdownElement = document.getElementById("countdown-timer");
const endDate = new Date("2024-12-31T23:59:59").getTime(); // Set your deadline

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.textContent = "This offer has expired.";
    }
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();


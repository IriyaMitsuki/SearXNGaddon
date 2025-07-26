document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const greetingElement = document.getElementById('greeting');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
    }

    function setGreeting() {
        const hour = new Date().getHours();
        let greetingText = 'Здравствуйте';
        
        if (hour < 5) {
            greetingText = 'Доброй ночи';
        } else if (hour < 12) {
            greetingText = 'Доброе утро';
        } else if (hour < 18) {
            greetingText = 'Добрый день';
        } else {
            greetingText = 'Добрый вечер';
        }
        
        greetingElement.textContent = greetingText;
    }

    updateClock();
    setGreeting();

    setInterval(updateClock, 1000);
});
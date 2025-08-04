document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const greetingElement = document.getElementById('greeting');
    const pageTitleElement = document.getElementById('page-title');
    const searchInputElement = document.getElementById('search-input');

    // Определение языка браузера и локализация
    function getLocale() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // Языки стран СНГ
        const cisLanguages = ['ru', 'uk', 'be', 'kk', 'ky', 'uz', 'tj', 'tm', 'az', 'hy', 'ka', 'mo'];
        
        if (cisLanguages.includes(langCode)) {
            return langCode === 'uk' ? 'uk' : 
                   langCode === 'be' ? 'be' : 
                   langCode === 'kk' ? 'kk' : 'ru';
        }
        
        return 'en';
    }

    // Переводы
    const translations = {
        'ru': {
            newTabTitle: 'Новая вкладка',
            searchPlaceholder: 'Поиск в SearXNG...',
            greetingDefault: 'Здравствуйте',
            greetingNight: 'Доброй ночи',
            greetingMorning: 'Доброе утро',
            greetingAfternoon: 'Добрый день',
            greetingEvening: 'Добрый вечер'
        },
        'uk': {
            newTabTitle: 'Нова вкладка',
            searchPlaceholder: 'Пошук в SearXNG...',
            greetingDefault: 'Вітаю',
            greetingNight: 'Доброї ночі',
            greetingMorning: 'Доброго ранку',
            greetingAfternoon: 'Добрий день',
            greetingEvening: 'Добрий вечір'
        },
        'be': {
            newTabTitle: 'Новая ўкладка',
            searchPlaceholder: 'Пошук у SearXNG...',
            greetingDefault: 'Вітаю',
            greetingNight: 'Добрай ночы',
            greetingMorning: 'Добрай раніцы',
            greetingAfternoon: 'Добры дзень',
            greetingEvening: 'Добры вечар'
        },
        'kk': {
            newTabTitle: 'Жаңа қойынды',
            searchPlaceholder: 'SearXNG-да іздеу...',
            greetingDefault: 'Сәлеметсіз бе',
            greetingNight: 'Қайырлы түн',
            greetingMorning: 'Қайырлы таң',
            greetingAfternoon: 'Қайырлы күн',
            greetingEvening: 'Қайырлы кеш'
        },
        'en': {
            newTabTitle: 'New Tab',
            searchPlaceholder: 'Search with SearXNG...',
            greetingDefault: 'Hello',
            greetingNight: 'Good night',
            greetingMorning: 'Good morning',
            greetingAfternoon: 'Good afternoon',
            greetingEvening: 'Good evening'
        }
    };

    const currentLocale = getLocale();
    const t = translations[currentLocale];

    // Применение локализации
    pageTitleElement.textContent = t.newTabTitle;
    searchInputElement.placeholder = t.searchPlaceholder;

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
    }

    function setGreeting() {
        const hour = new Date().getHours();
        let greetingText = t.greetingDefault;
        
        if (hour < 5) {
            greetingText = t.greetingNight;
        } else if (hour < 12) {
            greetingText = t.greetingMorning;
        } else if (hour < 18) {
            greetingText = t.greetingAfternoon;
        } else {
            greetingText = t.greetingEvening;
        }
        
        greetingElement.textContent = greetingText;
    }

    updateClock();
    setGreeting();

    setInterval(updateClock, 1000);

    // Обработка отправки формы поиска
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const searchInput = document.getElementById('search-input');
            const query = searchInput.value.trim();
            
            if (query) {
                // Форма уже настроена на отправку на search.hbubli.cc
                // Просто позволяем стандартной отправке произойти
                return true;
            } else {
                e.preventDefault();
                searchInput.focus();
                return false;
            }
        });
    }
});
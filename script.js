// Год в футере
document.addEventListener("DOMContentLoaded", ()=> {
    const year = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
});

// Модальное окно в header
document.addEventListener("DOMContentLoaded", () => {
    const modal           = document.getElementById("modal-form");
    const overlay         = document.getElementById("overlay");
    const openModalButton = document.querySelector(".header__form");
    const closeModalButton= document.querySelector(".close-modal");

    // Добавляем ссылки на мобильное меню и бургер
    const nav    = document.querySelector(".header__nav");
    const burger = document.querySelector(".burger");

    openModalButton.addEventListener("click", () => {
      // 1) Закрываем мобильное меню, если оно открыто
        if (nav.classList.contains("header__nav--open")) {
            nav.classList.remove("header__nav--open");
            burger.setAttribute("aria-expanded", "false");
        }
      // 2) Открываем модалку как было
        modal.classList.add("show");
        overlay.classList.add("show");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    });
});

// Фастфуд
document.addEventListener('DOMContentLoaded', () => {
    const burger       = document.querySelector('.burger');
    const nav          = document.querySelector('.header__nav');
    const closeNavBtn  = document.querySelector('.nav-close');
    const navLinks     = document.querySelectorAll('.header__page-link');

    // Функция переключения меню
    function toggleNav() {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('header__nav--open');
    }

    burger.addEventListener('click', toggleNav);
    closeNavBtn.addEventListener('click', toggleNav);

    // При клике на любую ссылку — тоже закрываем
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('header__nav--open')) {
                toggleNav();
            }
        });
    });
});

// Анимашки появления с interspector
const elements = document.querySelectorAll('.hidden');
const elements2 = document.querySelectorAll('.hidden-2');
const elements3 = document.querySelectorAll('.hidden-3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        }
    });
},
{ threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-2');
            observer2.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.2 });

elements2.forEach(el => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-3');
            observer3.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.2 });

elements3.forEach(el => observer3.observe(el));

// Трекеры для составной формы
// 1. Пользователь начал заполнять любую форму
document.querySelectorAll('form input, form textarea').forEach(el => {
    el.addEventListener('input', () => {
    ym(101927491, 'reachGoal', 'form_start');
    }, 
    { once: true });
});
// 2. Пользователь отправил модальную форму
document.querySelector('.modal-form')?.addEventListener('submit', () => {
    ym(101927491, 'reachGoal', 'form_submit_header');
});
// 3. Пользователь отправил форму в блоке feedback
document.querySelector('.feedback-block__form')?.addEventListener('submit', () => {
    ym(101927491, 'reachGoal', 'form_submit_feedback');
});


// TG Bot сбор данных и отправка
function collectClientData() {
    const now = new Date();
    return {
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Мобильное' : 'Десктоп',
        screen: `${window.innerWidth}px`,
        lang: (navigator.language || navigator.userLanguage).toUpperCase(),
        userAgent: navigator.userAgent.replace(/</g, '&lt;').replace(/>/g, '&gt;').slice(0, 400),
        utm: {
            source: new URLSearchParams(window.location.search).get('utm_source') || 'Нет данных о метке',
            medium: new URLSearchParams(window.location.search).get('utm_medium') || 'Нет данных о метке',
            campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'Нет данных о метке'
        }
    };
}
function buildMessage(info, label, value) {
    return `${label} <b>${value}</b> на сайте <b>Future Trade!</b>

📅 <b>Дата:</b> ${info.date}
🕒 <b>Время:</b> ${info.time}
📱 <b>Устройство:</b> ${info.device}
🖥 <b>Ширина экрана:</b> ${info.screen}
🌍 <b>Язык браузера:</b> ${info.lang}

🔗 <b>UTM Source:</b> ${info.utm.source}
🔗 <b>UTM Medium:</b> ${info.utm.medium}
🔗 <b>UTM Campaign:</b> ${info.utm.campaign}

🧠 <b>Браузер:</b>
<code>${info.userAgent}</code>`;
}

document.querySelectorAll('.messenger-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const messengerName = this.dataset.messenger;
        const info = collectClientData();
        const message = buildMessage(info, '🔔 Переход в', messengerName);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            window.location.href = this.href;
        })
        .catch(error => console.error('Ошибка:', error));
    });
});
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const phoneNumber = this.getAttribute('href').replace('tel:', '');
        const info = collectClientData();
        const message = buildMessage(info, '📞 Клик по телефону:', phoneNumber);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        });
    });
});
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const emailAddress = this.getAttribute('href').replace('mailto:', '');
        const info = collectClientData();
        const message = buildMessage(info, '✉️ Клик по почте:', emailAddress);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        });
    });
});

// Переключатель языка
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.lang-dropdown');

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // чтобы не сработал document click
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
    // если клик вне дропдауна — закрываем
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});